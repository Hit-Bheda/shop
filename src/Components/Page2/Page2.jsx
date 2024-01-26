import React from 'react'
import './page2.css'
// import Catagorie from '../Catagories/Catagorie'
import man1 from '../../assets/man1.png'
import man2 from '../../assets/man2.png'
import BigCard from '../BigCard/BigCard'
import Small from '../SmallProduct/Small'
import item from '../../assets/keybord.png'
import flowerpott from '../../assets/flowerpott.png'
import sofa from '../../assets/sofa.png'
import zummer from '../../assets/zummer.png'
import Card from '../Card/Card'
import chair from '../../assets/chair.png'
import phone from '../../assets/phone.png'


function Page2() {
  return (
    <>
        <div className="page2">
            <div className="hero2">
               <div className="box1">
                <div className="g1">
                    <div className="heading-text">
                    Explore Products
                    </div>
                    <div className="description">
                    Embark on a journey of discovery through our curated selection of top-notch products. From fashion to tech, find what speaks to your style. Uncover exclusive deals and the latest trends with a simple click. Explore now and redefine your shopping experience.
                    </div>
                </div>
                <div className="g2">
                    <BigCard img1={man1} img2={man2} h1='Man’s Fashion' background='#B4CBB4' i1Width='6.4vw' i2Width='18vw'/>
                </div>
                <div className="g3">
                    <Small item={item} sttl='Electronics' bttl='Corsair Gaming K68 Mechanical Keyboard'/>
                    <Small item={flowerpott} sttl='Decoration' bttl='Artifitial Flower pot'/>

                </div>
               </div>
               <div className="box2">
                    <div className="g4">
                        <div className="card1">
                            <Card img={chair} width='13vw' sttl='Ferniture' bttl='White Wooden Chair Elegance' price='20'/>
                        </div>
                        <div className="card2">
                            <Card img={phone} width='20vw' sttl='Electronics' bttl='I-Phone 11' price='20'/>
                        </div>
                    </div>
                    <div className="g5">
                    <BigCard img1={sofa} img2={zummer} h1='Affordable Luxury!' background='#E5D68E' i1Width='13vw' i2Width='13vw'/>
                    </div>
               </div>
            </div>
        </div>
    </>
  )
}

export default Page2