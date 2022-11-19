//form 등록 label, Input 

import React from 'react';
import styled from 'styled-components';


// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
    padding: 10px;
    `;

const Label = styled.div`
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: black;
`;

const Input = styled.input`
    outline: none;
    font-size: 14px;
    width: 400px;
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 0px;

`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용하는 값들을 넣어줄 수 있다.
const InputWithLabel = ({label, ...rest}) => (
    <Wrapper>
        <Label>{label}</Label>
        <Input {...rest}/>
    </Wrapper>
);

export default InputWithLabel;