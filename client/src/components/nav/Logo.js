import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconSendImg from './assets/place-icon.svg';

const LogoItem = styled.div`
    width: 15%;
    display: var(--flex);
    margin-left: 5%;
    flex-direction: var(--column);
    width: fit-content;
`;

const LogoName = styled(Link)`
    color: var(--color-font2);
    font-family: var(--font2);
    font-size: 40px;
    line-height: 40px;
`;

const SendTo = styled.div`
    display: var(--flex);
    flex-direction: var(--row);
`;

const SendWrapper = styled.div`
    width: 100px;
    display: var(--flex);
    flex-direction: var(--column);
`

const IconSend = styled.img`
    width: 25px;
    height: auto;
    margin-left: -5px;
`;

const SendInput = styled.input`
    background: transparent;
    width: 80px;
    height: 15px;
    border: none;
    outline: none;
    color: var(--color-font1);
`;

const SendInputSpan = styled.span`
    font-size: 12px;
    font-family: var(--font1);
    color: var(--color-font1);
`;

const Logo = () => (
    <LogoItem>
        <LogoName to="/">E-Cart</LogoName>
        <SendTo>
            <IconSend src={IconSendImg} />
            <SendWrapper>
                <SendInputSpan>Send to</SendInputSpan>
                <SendInput value="96000-000"/>
            </SendWrapper>
        </SendTo>
    </LogoItem>
)

export default Logo;