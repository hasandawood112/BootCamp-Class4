import React from 'react';

function StudentDetails(props) {

    return (
        <div>
            <p><b>Name : </b> {props.name}</p>
            <p><b>Father Name : </b> {props.Fname}</p>
            <p><b>Course : </b> {props.course}</p>
            <p><b>Age : </b> {props.age}</p>
        </div>
    );
}

export default StudentDetails;