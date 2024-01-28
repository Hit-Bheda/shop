import React from 'react'
import './page3.css'
import fridge from '../../assets/fridge.png'
import wash from '../../assets/wash.png'
import BigCard from '../BigCard/BigCard'
import book from '../../assets/book.png'
import bag from '../../assets/bag.png'
import monitor from '../../assets/monitor.png'
import cpu from '../../assets/cpu.png'
import Card from '../Card/Card'
import watch from '../../assets/watch.png'
import shoe from '../../assets/shoe.png'
import headphone from '../../assets/headphone.png'
import hoddie from '../../assets/hoddie.png'


function Page3() {
  return (
    <>
        <div className="page3">
           <div className="hero3">
           <div className="l">
                <div className="l1">
                    <BigCard img1={wash} img2={fridge} background="#B4CBB4" h1="Home Appiliance" i1Width='15vw' i2Width='15vw'/>
                </div>
                <div className="l2">
                <BigCard img1={book} img2={bag} background="#E5D68E" h1="Books and Stationery" i1Width='10vw' i2Width='10vw'/>
                </div>
                <div className="l3">
                    <Card img={headphone} width='16vw' sttl='Electronics' bttl='The Ear Wood Headphones' price='20' cardWidth='48%'/>
                    <Card img={shoe} width='22vw' sttl='Fashion1' bttl='Pink Shoes' price='20' cardWidth='48%'/>
                </div>
            </div>
            <div className="r">
                <div className="r1">
                    <p>Uncover excellence with our best-selling products—where style meets functionality. From fashion essentials to cutting-edge tech, these curated gems embody popularity and quality. Join savvy shoppers in elevating your lifestyle with the epitome of exceptional choices. Explore our best-sellers now and embrace the essence of top-tier selections.</p>
                    <h1>Best Selling</h1>
                </div>
                <div className="r2">
                <Card img={hoddie} width='16vw' sttl='Fashion' bttl='black hoddie' price='20' cardWidth='48%'/>
                    <Card img={watch} width='22vw' sttl='Fashion' bttl='Digital Watch' price='20' cardWidth='48%'/>
                </div>
                <div className="r3">
                <BigCard img1={cpu} img2={monitor} background="#B4CBB4" h1="Gamming Stuff" i1Width='15vw' i2Width='10vw'/>
                </div>
            </div>
           </div>
        </div>
    </>
  )
}

export default Page3