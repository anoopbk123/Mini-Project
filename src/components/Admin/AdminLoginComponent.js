import React, { Component } from "react";
import { Card, Label, Col, Row, Button, CardBody } from 'reactstrap';
import { LocalForm, Control } from 'react-redux-form';

class AdminLogin extends Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(values){
        console.log("Current State is : " + JSON.stringify(values));
        alert("Current State is : " + JSON.stringify(values));
    
        }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12">   
                        <h3>Login</h3>
                        <Card>
                        <CardBody>
                        <LocalForm onSubmit={this.handleLogin}>
                        <Row className="form-group">
                          <Label htmlFor="username" md={2}>Username</Label>
                          <Col md={12}>
                          <Control.text
                            model=".username"
                            id="username"
                            name="username"
                            placeholder="Username"
                            className="form-control"
                          />
                          </Col>
                        </Row>
                        <Row className="form-group">
                          <Label htmlFor="password" md={2}>Password</Label>
                          <Col md={12}>
                          <Control.text
                            type="password"
                            model=".password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="form-control"
                          />
                          </Col>
                        </Row>
                        <Row className="form-group">
                        <Col md={2}>
                        <Button type="submit"value="submit" color="primary">
                                Login
                        </Button>
                        </Col>
                        </Row>
                      </LocalForm>
                      </CardBody>
                      </Card>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default AdminLogin;