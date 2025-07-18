import styled from "styled-components";

export const UploadZone = styled.div`
  position: relative;
  border: 2px dashed;
  border-radius: 6px;
  min-height: 180px;
  max-height: 60vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.2s;
  cursor: pointer;
  background: ${({ $dragActive }) =>
    $dragActive ? "rgba(13, 110, 253, 0.05)" : "transparent"};
  border-color: ${({ $dragActive, theme }) =>
    $dragActive ? "#0d6efd" : `${theme.colors.primary}`};

  img.preview {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 4px;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const UploadContent = styled.div`
  text-align: center;
  pointer-events: none;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;

  svg {
    color: #dc3545;
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(220, 53, 69, 0.1);
  }
`;
