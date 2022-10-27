import React from "react";
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";

const IndecisionModal = (props) => (
    <>
    {/* <CButton onClick={() => props.setModal(!props.visibility)}>Launch demo modal</CButton> */}
    <CModal centered
        show={props.visibility}
        onClose={() => {
          props.setModal(!props.visibility);
        }}>
      <CModalHeader onClose={() => props.setModal(false)}>
        <CModalTitle>Selected Item</CModalTitle>
      </CModalHeader>
      <CModalBody>{props.option}</CModalBody>
      <CModalFooter>
        <CButton  className="btn-pill"
            color="secondary"
            onClick={() => { props.setModal(false) }}>
          Close
        </CButton>
      </CModalFooter>
    </CModal>
  </>
);


export default IndecisionModal;
