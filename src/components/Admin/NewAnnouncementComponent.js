import React,{ Component } from "react";
import {
    Button, Label, Row, Col
  } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length; //value > 0
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class NewAnnouncement extends Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.handleAnnouncementSubmit = this.handleAnnouncementSubmit.bind(this);
      }
      handleAnnouncementSubmit(values) {
        // console.log("Current State is: " + JSON.stringify(values));
        // alert("Current State is: " + JSON.stringify(values));
        this.props.postAnnouncement(values.title, values.message)
    
    }
    
    render(){
        return(
                <div>
                    <h4>New Announcement</h4>
                    <hr />
                    <React.Fragment>
                        <LocalForm onSubmit={(values) => this.handleAnnouncementSubmit(values)}>

                            {/* Title */}
                            <Row className="form-group">
                                <Label htmlFor="title" md={12}>Title</Label>
                                <Col md={12}>
                                    <Control.text model=".title" id="title" name="title"
                                        placeholder="Title"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(20)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".title"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>

                            {/* Message */}
                            <Row className="form-group">
                                <Label htmlFor="message" md={12}>Message</Label>
                                <Col md={12}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                        }}
                                    />
                                </Col>
                            </Row>

                            {/* submit button */}
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Publish
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
            </React.Fragment>
            </div>

        )
    }
}

export default NewAnnouncement;