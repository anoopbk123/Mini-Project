import React, { Component } from "react";
import { Control, Form, Errors } from "react-redux-form";
import {
  Label,
  Button,
  Row,
  Col
} from "reactstrap";

const required = (val) => val && val.length;
const maxLength =(len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Prayaana extends Component{
    constructor(props){
        super(props);
        this.state={

        }   
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        // console.log("Current State is : " + JSON.stringify(values));
        // alert("Current State is : " + JSON.stringify(values));
        this.props.resetPrayaanaForm();
        this.props.postPrayaana(values.firstname, values.lastname, values.course, values.registerNumber, values.batch, values.collegeName, values.coding, values.quiz, values.gaming, values.treasure, values.email, values.phoneNumber)

    }

    render(){
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col">      
                        <h3>Prayaana</h3>
                        <hr />
                    </div>
                    <div className="container">
                        <div className="row row-content">
                            <div className="col-12">
                            <Form model="prayaana" onSubmit={(values) => this.handleSubmit(values)}>
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
                      <Label htmlFor="course" md={2}>Course</Label>
                      <Col md={10}>
                      <Control.text model=".course" id="course" name="course" placeholder="Course" className="form-control" 
                      validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(45)
                                  }}/>
                                  <Errors 
                                  className="text-danger" model=".course" show="touched" 
                                  messages={{
                                    required: 'Required ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 45 characters or less'
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
                      <Label htmlFor="collegeName" md={2}>College Name</Label>
                      <Col md={10}>
                      <Control.text model=".collegeName" id="collegeName" name="collegeName" placeholder="College Name" className="form-control" 
                      validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                  }}/>
                                  <Errors 
                                  className="text-danger" model=".collegeName" show="touched" 
                                  messages={{
                                    required: 'Required ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }} />
                      </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="events" md={2}>Events</Label>
                        <Col md={10}>
                        <div className="form-check form-check-inline">
                            <Control.checkbox model=".coding"
                            type="checkbox"
                            name="coding"
                            className="form-check-input form-check-inline"
                            />
                            {' '}
                            Coding
                            </div>
                            <div className="form-check form-check-inline">
                            <Control.checkbox model=".quiz"
                            type="checkbox"
                            name="quiz"
                            className="form-check-input"
                            />
                            {' '}
                            Quiz
                            </div>
                            <div className="form-check form-check-inline">
                            <Control.checkbox model=".gaming"
                            type="checkbox"
                            name="gaming"
                            className="form-check-input"
                            />
                            {' '}
                            Gaming
                            </div>
                            <div className="form-check form-check-inline">
                            <Control.checkbox model=".treasure"
                            type="checkbox"
                            name="treasure"
                            className="form-check-input"
                            />
                            {' '}
                            Treasure Hunt
                            </div>
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
                        <Col md={{size:10, offset:2}}>
                            <Button type="submit"value="submit" color="primary">
                                Register
                            </Button>
                        </Col>
                    </Row>
                  </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Prayaana;