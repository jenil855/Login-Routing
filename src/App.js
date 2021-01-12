import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Signin from './component/modual/auth/Signin'
import Page from './component/modual/page'
import { Redirect, Route } from 'react-router-dom'
import UserType from "./component/modual/auth/Errors/UserType";
import { Session, Login, UType, Modual, E403 } from './core/array/array'

function App() {
  const url = window.location.pathname
  return (
    <div className="App">
      <Route render={() => (<Redirect to={Session ? (url === "/" + E403 ? "/" + E403 : UType + "/" + Modual[0].module) : Login} />)} />
      <Route path={Login} component={Signin} />
      <Route path={UType} component={Page} />
      <Route path={"/" + E403} component={UserType} />
    </div>
  );
}

export default App;


