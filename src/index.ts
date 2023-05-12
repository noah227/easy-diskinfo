import {TLinuxExecResult, TWin32_LogicalDiskProperty, TWinExecResult} from "./lib-types";
import utilsWin from "./utils.win";

const os = require("os")
type TGetDrivesOptions = {
    winConfig: {
        properties?: TWin32_LogicalDiskProperty[]
    }
}


/**
 * 获取驱动器列表
 */
const getDrives = (options: TGetDrivesOptions): TWinExecResult | TLinuxExecResult => {
    return new Promise((resolve, reject) => {
        const platform = os.platform().toLowerCase()
        switch (platform) {
            // windows
            case "win32":
                const cmdStr = utilsWin.buildCmdStr()
                utilsWin.buildRet(cmdStr).then(resolve).catch(reject)
                break
            case "linux":
                break
            default:
            // .
        }
    })
}