import styled from '@emotion/styled'
import HeroSearchBar from 'components/HeroSearchBar'

const Hero = ({ name, date, city, uf }) => {
    return (
        <>
            <section className="overlape">
                <div className="block no-padding">
                    <div data-velocity="-.1" style={{ background: 'url("images/resource/mslider1.jpg") 50% -96.9px repeat scroll transparent' }} className="parallax scrolly-invisible no-parallax" />{/* PARALLAX BACKGROUND IMAGE */}
                    <div className="container fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-header">
                                    <h3>{name}</h3>
                                    <div className="job-statistic">
                                        {/* <span>Alta</span> */}
                                        <p><i className="la la-map-marker" />{city}, {uf}</p>
                                        <p><i className="la la-calendar-o" />Publicado em {date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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