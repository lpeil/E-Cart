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
`
const UserIcon = styled.div`
    height: 32px;
    width: 25px;
    background-image: url(${iconUser});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
`

const UserSign = styled.div`
    display: var(--flex);
    flex-direction: var(--column);
`

const UserSignText = styled.span`
    font-size: 14px;
    color: var(--color-font1);
`

const UserSignLink = styled.span`
    font-size: 14px;
    color: var(--color-font1);
`

const UserIconLink = styled(Link)`
    display: block;
    background-image: url(${props => props.imageUrl });
    background-position: center;
    background-repeat: no-repeat;
    background-size: 25px;
    height: 32px;
    width: 32px;
`

const User = () => (
    <UserWrapper>
        <UserInfo to="/signin">
            <UserIcon />
            <UserSign>
                <UserSignText>Wellcome</UserSignText>
                <UserSignLink>SignIn or SignUp</UserSignLink>
            </UserSign>
        </UserInfo>
        <UserIconLink to="/favorites" imageUrl={iconFavorite} />
        <UserIconLink to="/cart" imageUrl={iconCart} />
    </UserWrapper>
)

export default User;