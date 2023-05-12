import {TWin32_LogicalDiskProperty} from "./lib-types";

const execSync = require("child_process").execSync

const DEFAULT_PROPERTIES: TWin32_LogicalDiskProperty[] = []
const buildCmdStr = (properties: TWin32_LogicalDiskProperty[] = DEFAULT_PROPERTIES) => {
    const cmdStrTplBase = `wmic logicaldisk get @Properties`
    const cmdStrTplCondition = `where @Conditions`
    const cmdStrTplSwitch = ``

    return [
        cmdStrTplBase.replace("@Properties", properties.join(","))
    ].join(" ")
}
const buildRet = (cmdStr: string) => {
    return new Promise((resolve, reject) => {
        try {
            const execRet = execSync(cmdStr).toString() as string
            const itemGroup = execRet.split("\n")
            // 因为第一行是\r\r
            const columList = itemGroup[1].split(",")

            const dataList = itemGroup.slice(2).map(dataStr => dataStr.split(","))
            let ret: any[] = []
            dataList.forEach(row => {
                let data: {[index: string]: any} = {}
                row.forEach((v, index) => {
                    data[columList[index].replaceAll("\r","")] = v.replaceAll("\r","")
                })
                ret.push(data)
            })
            console.log(ret)
            resolve(ret)
        } catch (e) {
            reject(e)
        }
    })
}

export default {
    buildCmdStr,
    buildRet
}