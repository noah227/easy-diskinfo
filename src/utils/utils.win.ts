import {TExecStandardResult, TWin32_LogicalDiskProperty, TWinExecResult} from "./lib-types";
import {TGetDrivesOptions} from "../index";

const execSync = require("child_process").execSync

const DEFAULT_PROPERTIES: TWin32_LogicalDiskProperty[] = [
    "Caption",
    "FreeSpace",
    "Size",
    "VolumeName"
]
const buildCmdStr = (properties: TWin32_LogicalDiskProperty[] = DEFAULT_PROPERTIES) => {
    const cmdStrTplBase = `wmic logicaldisk get @Properties`
    const cmdStrTplCondition = `where @Conditions`
    const cmdStrTplSwitch = ``
    const cmdStrTail = `/format:csv`
    return [
        cmdStrTplBase.replace("@Properties", [...DEFAULT_PROPERTIES, ...properties].join(",")),
        cmdStrTail
    ].join(" ")
}

/**
 * 从/format:csv的结果进行的处理返回
 * @param csvBuffer
 */
const convertFromCsvBuffer = (csvBuffer: Buffer) => {
    const itemGroup = (csvBuffer.toString()).split("\n").filter(i => i)
    // 因为第一行是\r\r
    const columList = itemGroup[1].split(",")
    const dataList = itemGroup.slice(2).map(dataStr => dataStr.split(","))
    let ret: any[] = []
    dataList.forEach(row => {
        let data: { [index: string]: any } = {}
        row.forEach((v, index) => {
            data[columList[index].replaceAll("\r", "")] = v.replaceAll("\r", "")
        })
        ret.push(data)
    })
    return ret
}

const convertAsStandard = (data: TWinExecResult): TExecStandardResult => {
    return data.map(item => {
        const {Caption, FreeSpace, Size, VolumeName} = item
        const used = Size - FreeSpace
        return {
            drive: Caption,
            name: VolumeName,
            free: FreeSpace,
            used,
            total: Size
        }
    })
}

const buildRet = (options: TGetDrivesOptions): Promise<TWinExecResult> => {
    const properties = options.win32?.properties
    const cmdStr = buildCmdStr(properties)
    return new Promise((resolve, reject) => {
        try {
            const jsonRet = convertFromCsvBuffer(execSync(cmdStr))
            const asStandard = options.asStandard
            resolve(asStandard ? convertAsStandard(jsonRet) : jsonRet)
        } catch (e) {
            reject(e)
        }
    })
}

export default {
    buildCmdStr,
    buildRet
}