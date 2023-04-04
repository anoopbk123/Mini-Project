import React, { Component } from "react";
import {
  Row,
  Col,
  Label,
  Button,
  Input,
  Form,
  FormGroup
} from "reactstrap";

const required = (val) => val && val.length;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleLogin = this.handleLogin.bind(this);
  } 

  handleLogin(event) {
    this.props.loginUser({username: this.username.value, password: this.password.value});
    event.preventDefault();
}


  render() {
    return (
      <>
            <div className="container">
              <div className="row row-content">
                <div className="col-12">

                      {/* Login Form Starts from here */}

                        <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                        <Row className="form-group">
                          <Label htmlFor="username" md={2}>Username</Label>
                          <Col md={12}>
                          <Input
                          type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            innerRef={(input) => this.username = input}
                          />
                          </Col>
                        </Row>
                        </FormGroup>
                        <FormGroup>
                        <Row className="form-group">
                          <Label htmlFor="password" md={2}>Password</Label>
                          <Col md={12}>
                          <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="form-control"
                            innerRef={(input) => this.password = input} 
                          />
                          </Col>
                        </Row>
                        </FormGroup>
                        <FormGroup check>
                        <Row className="form-group">
                          <Col md={12}>
                            <div className="form-check">
                            <Label check>
                            <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                            {/* {' '} */}
                            Remember Me
                          </Label>
                            </div>
                          </Col>
                        </Row>
                        </FormGroup>
                        <Row className="form-group">
                        <Col md={2}>
                            <Button type="submit"value="submit" color="primary">
                                Login
                            </Button>
                        </Col>
                    </Row>
                      </Form>
                </div>
              </div>
            </div>
      </>
    );
  }
}

export default Login;
