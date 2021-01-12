import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ProductManage from './pages/Modual1/ProductManage'
import Acc_Handling from './pages/Modual2/Acc_Handling'
import Products from './pages/Modual3/Product'
import Cart from './pages/Modual4/Cart'
import For from './auth/Errors/For'
import { Session, Login, UType, Modual } from '../../core/array/array'

export default function PageRouter({ select } = this.props) {

    const URL = window.location.pathname
    const Usertype = Session[0].auth[0].userType
    
    return (
        <div style={{ width: "100%" }}>
            <Route render={() => (<Redirect to={Session ? (URL === UType + '/' + Modual[0].module || URL === UType + '/' + Modual[1].module ? URL : UType + "/404") : Login} />)} />
            {Usertype === "Admin" ?
                <Switch>
                    <Route path={UType + "/" + Modual[0].module} component={ProductManage} />
                    <Route path={UType + "/" + Modual[1].module} component={Acc_Handling} />
                    <Route path={"*"} component={For} />
                </Switch>
                :
                <Switch>
                    <Route path={UType + "/" + Modual[0].module} component={Products} />
                    <Route path={UType + "/" + Modual[1].module} component={Cart} />
                    <Route path={"*"} component={For} />
                </Switch>
            }
        </div>
    )
}
