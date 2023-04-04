import React, { Component } from "react";
import {
  Col,
  Row,
  Label,
  Button,
  Form
} from "reactstrap";
import Student from "./StudentSignUpComponent";
import Staff from "./StaffSignUpComponent";
import { Control } from "react-redux-form";


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountType: "student",
    };
    this.handleSignup = this.handleSignup.bind(this);

  }

  selectAccountType = (event) => {
    this.setState({ accountType: event.target.value });
  };

  handleSignup(values){
    console.log("Current State is : " + JSON.stringify(values));
    alert("Current State is : " + JSON.stringify(values));

    }

  render() {
    return (
      <>
        <div className="container">
          <div className="row row-content">
            <div className="col-12">
                  <div className="col" >
                  <Form onSubmit={(values) => this.handleSignup(values)}>
                  <Row className="form-group">
                          <Label htmlFor="accountType" md={2}>
                            Account Type
                          </Label>
                          <Col md={10}>
                            <Control.select
                              model=".accountType"
                              className="form-control"
                              name="accountType"
                              onChange={this.selectAccountType}
                              innerRef={(input) => (this.role = input)}
                            >
                              <option value="student" selected>
                                Student
                              </option>
                              <option value="staff">Staff</option>
                            </Control.select>
                          </Col>
                        </Row>
                        <Row className="form-group">
                          {this.state.accountType == "staff" ? <Staff /> : null}
                          {this.state.accountType == "student" ? (
                            <Student />
                          ) : null}
                        </Row>
                        {/* Button  ivde venam kodukkan Staff/Studen SignUp nte*/}
                        <Row className="form-group">
                        <Col md={{size:10, offset:2}}>
                            <Button type="submit"value="submit" color="primary">
                                SignUp
                            </Button>
                        </Col>
                    </Row>
                    </Form>
                  </div>       
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
