import Head from 'next/head'
import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
    <Head>
      <title>First post | Echooo</title>
      <meta
      name="description"
      content="Excerpt of my blog post"
      />
    </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}