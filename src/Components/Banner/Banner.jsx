import React from 'react'
import './banner.css'

function Banner(props) {
  return (
    <>
        <div className="banner">
            <div className="sg1">
                <div className="p">20 % Off</div>
                <div className="h1">Tech Boost, Less Cost!</div>
                <div className="p">22-Jan-24</div>
            </div>
            <div className="sg2">
                <h1>Winter Sale</h1>
                <p>"Winter Sale: Cozy Up with Hot Savings! Explore our curated collection for snug deals. Limited stock, so don't miss out! Warm up your winter today."</p>
                <button>Start Shoping</button>
            </div>
        </div>
    </>
  )
}

export default Banner