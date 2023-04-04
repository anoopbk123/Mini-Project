import React from "react";
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';

function RenderPizadaContent({pizadas}){
    return(
        pizadas.pizadas.map(pizada =>(
            <RenderPizadaItem key={pizada.id} pizada={pizada}/>
        ))
    )
}

function RenderPizadaItem({pizada}){
    return(
        <Card className="border-dark mb-3">
            <CardHeader>
                {pizada.topic}
            </CardHeader>
        </Card>
    )
}

const PizadaReg = (props) =>{
    return(
        <div>
            <RenderPizadaContent 
            pizadas = {props.pizada}
            />
        </div>
    )
}

export default PizadaReg;