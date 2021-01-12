// import React, { Component } from 'react'
// import { Topbarstyle } from './TopbarStyle'

// export default class TopBar extends Component {

//     Logout = () => {
//         localStorage.clear();
//         window.location.reload()
//     }

//     render() {
//         return (
//             <Topbarstyle>
//                 <div className="topbar">
//                     <h3 className="left"><i>Ekasha</i></h3>
//                     <p></p>
//                     <div className="right">
//                         <button onClick={this.Logout}>LogOut</button>
//                     </div>
//                 </div>
//             </Topbarstyle>
//         )
//     }
// }
import React from 'react'
import { Topbarstyle } from './TopbarStyle'

export default function TopBar({ BR } = this.props) {

    const Logout = () => {
        localStorage.clear();
        window.location.reload()
    }

    return (
        <Topbarstyle>
            <div className="topbar">
                <div className="left">
                    <h3 className="Logo">Ekasha</h3>
                    <h6 className="Br">{BR}</h6>
                </div>
                <div className="right">
                    <button className="btn btn-primary" onClick={Logout}>LogOut</button>
                </div>
            </div>
        </Topbarstyle>
    )
}
