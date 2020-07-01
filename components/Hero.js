import styled from '@emotion/styled'
import HeroSearchBar from 'components/HeroSearchBar'

function Hero() {
    return (
        <>
            <HeroSection>
                <Content>
                    <HeroSearchBar />
                </Content>
            </HeroSection>
        </>
    )
}

const HeroSection = styled.section`
    height: 600px;
    background: url(img/hero_bg.jpg) center no-repeat;
    background-size: cover;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(21, 31, 37, 0.77);
        z-index: 0;
    }
`

const Content = styled.div`
    position: relative;
    z-index: 1;
`

export default Hero