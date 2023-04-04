import React from "react";
import { Table } from 'reactstrap';

function RenderPrayaanaRegs({prayaanas}){
    return(
        prayaanas.prayaanas.map(prayaana =>(
            <RenderPrayaanaItem key={prayaana.id} prayaana={prayaana}/>
        ))
    )
}

function RenderPrayaanaItem({prayaana}){
    return(
        <div>
            <Table>
            {/* <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Course
                    </th>
                    <th>
                        Register Number
                    </th>
                    <th>
                        batch
                    </th>
                    <th>
                        College Name
                    </th>
                    <th>
                        Events
                    </th>

                    <th>
                        Email
                    </th>
                    <th>
                       Phone Number
                    </th>
                    <th>
                       Date
                    </th>
                </tr>
            </thead> */}
            <tbody>
                <tr>
                    <th>
                        {prayaana.id}
                    </th>
                    <td>
                    {prayaana.firstname}               
                    </td>
                    <td>
                    {prayaana.lastname}               
                    </td>  
                    <td>
                    {prayaana.course}              
                    </td>
                    <td>
                    {prayaana.registerNumber}               
                    </td>
                    <td>
                    {prayaana.batch}               
                    </td>
                    <td>
                    {prayaana.collegeName}               
                    </td>
                    <td>
                    {prayaana.coding}               
                    {prayaana.quiz}               
                    {prayaana.gamin}               
                    {prayaana.treasure}               
                    </td>
                    <td>
                    {prayaana.email}               
                    </td>
                    <td>
                    {prayaana.phoneNumber}               
                    </td>
                    <td>
                    &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(prayaana.date))}             
                    </td>
                </tr>


            </tbody>
        </Table>
        </div>


    )
}

const PrayaanaReg = (props) =>{
    return(
        <div>
            <RenderPrayaanaRegs 
            prayaanas = {props.prayaana}
            />
        </div>
    )
}

export default PrayaanaReg;