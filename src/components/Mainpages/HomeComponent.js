import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Loading } from "../Loading/LoadingComponent";
import { baseUrl } from "../../shared/baseUrl";
import Feedback from "../Feedback/FeedbackComponent";

function RenderTopperContent({ toppers, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return toppers.toppers.map((topper) => (
      <RenderTopperItem key={topper.id} top={topper} />
    ));
}

function RenderPlacementContent({ placements, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return placements.placements.map((placement) => (
      <RenderPlacementItem key={placement.id} placemt={placement} />
    ));
}

function RenderTopperItem({ top }) {
  return (
    <Card>
      <CardImg src={baseUrl + top.image} alt={top.name} />
      <CardBody>
        <CardTitle>{top.name}</CardTitle>
        <CardText>{top.score}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderPlacementItem({ placemt }) {
  return (
    <div>
      <div>
        <Card>
          <CardImg src={baseUrl + placemt.image} alt={placemt.name} />
          <CardBody>
            <CardTitle>{placemt.name}</CardTitle>
            <CardText>{placemt.company}</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

const Home = (props) => {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Master of Computer Application</h1>
              <p>
                Master of Computer Application is the best course in Nehru
                College of Engineering and Research Centre.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3>TOPPERS</h3>
        <hr />
        <div className="d-flex p-2 justify-content-around flex-wrap">
          <RenderTopperContent
            toppers={props.topper}
            isLoading={props.toppersLoading}
            errMess={props.toppersErrMess}
          />
        </div>
      </div>
      <div className="container">
        <h3>PLACEMENTS</h3>
        <hr />
        <div className="d-flex p-2 justify-content-around flex-wrap">
          <RenderPlacementContent
            placements={props.placement}
            isLoading={props.placementsLoading}
            errMess={props.placementsErrMess}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
