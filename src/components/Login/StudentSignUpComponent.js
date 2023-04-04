import React, { Component } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import {
  Label,
  Button,
  Row,
  Col,
  Form
} from "reactstrap";

const required = (val) => val && val.length;
const maxLength =(len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Student extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        // this.handleStudentLogin = this.handleStudentLogin.bind(this);
    }

    // handleStudentLogin(values){
    //     console.log("Current State is : " + JSON.stringify(values));
    //     alert("Current State is : " + JSON.stringify(values));
    // }

    render(){
        return (
            <div className="container">
              <div className="row row-content">
                <div className="col-12">
                  <Form>
                    <Row className="form-group">
                      <Label htmlFor="firstname" md={2}>First Name</Label>
                      <Col md={10}>
                      <Control.text model=".firstname" id="firstname" name="firstname" placeholder="First Name" className="form-control" 
                      validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                  }}/>
                                  <Errors 
                                  className="text-danger" model=".firstname" show="touched" 
                                  messages={{
                                    required: 'Required ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }} />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="lastname" md={2}>Last Name</Label>
                      <Col md={10}>
                      <Control.text model=".lastname" id="lastname" name="lastname" placeholder="Last Name" className="form-control" 
                      validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                  }}/>
                                  <Errors 
                                  className="text-danger" model=".lastname" show="touched" 
                                  messages={{
                                    required: 'Required ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }} />
                      </Col>
                    </Row>
                    <Row className="form-group">
                          <Label htmlFor="registerNumber" md={2} >Reg Number</Label>
                          <Col md={{size:6, offset:0}}>
                            <Control.text model=".registerNumber" id="registerNumber" name="registerNumber" placeholder="Register Number" className="form-control" 
                            validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                    }}/>
                          <Errors className="text-danger" model=".registerNumber" show="touched" messages={{
                                    required: 'Required',
                                    minLength: ' Must be greater than 2 Numbers',
                                    maxLength: ' Must be 15 Numbers or less',
                                    isNumber: ' Must be a Number'
                                }}/>
                          
                      </Col>
                      <Label htmlFor="batch" md={2}>Batch</Label>
                      <Col md={{size:2 , offset:0}}>
                      <Control.select model=".batch" name="batch" className="form-control">
                        <option selected>2021-2023</option>
                        <option>2022-2024</option>
                        <option>2023-2025</option>
                      </Control.select>
                      </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="email" md={2}> Email</Label>
                        <Col md={10}>
                                    <Control.text model=".email" id="email" name="email" placeholder="Email" className="form-control"
                                    validators={{
                                        required, validEmail
                                    }} />
                                    <Errors className="text-danger" model=".email" show="touched" messages={{
                                    required: 'Required ',
                                    validEmail: 'Invalid Email Address'
                                }} />
                                </Col>
                    </Row>
                    <Row className="form-group">
                          <Label htmlFor="phoneNumber" md={2}>Phone Number</Label>
                          <Col md={10}>
                          <Control.text model=".phoneNumber" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                    }}
                                    />
                                    <Errors className="text-danger" model=".phoneNumber" show="touched" messages={{
                                    required: 'Required',
                                    minLength: ' Must be greater than 2 Numbers',
                                    maxLength: ' Must be 15 Numbers or less',
                                    isNumber: ' Must be a Number'
                                }}/>
                          </Col>
                    </Row>
                    <Row className="form-group">
                          <Label htmlFor="enterpassword" md={2}>Enter Password</Label>
                          <Col md={10}>
                          <Control.text
                            type="password"
                            model=".enterpassword"
                            id="enterpassword"
                            name="enterpassword"
                            placeholder="Enter Password"
                            className="form-control"
                            validators={{required}}
                          />
                          <Errors className="text-danger" model=".enterpassword" show="touched" 
                              messages={{
                                required: 'Required'
                            }} />
                          </Col>
                        </Row>
                        <Row className="form-group">
                          <Label htmlFor="confirmpassword" md={2}>Confirm Password</Label>
                          <Col md={10}>
                          <Control.text
                            type="password"
                            model=".confirmpassword"
                            id="confirmpassword"
                            name="confirmpassword"
                            placeholder="Confirm Password"
                            className="form-control"
                            validators={{required}}
                          />
                          <Errors className="text-danger" model=".confirmpassword" show="touched" 
                              messages={{
                                required: 'Required'
                            }} />
                          </Col>
                        </Row>
                    {/* <Row className="form-group">
                        <Col md={{size:10, offset:2}}>
                            <Button type="submit"value="submit" color="primary">
                                SignUp
                            </Button>
                        </Col>
                    </Row> */}
                  </Form>
                </div>
              </div>
            </div>
          );
    }
 
}

export default Student;