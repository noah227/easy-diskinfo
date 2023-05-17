import {TLinuxExecResult} from "./lib-types.linux";
import {TGetDrivesOptions} from "../index";
import {TExecStandardResult} from "./lib-types";

const execSync = require("child_process").execSync
const buildCmdStr = () => {
    // 去除行首
    // Filesystem 1024-blocks Used Available Capacity Mounted on
    return "df -P | awk 'NR > 1'"
}

const headRows = ["FileSysItem", "_1024Blocks", "Used", "Available", "Capacity", "MountedOn"]
const convertFromBuffer = (buffer: Buffer) => {
    const dataList = (buffer.toString()).split("\n").filter(i => i).map(rs => {
        return rs.replace(/\s+/g, " ").split(" ")
    })
    return dataList.map(values => {
        return values.reduce((data, v, index) => {
            data[headRows[index]] = v
            return data
        }, {} as { [index: string]: any })
    })
}

const convertAsStandard = (data: TLinuxExecResult): TExecStandardResult => {
    const {} = data
    return data.map(item => {
        const {FileSysItem, _1024Blocks, Used, Available, Capacity, MountedOn} = item
        return {
            drive: FileSysItem,
            name: FileSysItem,
            used: Used * 1000,
            free: Available * 1000,
            total: _1024Blocks * 1000
        }
    })
}

const buildRet = (options: TGetDrivesOptions): Promise<TLinuxExecResult | TExecStandardResult> => {
    return new Promise((resolve, reject) => {
        try {
            const jsonRet = convertFromBuffer(execSync(buildCmdStr()))
            const asStandard = options.asStandard
            resolve(asStandard ? convertAsStandard(jsonRet) : jsonRet)
        } catch (e) {
            reject(e)
        }
    })
}

export default {
    buildRet
}