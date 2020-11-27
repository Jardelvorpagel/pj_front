import Head from 'next/head'
import HeroSingle from 'components/HeroSingle'
import SingleJobContent from 'components/SingleJobContent'

function SingleJob() {
    return (
        <>
            <Head>
                <title>Single Job</title>
            </Head>
            <HeroSingle />
            <SingleJobContent />
        </>
    )
}

export default SingleJob
