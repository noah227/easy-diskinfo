type TLinuxExecResultProperty = "FileSysItem" | "_1024Blocks" | "Used" | "Available" | "Capacity" | "MountedOn"
type TLinuxExecResultItemFull = { [p in TLinuxExecResultProperty]: any }

type TLinuxExecResultItem = Partial<TLinuxExecResultItemFull>

export type TLinuxExecResult = TLinuxExecResultItem[]
