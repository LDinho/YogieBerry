import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import logo from '../../public/images/Pinkberry_Header_Logo.png'

import './index.css'

const Header = () =>
  <div
    style={{
      background: 'transparent',
      marginBottom: '1.45rem',
      borderBottom: '0.5px solid lightgray',
      width: '96%',
      maxHeight: '65px',
    }}
  >
    <div
      style={{
        // margin: '0 auto',
        // maxWidth: 960,
        // padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          <img src={logo} style={{ marginBottom: 0, marginLeft: 12, width: 210 }} alt="pinkberry logo" />
        </Link>
        <Link to="/flavors/"
              style={{
                color: '#888888',
                fontSize: 17,
                fontWeight: 400,
                textDecoration: 'none',
                marginLeft: 40,

        }}>Menu</Link>
      </h1>
    </div>
  </div>;

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="YogieBerry"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        // margin: '0 auto',
        // maxWidth: 960,
        // padding: '0px 1.0875rem 1.45rem',
        // paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
