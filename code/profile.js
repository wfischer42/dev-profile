import PropTypes from 'prop-types'
import React from 'react'

const Page = ({ title, stylesheet, header, bio, script, _relativeURL, _ID }) => (
  <html>
    <head>
      <title>Will Fischer - {title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href={_relativeURL(`/assets/css/site.css`, _ID)} />
      <link rel="stylesheet" href={_relativeURL(`/assets/css/tw.css`, _ID)} />
      {stylesheet != undefined ? (
        <link rel="stylesheet" href={_relativeURL(`/assets/css/${stylesheet}.css`, _ID)} />
      ) : null}
    </head>
    <body className="bg-stone-100">
      <div className="top">
        <main>{bio}</main>
      </div>
      {script != undefined ? <script src={_relativeURL(`/assets/js/${script}.js`, _ID)} /> : null}
    </body>
  </html>
)

// <footer>{footer}</footer>

Page.propTypes = {
  /**
   * title: Homepage
   */
  title: PropTypes.string.isRequired,

  /**
   * main: (partials)(5)
   */
  main: PropTypes.node.isRequired,

  /**
   * footer: (partials)(2)
   */
  // footer: PropTypes.node.isRequired,
}

Page.defaultProps = {}

export default Page
