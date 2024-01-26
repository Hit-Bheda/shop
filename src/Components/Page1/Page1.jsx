import React from 'react'
import './page1.css'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.png'


function Page1() {
  return (
    <>
        <div className="page1">
            <div className="hero">
                <div className="grid1">
                    <img src={img1} alt="" className='img1'/>
                    <img src={img2} alt="" className='img2'/>
                </div>
                <div className="grid2">
                   <div className="sub-grid1">
                   <h1>Style Elevated, Shopping Simplified.</h1>
                   </div>
                   <div className="sub-grid2">
                    <p>Explore curated fashion, beauty, and electronics. Easy navigation, detailed product info, and exclusive deals. Secure transactions and loyalty perks. Elevate your lifestyle with a click!</p>
                    <button>Shop Now</button>
                   </div>
                </div>
                <div className="grid3">
                    <img src={img3} alt="" className='img3'/>
                    <img src={img4} alt="" className='img4'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Page1