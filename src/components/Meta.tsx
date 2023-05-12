import { FC } from 'react'
import Head from 'next/head'

type Props = {
  title: string
  description: string
  root: string
  icon: string
  favicon: string
  thumbnail: string
}

const Meta: FC<Props> = ( props ) => (
  <>
    <Head>
      <title>GYMLABO</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <meta name='description' content={props.description} />

      <meta property='og:title' content={props.title} />
      <meta property='og:description' content={props.description} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={props.root} />
      <meta property='og:image' content={props.thumbnail} />
      <meta property='og:site_name' content={props.title} />
      <meta property='og:locale' content='ja_JP' />

      {/* <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={props.title} /> */}

      <link rel='canonical' href={props.root} />
      <link rel='shortcut icon' href={props.favicon} />
      <link rel='apple-touch-icon' type='image/png' href={props.icon} sizes='180x180' />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Head>
  </> 
)

export default Meta