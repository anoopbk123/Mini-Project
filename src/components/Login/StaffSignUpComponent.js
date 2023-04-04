import React, { Component } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import {
  Col,
  Row,
  Label,
  Button,
  Form
} from "reactstrap";

const required = (val) => val && val.length;
const maxLength =(len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Staff extends Component {

    constructor(props){
        super(props);
        this.state={

        }
        
    }

  // handleStaffLogin(values){
  //   console.log("Current State is : " + JSON.stringify(values));
  //   alert("Current State is : " + JSON.stringify(values));

  //   }

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
                      <Label htmlFor="idNumber" md={2} >ID Number</Label>
                      <Col md={10}>
                        <Control.text model=".idNumber" id="idNumber" name="idNumber" placeholder="ID Number" className="form-control" 
                        validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                }}/>
                      <Errors className="text-danger" model=".idNumber" show="touched" messages={{
                                required: 'Required',
                                minLength: ' Must be greater than 2 Numbers',
                                maxLength: ' Must be 15 Numbers or less',
                                isNumber: ' Must be a Number'
                            }}/>
                      
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

              </Form>
            </div>
          </div>
        </div>
          );
    }
    
  }

  export default Staff;