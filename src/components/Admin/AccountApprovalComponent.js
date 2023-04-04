import React, { Component } from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

class AccountApproval extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="row-content">
                <h4>Account Approval</h4>
                    <hr />
                <Card>
                    <CardBody className="text-right">
                        <CardTitle className="text-left mb-4">Username</CardTitle>
                        <Button className="btn-success mb-4">Approve</Button>
                        <Button className="btn-danger mb-4">Deny</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default AccountApproval;

