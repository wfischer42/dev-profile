import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ({ name, image, linklist }) => (
  <Fragment>
    <div className="flex flex-col items-center">
      <img src={image} alt="" className="w-28 h-28 rounded-full" />
      <h1>Hi there, I'm {name}</h1>
      <div className="flex">
        {linklist.map((link) => (
          <a href={link.url} alt={link.title} target="_blank" className="px-4">
            {link.title}
            {/* <img
              src={link.image}
              alt={link.title + '-logo'}
              className="w-7 h-7 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-150"
            /> */}
          </a>
        ))}
      </div>
    </div>
  </Fragment>
)

Partial.propTypes = {
  _body: PropTypes.node.isRequired,
}

Partial.defaultProps = {}

export default Partial
