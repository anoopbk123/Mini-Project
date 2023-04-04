import React from "react";
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';

function RenderFeedbackContent({feedbacks}){
    return(
        feedbacks.feedbacks.map(feedback =>(
            <RenderFeedbackItem key={feedback.id} feedback={feedback}/>
        ))
    )
}

function RenderFeedbackItem({feedback}){
    return(
        <Card className="border-dark mb-3">
            <CardHeader>
                {feedback.firstname + " " + feedback.lastname}
            </CardHeader>
            <CardBody>
                <CardText className="font-weight-bold">
                    {"Message : " + feedback.message}
                </CardText>
                <CardText>
                    {"Phone Number : " + feedback.telnum}
                </CardText>
                <CardText>
                {"Email : "+ feedback.email}
                </CardText>
                {feedback.agree}
                <CardText className="font-weight-light text-sm-right">
                &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(feedback.date))}
                </CardText>
            </CardBody>
        </Card>
    )
}

const Feedback = (props) =>{
    return(
        <div>
            <RenderFeedbackContent 
            feedbacks = {props.feedback}
            />
        </div>
    )
}

export default Feedback;