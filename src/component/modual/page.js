import React, { useState, useEffect } from 'react'
import TopBar from "../layout/topbar/topBar";
import Sidebar from "../layout/sidebar/sideBar";
import Footer from "../layout/footer/footer";
import { PageStyle } from "./PageStyle";
import PageRouter from './pageRouter';
import { Session, Modual } from "../../core/array/array"

export default function Page() {

    const [select, setSelect] = useState(0)
    const url = window.location.href.split("/")
    const [BR, setBR] = useState(window.location.href.split("/"))

    const JD = () => {
        setBR(a = url[4])
        setBR(a)
    }

    let a = JSON.stringify(BR)
    useEffect((a) => {
        setBR(a = url[4])
        setBR(a)
    })

    const Test = (index) => {
        setSelect(index)
    }

    return (
        <PageStyle>
            {Session ?
                <div className="Page" >
                    <TopBar JD={JD} BR={BR} />
                    <div className="Content">
                        <Sidebar Test={Test} JD={JD} BR={BR} select={select} />
                        <PageRouter select={select} />
                    </div>
                    <Footer />
                </div > : null
            }
        </PageStyle>
    )
}
