import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ({ name, image, linklist, title, location, _body, email }) => (
  <Fragment>
    <div className="mx-auto max-w-max relative">
      <div className="w-32 h-32 absolute -left-52">
        <div className="w-32 h-32 absolute top-6 left-6 bg-primary rounded-full"></div>
        <img src={image} alt="Will Fischer" className="w-32 h-32 rounded-full relative" />
      </div>
      <h1 className="font-extralight text-4xl mb-0">{name}</h1>
      <h2 className="text-7xl font-extrabold">{title}</h2>
      <div className="flex gap-2">
        <img src="/assets/icons/location.svg" alt="location icon" className="w-6 h-6" />
        <div className="text-[#4C4A48]">{location}</div>
      </div>
    </div>
    <div className="prose my-6">{_body}</div>
    <div className="flex gap-2">
      <a
        href={`mailto:${email}`}
        alt="email link"
        target="_blank"
        className="px-4 py-1 bg-primary text-neutral-100 flex items-center font-semibold hover:text-neutral-100 hover:bg-primary/90"
      >
        Email Me
      </a>
      {linklist.map((link) => (
        <a
          href={link.url}
          alt={link.title}
          target="_blank"
          className="px-4 py-1 border-primary border-4 text-neutral-800 font-semibold hover:text-neutral-800 hover:bg-primary/20"
        >
          {link.title}
          {/* <img
              src={link.image}
              alt={link.title + '-logo'}
              className="w-7 h-7 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-150"
            /> */}
        </a>
      ))}
    </div>
  </Fragment>
)

Partial.propTypes = {
  _body: PropTypes.node.isRequired,
}

Partial.defaultProps = {}

export default Partial
