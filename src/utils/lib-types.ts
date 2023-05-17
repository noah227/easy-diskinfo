export * from "./lib-types.win"
export * from "./lib-types.linux"

export type TExecStandardResultItem = {
    // drive
    drive: string
    // drive name
    name: string
    // used(Bytes)
    used: number
    // available(Bytes)
    free: number
    // total(Bytes)
    total: number
}

export type TExecStandardResult = TExecStandardResultItem[]