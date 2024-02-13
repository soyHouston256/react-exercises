import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import './style.css'

export default function QrCodeGenerator() {
    const [qrCodeValue, setQrCodeValue] = useState('');
    const [input, setInput] = useState('');

    useEffect(()=>{

    },)

    function handleChangeQRCode(){
        setQrCodeValue(input)
        setInput('')
    }

    return (
        <div className="wrapper-qr-code-generator">
            <h1>QR Code Generator</h1>
            <div className="qr-option">
                <input className="input-code" onChange={(e)=>setInput(e.target.value)} type="text" name="qr-code" placeholder="Enter text to generate a QR code" /><br />
                <button className="button-generator" disabled={input === '' ? true : false} onClick={handleChangeQRCode}>Generate!</button>
            </div>
            <div className="qr-container">
                <QRCode
                    id="qr-code-value"
                    value={qrCodeValue}
                    size={500}
                    bgColor="#FFF" />
            </div>
        </div>
    );
}