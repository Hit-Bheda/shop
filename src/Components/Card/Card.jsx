import React from 'react'
import './card.css'
import { FaArrowUpLong } from "react-icons/fa6";


function Card(props) {
  return (
    <>
        <div className="card">
            <div className="top-card">
                <div className="ls">
                    <div className="gbtn"></div>
                    <div className="ybtn"></div>
                </div>
                <div className="rs">
                    <div className="arr-btn"><FaArrowUpLong /></div>
                </div>
            </div>
            <div className="mid-card">
                <img src={props.img} alt="" style={{width:props.width}}/>
            </div>
            <div className="btm-card">
                <div className="txt">
                    <div className="ttl">{props.sttl}</div>
                    <div className="dsc">{props.bttl}</div>
                </div>
                <div className="btn">
                    <button>{props.price}$</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card