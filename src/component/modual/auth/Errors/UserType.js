import React from 'react'
import { UType, Modual } from "../../../../core/array/array";
import { JbInput } from '../../component/AllExport';

export default function UserType() {
    const back = () => {
        window.location.replace(UType + "/" + Modual[0].module)
    }
    return (
        <div>
            Sorry, you are not authorized to access this page. 
            <JbInput type="submit" value="Back" onClick={back} />
        </div>
    )
}
