import { fetchQuery } from '../utils'

import Head from 'next/head'
import Hero from 'components/Hero'
import Jobs from 'components/Jobs'

const Home = ({ dataDemanda, serverUrl }) => {
  console.log(dataDemanda)

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Hero />
      <Jobs dataDemanda={dataDemanda} serverUrl={serverUrl} />
    </>
  )
}

export async function getServerSideProps() {
  const dataDemanda = await fetchQuery('demandas')
  const serverUrl = process.env.NEXT_PUBLIC_BASE_URL

  return {
    props: {
      dataDemanda,
      serverUrl
    }
  }
}

export default Home