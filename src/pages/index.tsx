import Head from 'next/head'
import {Navigation} from "../components/nav/Navigation"


export default function Home() {
  return (
      <>
        <Head>
          <title>Mars Win</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
          <header>
              <Navigation/>
          </header>
      </>
  )
}
