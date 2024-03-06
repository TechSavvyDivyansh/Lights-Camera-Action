import React from 'react'
import QRCodeReact from 'qrcode.react'

let QrCode=({value})=>{
    return <QRCodeReact value={value} />
}

export default QrCode