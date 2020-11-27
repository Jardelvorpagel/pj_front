import { fetchQuery } from '../../utils'

import Head from 'next/head'
import HeroSingle from 'components/HeroSingle'
import SingleJobContent from 'components/SingleJobContent'

const Post = ({ data, serverUrl }) => {
    console.log(data)

    return (
        <>
            <Head>
                <title>{data.nomeDemanda}</title>
            </Head>
            <HeroSingle
                name={data.nomeDemanda}
                date={data.publicationDate}
                city={data.user.cidade}
                uf={data.user.uf}
            />
            <SingleJobContent
                description={data.descricaoDemanda}
                sponsor={data.user.nomeFantasia}
                logoUser={serverUrl + data.user.logo.formats.thumbnail.url}
                contato={data.user.contatoResponsavel}
                site={data.user.siteEmpresa}
                email={data.user.emailResponsavel}
                address={data.user.endereco}
                city={data.user.cidade}
                uf={data.user.uf}
                maps={data.user.GoogleMaps}
            />
        </>
    )
}

export async function getServerSideProps({ params }) {
    const { pid } = params
    const data = await fetchQuery(`demandas`, pid)
    const serverUrl = process.env.NEXT_PUBLIC_BASE_URL

    return {
        props: {
            data,
            serverUrl
        },
    }
}

export default Post