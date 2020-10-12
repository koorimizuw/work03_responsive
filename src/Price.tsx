import React from 'react';
import styled from 'styled-components'

import SectionTitle from './components/SectionTitle';
import Container from './components/SubContainer';
import PriceBox from './components/PriceBox';


const Message = styled.div`
    font-family: YuGothic, "Yu Gothic";
    font-size: 14px;
    margin: 10px 0;
`

const priceList = [
    {
        time: "3ヶ月",
        initial: "1,000円＋消費税100円",
        price: "(1,000円＋消費税100円)x3ヶ月",
        total: "4,000円（税込4,400円）"
    },
    {
        time: "6ヶ月",
        initial: "1,000円＋消費税100円",
        price: "(1,000円＋消費税100円)x6ヶ月",
        total: "7,000円（税込7,700円）"
    },
    {
        time: "12ヶ月",
        initial: "1,000円＋消費税100円",
        price: "(1,000円＋消費税100円)x12ヶ月",
        total: "13,000円（税込14,300円）"
    },
    {
        time: "24ヶ月",
        initial: "1,000円＋消費税100円",
        price: "(800円＋消費税80円)x24ヶ月",
        total: "20,200円（税込22,220円）"
    },
    {
        time: "36ヶ月",
        initial: "1,000円＋消費税100円",
        price: "(700円＋消費税70円)x36ヶ月",
        total: "26,200円（税込28,820円）"
    },
];

export default () => (
    <>
        <SectionTitle>料金</SectionTitle>
        <Container>
            <Message>お支払い時に「3ヶ月」「6ヶ月」「12ヶ月」「24ヶ月」「36ヶ月」のうち、任意の契約期間をご選択ください。</Message>
            <PriceBox price={priceList} />
            <Message>※初回は「合計金額」の一括前払いでのお支払いになります。月単位での分割支払い・後払いには対応しておりません。</Message>
        </Container>
    </>
)