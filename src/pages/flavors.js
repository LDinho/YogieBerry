import React from 'react'
import Link from 'gatsby-link'
import IndexPage from './index.js'

import '../layouts/flavors.css'

const Flavors = () =>
  <div>
    <IndexPage />
    <h1 style={{ color: '#7EBF00', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Frozen Yogurt Flavors</h1>
    <div className="accordion">
      <ul>
        <li>
          <div> <a href="#">
            <h2>black raspberry</h2>
          </a> </div>
        </li>
        <li>
          <div> <a href="#">
            <h2>power berry</h2>
          </a> </div>
        </li>
        <li>
          <div> <a href="#">
            <h2>pomegranate</h2>
          </a> </div>
        </li>
        <li>
          <div> <a href="#">
            <h2>original</h2>
          </a> </div>
        </li>
        <li>
          <div> <a href="#">
            <h2>blood orange</h2>
          </a> </div>
        </li>
      </ul>
    </div>
    <Link to="/">Go back</Link>
  </div>

export default Flavors
