import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import iconUser from './assets/user-icon.svg';
import iconFavorite from './assets/favorite-icon.svg';
import iconCart from './assets/cart-icon.svg';

const UserWrapper = styled.div`
    width: 25%;
    display: var(--flex);
    flex-direction: var(--row);
    justify-content: var(--space-around);
`

const UserInfo = styled(Link)`
    display: var(--flex);
    color: var(--color-font1);

    &:hover {
        color: var(--color-font2)!important;
    }
`
const UserIcon = styled.div`
    height: 32px;
    width: 25px;
    background-image: url(${iconUser});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.5s;

    ${UserInfo}:hover & {
        filter: invert(41%) sepia(46%) saturate(270%) hue-rotate(127deg) brightness(97%) contrast(88%);
    }
`

const UserSign = styled.div`
    display: var(--flex);
    flex-direction: var(--column);
`

const UserSignText = styled.span`
    font-size: 14px;
    transition: 0.5s;
`

const UserSignLink = styled.span`
    font-size: 14px;
    transition: 0.5s;
`

const UserIconLink = styled(Link)`
    display: block;
    background-image: url(${props => props.imageurl });
    background-position: center;
    background-repeat: no-repeat;
    background-size: 25px;
    height: 32px;
    width: 32px;
    transition: 0.5s;

    &:hover {
        filter: invert(41%) sepia(46%) saturate(270%) hue-rotate(127deg) brightness(97%) contrast(88%);
    }
`

const User = () => (
    <UserWrapper>
        <UserInfo to="/signin">
            <UserIcon />
            <UserSign>
                <UserSignText>Welcome</UserSignText>
                <UserSignLink>SignIn or SignUp</UserSignLink>
            </UserSign>
        </UserInfo>
        <UserIconLink to="/favorites" imageurl={iconFavorite} />
        <UserIconLink to="/cart" imageurl={iconCart} />
    </UserWrapper>
)

export default User;