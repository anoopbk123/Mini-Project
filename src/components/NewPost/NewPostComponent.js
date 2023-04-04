import React, { Component } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Label, Button, Row, Col } from "reactstrap";

const required = (val) => val && val.length;

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }
  handlePostSubmit(values) {
    console.log("Current State is : " + JSON.stringify(values));
    alert("Current State is : " + JSON.stringify(values));
    this.props.postPost(values.content);
  }
  render() {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col">
            <h3>New Post</h3>
            <hr />
          </div>
          <div className="container">
            <div className="row row-content">
              <div className="col-12">
                <React.Fragment>
                  <LocalForm
                    onSubmit={(values) => this.handlePostSubmit(values)}
                  >
                    {/* Message */}
                    <Row className="form-group">
                      <Label htmlFor="content" md={2}>
                        Content
                      </Label>
                      <Col md={10}>
                        <Control.textarea
                          model=".content"
                          id="content"
                          name="content"
                          rows="6"
                          className="form-control"
                          validators={{
                            required,
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".content"
                          show="touched"
                          messages={{
                            required: "Required ",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="Upload" md={2}>
                        Upload Files
                      </Label>
                      <Col md={10}>
                        <Control.file
                          model=".file"
                          id="article"
                          name="article"
                          type="file"
                          className="form-control"
                          accept="jpg, pdf, jpeg, docx, pdf"
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPost;
