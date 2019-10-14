import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import iconSearch from './assets/search-icon.svg';
import iconMenu from './assets/menu-icon.svg';

const Wrapper = styled.div`
    width: 60%;
    display: var(--flex);
    justify-content: var(--center);
    align-items: var(--center);
    flex-direction: var(--column);
`

const SearchWrapper = styled.div`
    width: 90%;
    display: var(--flex);
    flex-flow: row-reverse nowrap;
    margin-bottom: 5px;
`

const SelectDepartament = styled.select`
    width: fit-content;
    height: 32px;
    background-color: var(--color-bg);
    color: var(--color-nav);
    border-radius: 10px;
    outline: none;
    border: none;
`

const SelectInput = styled.input`
    width: 100%;
    padding: 0px 35px 0 20px;
    margin-left: -15px;
    background-color: var(--color-font1);
    color: var(--color-nav);
    border-radius: 10px;
    outline: none;
    border: none;
    background-image: url(${iconSearch});
    background-size: 20px;
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 99%;
    &::placeholder {
        color: var(--color-nav);
    }
`

const DepartamentsWrapper = styled.div`
    width: 90%;
    display: var(--flex);
    margin-top: 5px;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: var(--center);
`

const DepartamentsMenu = styled.div`
    display: var(--flex);
    font-size: 18px;
    color: var(--color-font1);
    cursor: pointer;

    &::before {
        content: " ";
        display: block;
        height: 18px;
        width: 18px;
        background-image: url(${iconMenu});
        background-repeat: no-repeat;
        background-size: 14px;
        background-position: var(--center);
    }
`

const DepartamentLink = styled(Link)`
    font-size: 18px;
    color: var(--color-font1);
`

const Search = () => (
    <Wrapper>
        <SearchWrapper>
            <SelectInput placeholder="Search..." />
            <SelectDepartament>
                <option>All</option>
            </SelectDepartament>
        </SearchWrapper>
        <DepartamentsWrapper>
            <DepartamentsMenu>Departaments</DepartamentsMenu>
            <DepartamentLink to="/bestSellers">Best Sellers</DepartamentLink>
            <DepartamentLink to="/todayDeals">Today's Deals</DepartamentLink>
            <DepartamentLink to="/giftIdeas">Gift Ideas</DepartamentLink>
            <DepartamentLink to="/coupons">Coupons</DepartamentLink>
        </DepartamentsWrapper>
    </Wrapper>
)

export default Search;