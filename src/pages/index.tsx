import type { NextPage } from 'next'
import Head from 'next/head'
import {useGetAllUsersQuery} from "../store/api/api.slice";
const IndexPage: NextPage = () => {
    const {data, isLoading, error} = useGetAllUsersQuery()
    console.log(data)

    return (
    <div>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>

      </header>
    </div>
  )
}

export default IndexPage
