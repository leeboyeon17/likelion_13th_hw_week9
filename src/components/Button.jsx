import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
    background-color: ${(props) => props.color};
    width: 300px;
    height: 100px;
    text-align: center;
    cursor: pointer;
`;

export function Button({ label, color, buttonhandler }) {
    return <ButtonWrapper onClick={buttonhandler} color={color}>{label}</ButtonWrapper>;
}

export default Button;