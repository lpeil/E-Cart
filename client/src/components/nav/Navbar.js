import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const NavbarItem = styled.div`
    display: var(--flex);
    width: 100%;
    height: 15vh;
    margin: 0;
    align-items: var(--center);
    background-color: var(--color-nav);
`;


const Navbar = () => (
    <NavbarItem>
        <Logo />
    </NavbarItem>
)

export default Navbar;