import React from 'react';
import styled from 'styled-components'

import Button from './components/Button';
import image from './images/main.jpg';

const Visual = styled.div`
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    height: 480px;
`

const Main = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
    font-family: YuGothic, "Yu Gothic bold", "Yu Gothic";
    font-size: 31px;
    text-align: center;
    color: #fff;
    font-weight: 600;
    margin: 5px 0;
`

const SubTitle = styled(Title)`
    font-size: 18px;
`

const BigButton = styled(Button)`
    width: 328px;
    height: 50px;
    font-size: 16px;
    margin-top: 50px;
`

export default () => (
    <>
        <Visual>
            <Main>
                <Title>高性能なレンタルサーバー</Title>
                <Title>圧倒的パフォーマンスを</Title>
                <SubTitle>セキュアで高機能、サポート万全</SubTitle>
                <BigButton as="a" href="#">クレジットカード登録不要で無料お試し</BigButton>
            </Main>
        </Visual>
    </>
)