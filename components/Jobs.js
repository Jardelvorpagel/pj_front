import JobGridCard from './JobGridCard'

const Jobs = ({ dataDemanda, serverUrl }) => {
    return (
        <section>
            <div className="block gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading">
                                <h2>Demandas</h2>
                            </div>{/* Heading */}
                            <div className="job-grid-sec">
                                <div className="row">
                                    {dataDemanda.map((data) => (
                                        <JobGridCard
                                            key={data.id}
                                            title={data.nomeDemanda}
                                            city={data.user.cidade}
                                            name={data.user.nomeFantasia}
                                            logo={serverUrl + data.user.logo.url}
                                            link={`/demandas/${encodeURIComponent(data.id)}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="browse-all-cat">
                                <a href="#" className="style2">Ver Mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Jobs