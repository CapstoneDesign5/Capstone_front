//form 등록 버튼

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

    text-align: center;
    user-select: none;
    transition: .2s all;

    width: 200px;
    height: 20px;
    border: none;
    background-color: darkblue;
    color: white;
    padding: 7px 10px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;

    &:hover {
        background: yellow;
    }

    &:active {
        background: orange;
    }

`;


const AuthButton = ({children, onClick}) => (
    <Wrapper onClick={onClick}>
        {children}
    </Wrapper>
);

export default AuthButton;