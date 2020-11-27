import { fetchQuery } from '../../utils'

import Head from 'next/head'
import HeroSingle from 'components/HeroSingle'
import SingleJobContent from 'components/SingleJobContent'

const Post = ({ data }) => {
    return (
        <>
            <Head>
                <title>{data.title}</title>
            </Head>
            <HeroSingle name={data.title} date={data.date} />
            <SingleJobContent description={data.content} sponsor={data.author.name} />
        </>
    )
}

export async function getServerSideProps({ params }) {
    const { pid } = params
    const data = await fetchQuery(`posts`, pid)

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data
        },
    }
}

export default Post