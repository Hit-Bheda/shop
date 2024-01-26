import React from 'react'
import './small.css'
import { FaArrowUpLong } from "react-icons/fa6";

function Small(props) {
  return (
    <>
        <div className="sCard">
            <div className="top">
            <FaArrowUpLong />
            </div>
            <div className="p-img">
                <img src={props.item} alt="bitch" />
            </div>
            <div className="btm">
                <div className="left">
                    <div className="catg">
                    <p>{props.sttl}</p>
                    </div>
                    <div className="title">
                        <p>{props.bttl}</p>
                    </div>
                
                </div>
                <div className="right">
                    <button>100$</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Small