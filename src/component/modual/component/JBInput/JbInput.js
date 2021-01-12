import React, { useState } from 'react'
import Icons from '../Icons/Icons'
import { JbinputStyle } from "./JbinputStyle";

export default function JbInput({ checked, type, ...rest }) {
    const [show, setshow] = useState(false)
    const [Tpass, setTpass] = useState(type)
    const showtest = () => {
        setshow(!show)
        setTpass(Tpass === 'password' ? 'text' : 'password')
    }
    return (
        <JbinputStyle>
            <div className="InputBox">
                <input type={Tpass} {...rest} autoComplete="off" />
                {type === 'password' ? <Icons className="icon" type={show ? 'eyeOpen' : 'eyeClose'} onClick={showtest} /> : null}
            </div>
        </JbinputStyle>
    )
}
