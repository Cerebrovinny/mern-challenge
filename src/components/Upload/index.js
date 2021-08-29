import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Dropzone from 'react-dropzone';

export default class Upload extends Component {
    render() {
        return (
            <Dropzone accept="*/pdf" onDropAccepted={() => {}}>
                { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <MDBContainer
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject} 
                        style={{ backgroundColor: '#ddd', cursor: 'pointer'}}>
                        <input {...getInputProps()} />
                        Send your journals .pdf here
                    </MDBContainer>
                )}
            </Dropzone>
        )
    }
}
