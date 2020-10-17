import React from 'react';
import styled from 'styled-components'
import device from '../device'

type Intro = {
    title: string;
    content: string;
}

const Box = styled.div`
    width: 100%;
    & + & {
        margin-left: 40px;
    }

    @media ${device.default} {
        width: 280px;
        margin: 20px !important;
    }

    @media ${device.tablet} {
        width: 100%;
    }
`

const Title = styled.div`
    font-family: YuGothic, "Yu Gothic Medium", "Yu Gothic";
    font-size: 18px;
    background-color: #333;
    color: #fff;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    font-family: YuGothic, "Yu Gothic Medium", "Yu Gothic";
    font-size: 14px;
    padding: 20px 10px;
    line-height: 1.8em;
`

export default (props: Intro) => (
    <>
        <Box>
            <Title>{props.title}</Title>
            <Content>{props.content}</Content>
        </Box>
    </>
)