import {TExecStandardResult, TLinuxExecResult, TWin32_LogicalDiskProperty, TWinExecResult} from "./utils/lib-types";
import utilsWin from "./utils/utils.win";
import utilsLinux from "./utils/utils.linux";

const os = require("os")
export type TGetDrivesOptions = {
    win32?: {
        properties?: TWin32_LogicalDiskProperty[]
    },
    linux?: {},
    asStandard: boolean // whether to return data with unified structure
}

const DEFAULT_OPTIONS = {
    asStandard: true
}
/**
 * Get drives list
 * @return Promise<TWinExecResult | TLinuxExecResult | TExecStandardResult>
 */
const getDrives = (options?: TGetDrivesOptions): Promise<TExecStandardResult | TWinExecResult | TLinuxExecResult> => {
    return new Promise((resolve, reject) => {
        const platform = os.platform().toLowerCase()
        const rebuildOptions = {...DEFAULT_OPTIONS, ...options}
        switch (platform) {
            // windows
            case "win32":
                utilsWin.buildRet(rebuildOptions).then(resolve).catch(reject)
                break
            case "linux":
            // as default
            default:
                utilsLinux.buildRet(rebuildOptions).then(resolve).catch(reject)
        }
    })
}

export default {
    getDrives
}
