const SingleJobContent = ({
    description,
    sponsor,
    logoUser,
    contato,
    site,
    email,
    address,
    city,
    uf,
    maps
}) => {
    return (
        <section>
            <div className="block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 column">
                            <div className="job-single-sec">
                                <div className="job-single-head">
                                    <div className="job-thumb"> <img src={logoUser} alt={sponsor} /> </div>
                                    <div className="job-head-info">
                                        <h4>{sponsor}</h4>
                                        <span>{address} {city} - {uf}</span>
                                        <p><i className="la la-unlink" /> {site}</p>
                                        <p><i className="la la-phone" /> {contato}</p>
                                        <p><i className="la la-envelope-o" /> {email}</p>
                                    </div>
                                </div>{/* Job Head */}
                                <div className="job-details">
                                    <h3>Descrição</h3>
                                    <p>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 column">
                            <a
                                href={`mailto:${email}`}
                                className="apply-thisjob"
                                style={{ textDecoration: 'none' }}
                            >
                                <i className="la la-paper-plane" />Candidatar-se
                            </a>
                            {maps ?
                                <div className="job-location">
                                    <h3>Local da Empresa</h3>
                                    <div className="job-lctn-map">
                                        <iframe src={maps} />
                                    </div>
                                </div>
                                : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleJobContent