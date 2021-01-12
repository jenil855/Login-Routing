import React, { useState } from 'react'
import { JbInput } from '../component/AllExport'
import { SigninStyle } from './SigninStyle'
import { LoginData } from '../../../core/array/array'

export default function Signin() {

    const [authData, setAuthData] = useState({
        userID: null,
        password: null,
        userType: null,
    })

    const [submitted, setSubmitted] = useState(false)

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const DataSet = (e) => {
        authData[e.target.name] = e.target.value;
        setAuthData({ ...authData });
    }

    const handleSubmit = (e) => {
        const userData = authData;
        setSubmitted(true)

        if (userData.userType !== null && userData.userID !== null && userData.password !== null) {
            const checkData = userData.userType === "Admin" ? LoginData.Admin : LoginData.User
            if (JSON.stringify(checkData[0].auth[0]) === JSON.stringify(authData)) {
                localStorage.setItem("All-User-Control", JSON.stringify(checkData));
                window.location.reload()
            } else {
                alert("Login failed due to incorrect Username, Password or UserType")
                setTimeout(function () { window.location.reload() }, 500);
            }
        }
    }

    return (
        <SigninStyle>
            <div className="LoginBg">
                <div className="LoginBox" >
                    <div className="Header">Login Product</div>
                    <div className="Body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <JbInput onChange={(e) => DataSet(e)} type="email" className="email form-control" id="userId" name="userID" placeholder="Enter Email" />
                            {submitted ? (!authData.userID ? <span style={{ color: "red", fontSize: "14px" }}>Enter Email.</span> :
                                (validRegex.test(authData.userID) ? null : <span style={{ color: "red", fontSize: "14px" }}>Enter Valid Email.</span>)) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Password</label>
                            <JbInput onChange={(e) => { DataSet(e) }} type="password" className="pass form-control" id="password" name="password" placeholder="Enter Password" />
                            {submitted && !authData.password ? <span style={{ color: "red", fontSize: "14px" }}>Enter Password.</span> : null}
                        </div>
                        <div className="UserType">
                            <div className="form-check">
                                <input onChange={(e) => DataSet(e)} className="form-check-input" type="radio" name="userType" id="user" value="User" />
                                <label className="form-check-label">User</label>
                            </div>
                            <div className="form-check">
                                <input onChange={(e) => DataSet(e)} className="form-check-input" type="radio" name="userType" id="admin" value="Admin" />
                                <label className="form-check-label">Admin</label>
                            </div>
                        </div>
                        {submitted && !authData.userType ? <span style={{ color: "red", fontSize: "14px" }}>Chose Any Type.</span> : null}
                    </div>
                    <div className="Footer">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
                    </div>
                </div>
            </div>
        </SigninStyle>
    )
}