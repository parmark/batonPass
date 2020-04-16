import React, { useState } from 'react';
import DrawModal from "../../components/drawModal/draw"
import Gallery from "../../components/Gallery"
import "./Home.css"
import { Carousel } from 'react-bootstrap'

function HomePage(props) {

  const [show, setShow] = useState(false)

  const [currentImg, setCurrentImg] = useState(props.homeGallery[0])

  const [interval, setInterval] = useState(10000)




  const handleShow = () => {
    setShow(true)
    setInterval(null)
  }

  const handleClose = () => {
    setShow(false)
    setInterval(10000)
  }

  const handleSelect = (i) => {
    setCurrentImg(props.homeGallery[i])
  }




  return (
    <div>
      <div className='title'>
        <h1 className='abel translate-up'>Baton Pass!</h1>
        <p className='titilium translate-up'>The pleasure of drawing. One pass at a time.</p>
      </div>

      <div className="container">

        <div className="row">
          <div className="col-9 move-right fade-in">

            <Carousel className="carousel" interval={interval} indicators={false} onSelect={handleSelect}>
              {props.homeGallery.map((image) =>

                <Carousel.Item key={image.alt}>

                  <Gallery show={show} images={image.image} >
                  </Gallery>
                </Carousel.Item>)}
            </Carousel>

          </div>
        </div>
      </div>
    </div>
  );
}


export default HomePage;
