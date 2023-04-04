import React, { Component } from "react";
import {  Label, Col, Row, Button } from 'reactstrap';
import { LocalForm, Control } from 'react-redux-form';

class AdminResetPassword extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="row-content">
                <h4>Reset Password</h4>
                    <hr />
                <LocalForm onSubmit={this.handleLogin}>
                <Row className="form-group">
                    <Label htmlFor="newpassword" md={2}>New Password</Label>
                    <Col md={12}>
                    <Control.text
                    model=".newpassword"
                    id="newpassword"
                    name="newpassword"
                    placeholder="New Password"
                    className="form-control"
                    />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="confirmpassword" md={3}>Confirm Password</Label>
                    <Col md={12}>
                    <Control.text
                    type="confirmpassword"
                    model=".confirmpassword"
                    id="confirmpassword"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    className="form-control"
                    />
                    </Col>
                </Row>
                <Row className="form-group">
                <Col md={2}>
                <Button type="submit"value="submit" color="primary">
                        Reset
                </Button>
                </Col>
                </Row>
                </LocalForm>
                </div>
        )
    }
}

export default AdminResetPassword;