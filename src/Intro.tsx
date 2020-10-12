import React from 'react';
import styled from 'styled-components'
import device from './device'

import SectionTitle from './components/SectionTitle';
import Container from './components/SubContainer';
import IntroBox from './components/IntroBox';


const Main = styled.div`
    display: flex;

    @media ${device.default} {
        flex-wrap: wrap;
        max-width: 640px;
        margin: 0 auto;
    }

    @media ${device.tablet} {
        max-width: 100%;
    }
`

const introText = [
    { title: "マルチドメイン50個", content: "レンタルサーバーに設定できる独自ドメイン数は50個です。複数のウェブサイトを1つのアカウントで運営することもできます。複数のクライアントのサイト運営に最適です。" },
    { title: "データベース20個", content: "WordPress利用時など、データベースを分けることでデータの管理が容易に。負荷分散にもなりますので、複数のウェブサイト運営にご利用ください。" },
    { title: "安心のサポート体制", content: "電話・メールサポート、マニュアルが充実しています。長年のレンタルサーバー運用実績により蓄積されたノウハウでお客様をアシストします。" },
]

export default () => (
    <>
        <SectionTitle>DHSERVERの特徴</SectionTitle>
        <Container>
            <Main>
                {introText.map((item, i) => (
                    <IntroBox key={i} title={item.title} content={item.content} />
                ))}
            </Main>
        </Container>
    </>
)