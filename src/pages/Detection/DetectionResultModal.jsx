// src/components/modal/DetectionResultModal.jsx
import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MainTitle, SubTitle, Text } from "../../components/common/texts";
import styled from "styled-components";

const OkButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  font-size: var(--normal-text);
  display: flex;
  outline: none;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.colors.primary};
  background-color: white;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border-color: transparent;
  }
`;
const StyledModal = styled(Modal)`
  --bs-modal-header-border-color: ${({ theme }) =>
    theme.colors.primary} !important;
  --bs-border-color: ${({ theme }) => theme.colors.primary} !important;
  .modal-content {
    background-color: ${({ theme }) => theme.colors.backLight};
  }
  .btn-close {
    width: 30px;
    height: 30px;
    font-size: 20px;
    &:focus {
      box-shadow: none;
    }
  }
`;
export default function DetectionResultModal({ show, onHide, prediction }) {
  return (
    <>
      <StyledModal
        show={show}
        onHide={onHide}
        centered
        style={{ zIndex: "999999999999999999999999999999" }}
      >
        <Modal.Header className="" closeButton>
          {/* <Modal.Title> */}
          <SubTitle>Detection Result</SubTitle>
          {/* </Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="flex-column">
          <div className="d-flex flex-column align-items-center mb-3">
            <Text $align="center">
              {prediction.is_toxic
                ? "This snake is venomous."
                : "This snake is non-venomous."}
            </Text>
            <Text $align="center">Confidence: {prediction.confidence} %</Text>
          </div>
          <div className="d-flex justify-content-center">
            <img
              src={prediction.image_url}
              alt="Detected Snake"
              className="img-fluid"
              style={{
                borderRadius: "5px",
                maxHeight: "50vh",
                overflowY: "auto",
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <OkButton onClick={onHide}>OK</OkButton>
        </Modal.Footer>
      </StyledModal>
    </>
  );
}

DetectionResultModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  prediction: PropTypes.shape({
    confidence: PropTypes.number,
    image_url: PropTypes.string,
    is_toxic: PropTypes.bool,
  }).isRequired,
};
