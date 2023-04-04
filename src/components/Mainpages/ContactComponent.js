import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

const required= (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val); 

class Contact extends Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values){
        // console.log("Current state is: " + JSON.stringify(values))
        // alert("Current state is: " + JSON.stringify(values));
        this.props.resetFeedbackForm();
        this.props.postFeedback( values.firstname, values.lastname, values.telnum, values.email, values.agree, values.contactType, values.message);
    }
    render(){
    return(
        <>
        <div className='container'>
            <div className='row'>
                <Breadcrumb className="m-1">
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                <h3>Contact US</h3>
                <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Office</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Nehru College of Engineering and Research Centre</h5>
                    <address>
                        Nila Gardens, Pampady, Thiruvilwamala<br/>
                        Thrissur, Kerala, India<br/>
                        PIN: 680 588<br/>
                        <i className="fa fa-phone fa-lg"></i>: +9199 1234 5678<br />
		                <i className="fa fa-fax fa-lg"></i>: +9199 8765 4321<br />
		                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:mca@ncerc">
                         mca@ncerc.in</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Random Pic or Something</h5>
                    </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>MCA Department</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Department</h5>
                    <address>
                        Kapila Block<br/>
                        Nila Gardens, Pampady, Thiruvilwamala<br/>
                        Thrissur, Kerala, India<br/>
                        PIN: 680 588<br/>
                        <i className="fa fa-phone fa-lg"></i>: +9199 1234 5678<br />
		                <i className="fa fa-fax fa-lg"></i>: +9199 8765 4321<br />
		                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:mcahod@ncerc">
                        departmentmca@ncerc.in</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Random Pic or Something</h5>
                    </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Admission Queries</h3>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <h5>Officer in Charge: name</h5><br/>
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+919912345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-success" href="mailto:admissions@ncerc.in"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
            </div>
            <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us Your Feedback & Queries</h3>
                        <hr />
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname" placeholder="First Name" className="form-control" 
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                <Errors className="text-danger" model=".firstname" show="touched" messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname" placeholder="Last Name" className="form-control" 
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                    <Errors className="text-danger" model=".lastname" show="touched" messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Number</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum" placeholder="Contact Number" className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                    }}
                                    />
                                    <Errors className="text-danger" model=".telnum" show="touched" messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 Numbers',
                                    maxLength: 'Must be 15 Numbers or less',
                                    isNumber: 'Must be a Number'
                                }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
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
                                <Label htmlFor="message" md={2}>Your Feedback/Query</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message" rows="12" className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
        </div>
        </>
    )
}
}

export default Contact;