import React from 'react'
import { Sidebarstyle } from './SidebarStyle'
import { UType, Modual } from '../../../core/array/array'
import Icons from '../../modual/component/Icons/Icons'
import { Link } from 'react-router-dom';

export default function Sidebar({ Test, JD, BR } = this.props) {

    return (
        <Sidebarstyle>
            <div className="sidebar ml-3 mr-3">
                {Modual.map((d, index) => (
                    <Link key={index} to={UType + "/" + d.module} >
                        <div className={d.module === BR ? "icon iconselect" : "icon"} onClick={() => Test(index), () => JD()}>
                            <Icons type={d.module} />
                        </div>
                    </Link>
                ))}
            </div>
        </Sidebarstyle>
    )
}
