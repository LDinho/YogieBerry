import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () =>
  <div
    style={{
      backgroundColor: 'transparent',
      width: 202,
      height: 53,
      borderBottom: '0.5px solid lightgray',
      borderTop: '0.5px solid lightgray',
      borderRight: '0.5px solid lightgray',
      borderRadius: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 60,
      marginLeft: -16,

    }}
  >
    <Link to="/flavors/"
          style={{
            color: '#7EBF00',
            fontSize: 17,
            fontWeight: 500,
            textDecoration: 'none',
            marginLeft: 'auto',
            paddingRight: 16,
          }}
    >
      Flavors
    </Link>

  </div>;

export default IndexPage
