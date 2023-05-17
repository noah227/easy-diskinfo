/**
 * @see https://learn.microsoft.com/en-us/windows/win32/cimwin32prov/win32-logicaldisk#properties win32-logicaldisk#properties
 */
export type TWin32_LogicalDiskProperty =
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

type TWinExecResultItemFull = { [p in TWin32_LogicalDiskProperty]: any }
type TWinExecResultItem = Partial<TWinExecResultItemFull>

export type TWinExecResult = TWinExecResultItem[]









































