import React from 'react'
import './bigcard.css'
function BigCard(props) {
  return (
    <>
        <div className="bcard" style={{background:props.background}}>
            <div className="left-side">
                <img src={props.img1} alt="" style={{width:props.i1Width}}/>
            </div>
            <div className="center">
                <h1>{props.h1}</h1>
                <button>View All</button>
            </div>
            <div className="right-side">
                <img src={props.img2} alt="" style={{width:props.i2Width}}/>
            </div>
        </div>
    </>
  )
}

export default BigCard