import React, { Component } from "react";
import { Nav, NavItem, NavLink, TabPane, TabContent } from 'reactstrap';
import SignUp from "./SignUpComponent";
import Login from "./LoginComponent";

class LoginMain extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeTab: '1'
          };
          this.toggle = this.toggle.bind(this);
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({ activeTab: tab });
        }
      }

    render(){
        return(
            <div className="container">
          <div className="row row-content">
            <div className="col-12">
                    <Nav className="nav-pills nav-fill " id="Login">
                    <NavItem>
                        <NavLink
                        className={({ active: this.state.activeTab === '1' })}
                        onClick={() => { this.toggle('1'); }}>
                        Login
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('2'); }}>
                        SignUp  
                        </NavLink>
                    </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        { this.state.activeTab == 1 ? <Login loginUser={this.props.loginUser}/> : null }
                    </TabPane>
                    <TabPane tabId="2">
                        { this.state.activeTab == 2 ? <SignUp /> : null }
                        </TabPane>
                        </TabContent>
                </div>
            </div>
        </div>

        )
    }
}

export default LoginMain;