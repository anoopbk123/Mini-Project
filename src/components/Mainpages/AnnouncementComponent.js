import React from "react";
import {
  Card,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  CardText,
  CardFooter,
  CardHeader,
  UncontrolledCollapse
} from "reactstrap";
import { Link } from 'react-router-dom';
import { Loading } from "../Loading/LoadingComponent"

function RenderAnnouncementContent({announcements, isLoading, errMess}){
//   if (isLoading) {
//     return <Loading />;
// } else if (errMess) {
//     return <h4>{errMess}</h4>;
// } else
    return (
      announcements.announcements.map(announce => (
        <RenderAnnouncementItem key={announce.id} announcement={announce} />
      ))
    );
}

function RenderAnnouncementItem({announcement}){
  return(
    <div>
          <Card className="mb-3">
            <CardHeader className="text-center btn-link" id="toggler"><h5>{announcement.title}</h5></CardHeader>
            {/* <UncontrolledCollapse toggler="#toggler"> */}
            <CardBody>
                <CardText className="text-center">{announcement.message}
                  </CardText>
                    </CardBody>
                    {/* </UncontrolledCollapse> */}
                    <CardFooter className="text-right text-muted small">
                            <p>
                                &nbsp;
                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(announcement.updatedAt)))}
                            </p>
                        </CardFooter>
                </Card>
                </div>
  );

}

  //Arrow Function
  const Announcement = (props) => {
    // const announce = props.announcement.map((announcement) => {
    //   return (
    //     <div key={announcement.id} className="col-12 col-md-12 m-1">
    //       <RenderAnnouncementItem announcement={announcement} />
    //     </div>
    //   );
    // });

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb className="m-1">
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Announcement</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Announcement</h3>
            <hr />
          </div>
        </div>
        <div className="d-flex flex-column-reverse">
        <RenderAnnouncementContent 
        announcements={props.announcement}
        isLoading={props.announceLoading}
        errMess={props.announceFailed}
        />
        </div>
      </div>
    );
  }


export default Announcement;