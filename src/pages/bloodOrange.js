import React from 'react'
import Link from 'gatsby-link'
import IndexPage from './index.js'

import bloodOrange from '../../public/images/BloodOrange_flavor.jpg'

import '../layouts/flavors.css'

const BloodOrange = () =>
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
    <div
      style={{
        fontFamily: 'sans-serif',
        fontSize: 30,
        fontWeight: '700',
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
      }}
    >
      <Link to="/flavors/" style={{fontSize: 16, textDecoration: 'none', color:'#7EBF00'}}>back to menu</Link>
      <p style={{color:'#7EBF00'}}>blood orange</p>
      <img src={bloodOrange} alt="blood orange" />
    </div>
  </div>;

export default BloodOrange
