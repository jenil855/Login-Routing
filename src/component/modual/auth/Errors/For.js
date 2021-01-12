import React from 'react'
import { UType, Modual } from "../../../../core/array/array";
import { JbInput } from '../../component/AllExport';

export default function For() {
    const back = () => {
        window.location.replace(UType + "/" + Modual[0].module)
    }
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ marginTop: "20%" }}>
                <h1 style={{ color: "red" }}>404</h1>
                <h3 style={{ color: "red" }}>Not Found</h3>
                <p style={{ color: "red" }}>This resource requestedcould not be found on this server!</p>
                <JbInput type="submit" value="Back" onClick={back} />
            </div>
        </div>
    )
}
