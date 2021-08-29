import React from 'react';
import { MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact';

const FileList = () => (
    <MDBContainer>
        <MDBListGroup style={{ width: "22rem" }}>
            <MDBListGroupItem src="https://journalpdf2.s3.amazonaws.com/fa36c48bdeb1c6be3466cbff5f067b7c-test.pdf"></MDBListGroupItem>
        </MDBListGroup>
    </MDBContainer>
)

export default FileList;