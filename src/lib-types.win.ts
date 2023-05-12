/**
 * @see https://learn.microsoft.com/en-us/windows/win32/cimwin32prov/win32-logicaldisk#properties win32-logicaldisk#properties
 */
type TWin32_LogicalDiskPropertyFull =
    "Access"
    | "Availability"
    | "BlockSize"
    | "Caption"
    | "Compressed"
    | "ConfigManagerErrorCode"
    | "ConfigManagerUserConfig"
    | "CreationClassName"
    | "Description"
    | "DeviceID"
    | "DriveType"
    | "ErrorCleared"
    | "ErrorDescription"
    | "ErrorMethodology"
    | "FileSystem"
    | "FreeSpace"
    | "InstallDate"
    | "LastErrorCode"
    | "MaximumComponentLength"
    | "MediaType"
    | "Name"
    | "NumberOfBlocks"
    | "PNPDeviceID"
    | "PowerManagementCapabilities"
    | "PowerManagementSupported"
    | "ProviderName"
    | "Purpose"
    | "QuotasDisabled"
    | "QuotasIncomplete"
    | "QuotasRebuilding"
    | "Size"
    | "Status"
    | "StatusInfo"
    | "SupportsDiskQuotas"
    | "SupportsFileBasedCompression"
    | "SystemCreationClassName"
    | "SystemName"
    | "VolumeDirty"
    | "VolumeName"
    | "VolumeSerialNumber"

export type TWin32_LogicalDiskProperty = Partial<TWin32_LogicalDiskPropertyFull>

type TWinExecResultItem = {
    [index: string]: any
}
export type TWinExecResult = TWinExecResultItem[] | null









































