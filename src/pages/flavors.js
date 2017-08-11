import React from 'react'
import Link from 'gatsby-link'
import IndexPage from './index.js'

import '../layouts/flavors.css'

const Flavors = () =>
  <div>
    <IndexPage />
    <h1
      style={{
        color: '#7EBF00',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >Frozen Yogurt Flavors
    </h1>
    <div className="accordion">
      <ul>
        <li>
          <div> <Link to="/raspberry/">
            <p>black raspberry</p>
          </Link> </div>
        </li>
        <li>
          <div> <Link to="/powerberry/">
            <p>power berry</p>
          </Link> </div>
        </li>
        <li>
          <div> <Link to="/pomegranate/">
            <p>pomegranate</p>
          </Link> </div>
        </li>
        <li>
          <div> <Link to="/original/">
            <p>original</p>
          </Link> </div>
        </li>
        <li>
          <div> <Link to="/bloodOrange/">
            <p>blood orange</p>
          </Link> </div>
        </li>
      </ul>
    </div>
  </div>;

export default Flavors
