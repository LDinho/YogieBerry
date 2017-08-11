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
            <p>black raspberry</p>
          </a> </div>
        </li>
        <li>
          <div> <a href="#">
            <p>power berry</p>
          </a> </div>
        </li>
        <li>
          <div> <a href="#">
            <p>pomegranate</p>
          </a> </div>
        </li>
        <li>
          <div> <a href="#">
            <p>original</p>
          </a> </div>
        </li>
        <li>
          <div> <a href="#">
            <p>blood orange</p>
          </a> </div>
        </li>
      </ul>
    </div>
    <Link to="/">Go back</Link>
  </div>

export default Flavors
