import React from 'react'
import Head from 'next/head'
import MetaProps  from 'types/Meta'

const Meta = ( { detail, path } : MetaProps): JSX.Element => {
  const { title, description, url } = detail
  const { icon, favicon, thumbnail } = path
  return (
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <meta name='description' content={description} />

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={thumbnail} />
      <meta property='og:site_name' content={title} />
      <meta property='og:locale' content='ja_JP' />

      {/* <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} /> */}

      <link rel='canonical' href={url} />

      <link rel='shortcut icon' href={favicon} />
      <link rel='apple-touch-icon' type='image/png' href={icon} sizes='180x180' />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"></link>
    </Head>
  )
}

export default Meta