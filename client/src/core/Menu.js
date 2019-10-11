import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const menuLink = (history, path) => {
    if (history.location.pathname === path) {
        return "topMenuLink activeLink";
    } else {
        return "topMenuLink";
    }
}

const Menu = (props) => (
    <div>
        <div className="topMenu">
            <Link className={menuLink(props.history, '/')} to="/">Home</Link>
            <Link className={menuLink(props.history, '/signin')} to="/signin">Signin</Link>
            <Link className={menuLink(props.history, '/signup')} to="/signup">Signup</Link>
        </div>
        <div className="topMenuFake"></div>
    </div>
);

export default withRouter(Menu);