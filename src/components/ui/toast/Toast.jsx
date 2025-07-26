import React from "react";
import styled from "styled-components";
import { SmallText, Text } from "../../common/texts";
import { useSelector } from "react-redux";

const StyledToast = styled.div`
  position: fixed;
  z-index: 1;
  left: ${({ theme }) => (theme.lang === "en" ? "50px" : "auto")};
  right: ${({ theme }) => (theme.lang === "ar" ? "50px" : "auto")};
  bottom: 50px;
  width: 400px;
  height: 100px;
  background-color: ${({ $bg }) => $bg};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;
const ToastHeader = styled.div`
  height: 40px;
  border-radius: inherit;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${({ $bg }) => $bg};
  padding: 0 15px;
  display: flex;
  align-items: center;
`;
const ToastBody = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: center;
  flex: 1;
`;
const Toast = ({ $err, message }) => {
  const lang = useSelector((state) => state.lang.language);
  return (
    <StyledToast $bg={$err ? "#ffcdd2" : "#c8e6c9 "}>
      <ToastHeader $bg={$err ? "#f44336" : "#4caf50 "}>
        <Text $bold $color="white">
          {$err
            ? lang === "en"
              ? "Error"
              : "خطأ"
            : lang === "en"
            ? "Success"
            : "تمت العملية بنجاح"}
        </Text>
      </ToastHeader>
      <ToastBody>
        {/* <SmallText $bold $color="#388E3C	">
            send send send
          </SmallText> */}
        <SmallText $bold $color={$err ? "#D32F2F" : "#388E3C "}>
          {message}
        </SmallText>
      </ToastBody>
    </StyledToast>
  );
};

export default Toast;
