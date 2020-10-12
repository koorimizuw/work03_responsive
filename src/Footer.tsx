import React from 'react';
import styled from 'styled-components'
import device from './device'


const Footer = styled.div`
    background-color: #666;
    display: flex;
    padding: 24px;
    margin-top: 40px !important;

    @media ${device.tablet} {
        display: block;
        margin: 0;
        padding: 0;
        background-color: #fff;
    }
`

const FooterItem = styled.div`
    font-family: YuGothic, "Yu Gothic";
    font-size: 14px;
    color: #fff;
    margin:0 8px;
    text-decoration: none;

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

const Copyright = styled.div`
    font-family: YuGothic, "Yu Gothic";
    background-color: #000;
    color: #fff;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    padding-left: 36px;
`

const footerItem: string[] = [
    "プライバシー",
    "ポリシー",
    "当サイトのご利用について",
    "利用規約",
    "サイトマップ",
    "会社概要",
    "お問い合わせ"
]

export default () => (
    <>
        <Footer>
            {
                footerItem.map((item, i) => (
                    <FooterItem key={i} as="a" href="#">{item}</FooterItem>
                ))
            }
        </Footer>
        <Copyright>2019 DHSERVER Inc.※架空の企業です。申込みはできません。</Copyright>
    </>
)