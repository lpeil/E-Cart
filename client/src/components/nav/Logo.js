import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconSendImg from './assets/place-icon.svg';
import iconCart from './assets/cart-icon.svg';
import iconMenu from './assets/menu-icon.svg';

const LogoItem = styled.div`
    width: 15%;
    display: var(--flex);
    margin-left: 5%;
    flex-direction: var(--column);
    width: fit-content;

    @media (max-width: 1000px) {
        width: 90%;
        flex-direction: var(--row);
        margin: 0;
        padding: 10px 0;
        justify-content: space-between;
    }
`;

const LogoName = styled(Link)`
    color: var(--color-font2);
    font-family: var(--font2);
    font-size: 40px;
    line-height: 40px;

    @media (max-width: 1000px) {
        font-size: 30px;
    }
`;

const SendTo = styled.div`
    display: var(--flex);
    flex-direction: var(--row);

    @media (max-width: 1000px) {
        display: none;
    }
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
    transition: 0.5s;

    ${SendTo}:hover & {
        filter: invert(41%) sepia(46%) saturate(270%) hue-rotate(127deg) brightness(97%) contrast(88%);
    }
`;

const SendInput = styled.input`
    background: transparent;
    width: 80px;
    height: 15px;
    border: none;
    outline: none;
    color: var(--color-font1);
    transition: 0.5s;

    ${SendTo}:hover & {
        color: var(--color-font2);
    }
`;

const SendInputSpan = styled.span`
    font-size: 12px;
    font-family: var(--font1);
    color: var(--color-font1);
    transition: 0.5s;

    ${SendTo}:hover & {
        color: var(--color-font2);
    }
`;

const IconMenu = styled.span`
    display: none;

    @media (max-width: 1000px) {
        height: 30px;
        width: 30px;
        display: block;
        margin: 5px 0;
        background-image: url(${props => props.image});
        background-position: var(--center);
        background-size: 25px;
        background-repeat: no-repeat;
    }
`

const Logo = () => (
    <LogoItem>
        <IconMenu image={iconMenu} />
        <LogoName to="/">E-Cart</LogoName>
        <SendTo>
            <IconSend src={IconSendImg} />
            <SendWrapper>
                <SendInputSpan>Send to</SendInputSpan>
                <SendInput value="96000-000"/>
            </SendWrapper>
        </SendTo>
        <IconMenu image={iconCart} />
    </LogoItem>
)

export default Logo;