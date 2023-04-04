import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import  Dashboard  from "./AdminDashboardComponent";
import AdminLogin from "./AdminLoginComponent";


class Admin extends Component{

    render(){
        return(
            <div>
            <Switch>
                <Route path="/admin" exact><AdminLogin/></Route>
                <Route path="/admin/dashboard" exact><Dashboard postAnnouncement={this.props.postAnnouncement}/></Route>
            </Switch>
        </div>
        )
    }

}

export default Admin;


