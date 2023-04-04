import React, { Component } from "react";
import { Navbar, NavbarBrand, NavItem, NavbarToggler, Nav, Collapse, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { NavLink } from 'react-router-dom';


class Header extends Component{

    constructor(props){
        super(props);
            this.state = {
                isNavOpen : false
            };
            this.toggleNav = this.toggleNav.bind(this);
            this.handleLogout = this.handleLogout.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }



    handleLogout() {
        this.props.logoutUser();
    }


    render(){
        return(
            <>
        <Navbar dark expand="md">
            <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
                <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" height="35" width="41" alt="Mca Dept"/></NavbarBrand>
                <Collapse isOpen={ this.state.isNavOpen } navbar>
                    <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home"></span> Home
                        </NavLink>
                        </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/announcements">
                                <span className="fa fa-bullhorn"></span> Announcements
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/posts">
                                <span className="fa fa-camera"></span> Posts
                        </NavLink>
                    </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-address-card"></span> Contact Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                    <Button outline color="success"  href="/prayaana"><span className='fa'></span> Prayaana</Button>
                    <NavItem>
                        {!this.props.auth.isAuthenticated ?                             <NavLink className="nav-link" to="/login">
                                <span className="fa fa-sign-in fa-lg"></span> Login
                                {this.props.auth.isFetching ?
                                <span className="fa fa-spinner fa-pulse fa-fw"></span>                                
                            : null}
                             </NavLink>
                             :
                            <UncontrolledDropdown
                                        className="me-2"
                                        direction="down"
                                    >
                                        <DropdownToggle
                                        caret
                                        color="primary"
                                        >
                                        {this.props.auth.user.username}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <NavLink className="nav-link" to="/profile">
                                        <DropdownItem>
                                            Profile
                                        </DropdownItem >
                                        </NavLink>
                                        <DropdownItem divider />
                                        <NavLink className="nav-link" to="/myposts">
                                        <DropdownItem>
                                            My Posts
                                        </DropdownItem>
                                        </NavLink>
                                        <DropdownItem divider />
                                        <NavLink className="nav-link" to="/pizada">
                                        <DropdownItem>
                                            Pizada
                                        </DropdownItem>
                                        </NavLink>
                                        <DropdownItem divider />
                                        <NavLink className="nav-link" to="/logout">
                                        <DropdownItem onClick={this.handleLogout}>
                                            Logout
                                            {this.props.auth.isFetching ? 
                                            <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                            : null        
                                        }
                                        </DropdownItem>
                                        </NavLink>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                 }   
                        </NavItem>   
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
            </>
        )
    }
}

export default Header;