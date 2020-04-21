import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        {/* <link rel="icon" href={favicon}/> */}

        {/* Primary Meta Tags */}
        <title>alys</title>
        <meta name="title" content="alys"/>
        <meta name="description" content="a filipino singer-songwriter born and raised in a sandbox"/>
        

        {/* Open Graph / Facebook */}
        {/* <meta property="og:type" content="website"/> */}
        {/* <meta property="og:url" content="add new url"/> */}
        <meta property="og:title" content="alys"/>
        <meta property="og:description" content="a filipino singer-songwriter born and raised in a sandbox"/>
        {/* <meta property="og:image" content={avatar}/> */}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        {/* <meta property="twitter:url" content="add new url"/> */}
        <meta property="twitter:title" content="alys"/>
        <meta property="twitter:description" content="a filipino singer-songwriter born and raised in a sandbox"/>
        {/* <meta property="twitter:image" content={avatar}/> */}

        <link href="https://unpkg.com/basscss@8.0.2/css/basscss.min.css" rel="stylesheet"/>
        <link href="https://cdn.lineicons.com/2.0/LineIcons.css" rel="stylesheet"/>

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
