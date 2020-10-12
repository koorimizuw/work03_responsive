import React from 'react';
import styled from 'styled-components'
import device from './device'

import Button from './components/Button';

const Logo = styled.img`
    height: 50px;

    @media ${device.default} {
        margin-left: 20px;
    }
`

const Header = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
`

const Menu = styled.div`
    display: flex;
    align-items: center;

    @media ${device.default} {
        margin-right: 20px;
    }

    @media ${device.tablet} {
        transition: opacity 0.5s;
        opacity: 0;
        display: block;
        position: absolute;
        top: 90px;
        background-color: #fff;
        max-width: 100vw;
        width: 100%;
    }
`

const MenuItem = styled.a`
    margin: 0 10px;
    font-family: YuGothic, "Yu Gothic Medium", "Yu Gothic";
    text-decoration: none;
    color: #000;

    @media ${device.tablet} {
        display: block;
        margin: 0;
        padding: 20px 40px;
        max-width: 100%;
        color: #000;
        font-size: 16px;
        border-top: 1px solid #ccc;
        line-height: 40px;
        position: relative;
        &::after {
            content: "";
            display: block;
            position: absolute;
            top: calc(50% - 5px);
            right: 40px;
            width: 10px;
            height: 10px;
            border-top: 3px solid #ccc;
            border-right: 3px solid #ccc;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
        }
    }
`

const Toggle = () => {
    const CheckBox = styled.input`
        display: none;

        @media ${device.tablet} {
            &:checked {
                & ~ .menu {
                    opacity: 1;
                }
                & ~ label .icon span{
                    &:nth-of-type(1) {
                        transform: translateY(10px) rotate(-315deg);
                    }
                    &:nth-of-type(2) {
                        opacity: 0;
                    }
                    &:nth-of-type(3) {
                        transform: translateY(-10px) rotate(315deg);
                    }
                }
            }
        }
    `
    const Icon = styled.div`
        display: none;
        @media ${device.tablet} {
            position: relative;
            right: 20px;
            width: 40px;
            height: 40px;
            cursor: pointer;
            border: 2px solid #000;
            &, span {
                display: inline-block;
                transition: all .5s;
                box-sizing: border-box;
            }
            span {
                position: absolute;
                left: 10%;
                width: 80%;
                height: 3px;
                background-color: #000;
                &:nth-of-type(1) {
                    top: 6px;
                }
                &:nth-of-type(2) {
                    top: 16px;
                }
                &:nth-of-type(3) {
                    bottom: 6px;
                }
            }
        }
    `
    return (
        <>
            <CheckBox id="toggle" type="checkbox" />
            <label htmlFor="toggle">
                <Icon className="icon">
                    <span />
                    <span />
                    <span />
                </Icon>
            </label>
        </>
    )
}

const HeaderButton = styled(Button)`
    @media ${device.tablet} {
        display: none;
    }
`

export default () => (
    <>
        <Header>
            <Logo src={require('./images/logo.png')} />
            <Toggle />
            <Menu className="menu">
                <MenuItem href="#">サービス</MenuItem>
                <MenuItem href="#">オプション</MenuItem>
                <MenuItem href="#">サポート</MenuItem>
                <MenuItem href="#">ログイン</MenuItem>
                <HeaderButton as="a" href="#">お申し込み</HeaderButton>
            </Menu>
        </Header>
    </>
)