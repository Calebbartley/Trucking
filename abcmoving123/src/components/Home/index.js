import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import './index.scss'
const Home = ()=> {
    const [letterClass, setLetterClass] = useState(initialState)


    return (
      <div className="Container home-page">
        <div className="text-zone">
          <h1>
            Road Runners Transportation LLC
            <br /> 214 Overlook Circle Suite 200
            <br /> Brentwood TN 37027
          </h1>
          <h2>We Thrive on Honesty, Integrity,Hard Work and Family.
          <br/> We Deal and Work  With Dry Van, Reefer, Flat Bed anfd Car Hauling.
          <br/> We're Always Looking for Owner Operators To Lease Under Our Authority.
          <br/> To Learn How To Start Your Own Authority, We Can Help !!!
          </h2>
          <Link to='/contact'className='flat-button'>CONTACT US</Link>
        </div>
      </div>
    )
}

export default Home