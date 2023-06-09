# easy-diskinfo

Get disk information with a promise style.

Well... Better to use [systeminformation](https://www.npmjs.com/package/systeminformation). 
Better Supports & Better Maintenance.
沉睡吧，骚年，哈哈哈！

## Features

* Promise
* Declaration Support
* Flexible Functions
* Extended Functions

## Supported Platforms

- [x] Windows(However, wmic is now deprecated as of recent versions of windows10 and even optional as of windows11 in the latest version)
- [x] Linux

## Apis

* getDrives(options: TDriveOptions): Promise<[TExecStandardResult](#TExecStandardResult) | TWinExecResult | TLinuxExecResult>

## Usage

* Default usage with a unified result returned

```js
const easyDiskInfo = require("easy-diskinfo")

// default
easyDiskInfo.getDrives().then((drives) => {

}).catch(e => {

})
```

* For a specialized result on Windows. 
At this condition, you can get more properties, see [win32-logicaldisk#properties](https://learn.microsoft.com/en-us/windows/win32/cimwin32prov/win32-logicaldisk#properties).

```js
// options.asStandard shall be set false to ensure an expected result
easyDiskInfo.getDrives({
    win32: {
        // through properties configuration, you can get more properties beside default one like Caption,.etc
        properties: ["DeviceID", "DriveType", "FileSystem", "VolumeSerialNumber"]
    },
    asStandard: false
}).then(res => {
    console.log(res)
})
``` 

## Types

### TGetDrivesOptions

```ts
type TGetDrivesOptions = {
    win32?: {
        properties?: TWin32_LogicalDiskProperty[]
    },
    linux?: {},
    asStandard: boolean // whether to return data with unified structure
}
```

### TWin32_LogicalDiskProperty

```ts
type TWin32_LogicalDiskProperty = "Access" | "Availability" | "BlockSize" | "Caption" |
...
```

### TExecStandardResult

```ts
type TExecStandardResult = {
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
```

