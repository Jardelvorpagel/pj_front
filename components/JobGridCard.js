import styled from '@emotion/styled'
import Link from 'next/link'

const JobGridCard = ({
    title,
    name,
    logo,
    link,
    city
}) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="job-grid">
                <div className="job-title-sec">
                    <div className="c-logo"><ImgLogo src={logo} alt="" /></div>
                    <h3>
                        <Link href={link}>
                            <a>{title}</a>
                        </Link>
                    </h3>
                    <span>{name}</span>
                    <span className="fav-job"><i className="la la-heart-o" /></span>
                </div>
                <span className="job-lctn">{city}</span>
                <Link href={link}>
                    <a>Ver Sobre</a>
                </Link>
            </div>{/* JOB Grid */}
        </div>
    )
}

const ImgLogo = styled.img`
    max-width: 250px !important
`

export default JobGridCard