import React from 'react';
import styled from 'styled-components'
import device from '../device'


type Price = {
    price: {
        time: string;
        initial: string;
        price: string;
        total: string;
    }[]
};

const priceItemTitle = {
    time: '契約期間',
    initial: '初期費用',
    price: 'ご利用料金',
    total: '合計'
}

const Hint = styled.span`
    display: none;
    @media ${device.tablet} {
        display: inline-block;
    }
`

const rowHeight: number = 42;

const Table = styled.table`
    font-family: YuGothic, "Yu Gothic";
    width: 100%;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    margin: 20px auto;
    border-collapse: collapse;
    border:1px solid #ccc;

    @media ${device.tablet} {
        display: block;
        border: none;
    }
`

const Body = styled.tbody`
    @media ${device.tablet} {
        display: block;
    }
`

const Row = styled.tr`
    height: 10px;
    border-collapse: collapse;
    border:1px solid #ccc;
    &:nth-child(odd){
        background-color: #f5f5f5;
        th {
            background-color: #e6e9ec;
        }
    }
    &:nth-child(even){
        th {
            background-color: #f0f4f7;
        }
    }

    @media ${device.tablet} {
        display: block;
        height: 100%;
        margin: 20px 0;

        &.hide {
            display: none;
        }
    }
`

const Head = styled.th`
    @media ${device.tablet} {
        display: block;
        width: 100%;
        height: 42px;
        border: none;
        background-color: #000 !important;
        color: #fff;
        line-height: 42px;
    }
`

const Data = styled.td`
    border-collapse: collapse;
    border:1px solid #ccc;
    line-height: ${rowHeight}px;
    &.color{
        background-color: #f5f5f5;
    }

    @media ${device.tablet} {
        display: block;
        width: 100%;
        border: none;
        border-top: 1px solid #ccc;
        &:nth-child(odd){
            background-color: #f5f5f5;
        }
        &:nth-child(even){
            background-color: #fff;
        }
    }
`

const DataTop = styled(Data)`
    color: #fff;
    background-color: #333 !important;
`

export default (props: Price) => (
    <>
        <Table>
            <Body>
                <Row className="hide">
                    <DataTop height={rowHeight}>{priceItemTitle.time}</DataTop>
                    <DataTop>{priceItemTitle.initial}</DataTop>
                    <DataTop>{priceItemTitle.price}</DataTop>
                    <DataTop>{priceItemTitle.total}</DataTop>
                </Row>
                {
                    props.price.map((item, i) => (
                        <Row key={i}>
                            <Head>{item.time}</Head>
                            <Data><Hint>{priceItemTitle.initial}</Hint> {item.initial}</Data>
                            <Data><Hint>{priceItemTitle.price}</Hint> {item.price}</Data>
                            <Data><Hint>{priceItemTitle.total}</Hint> {item.total}</Data>
                        </Row>
                    ))
                }
            </Body>
        </Table>
    </>
)