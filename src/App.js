import React from 'react'
import '../src/index.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashBoad/DashBoard'
import NavBar from './components/layOut/NavBar'
import CreateProject from './components/projects/CreateProject'
import ProjectDetails from './components/projects/ProjectDetails'



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path='/' exact> <Dashboard/> </Route>
        <Route path='/project/:id'> <ProjectDetails/> </Route>
        <Route path='/signin' > <SignIn/> </Route>
        <Route path='/signup'> <SignUp/> </Route>
        <Route path='/create' > <CreateProject/> </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
