const easyDiskInfo = require("./dist/index")

// 默认
easyDiskInfo.getDrives().then(res => {
    console.log(res)
})
// windows配置示例
easyDiskInfo.getDrives({
    win32: {
        properties: ["DeviceID", "DriveType", "FileSystem", "VolumeSerialNumber"]
    },
    asStandard: false
}).then(res => {
    console.log(res)
})