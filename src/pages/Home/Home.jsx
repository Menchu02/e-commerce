// import React, { Component } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'

// const items = [
//   {
//     src: require( './img/fotoModa1.jpg') ,
//     altText: 'Imagen 1',
//     caption: 'Moda 1'
//   },
//   {
//     src: require('./img/fotoModa2.png') ,
//     altText: 'Imagen 2 ',
//     caption: 'Moda 2 '
//   },
//   {
//     src:require('./img/fotoModa3.png') ,
//     altText: 'Imagen 3',
//     caption: 'Moda 3'
//   }
// ];

// class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { activeIndex: 0 };
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//     this.goToIndex = this.goToIndex.bind(this);
//     this.onExiting = this.onExiting.bind(this);
//     this.onExited = this.onExited.bind(this);
//   }

//   onExiting() {
//     this.animating = true;
//   }

//   onExited() {
//     this.animating = false;
//   }

//   next() {
//     if (this.animating) return;
//     const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
//     this.setState({ activeIndex: nextIndex });
//   }

//   previous() {
//     if (this.animating) return;
//     const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
//     this.setState({ activeIndex: nextIndex });
//   }

//   goToIndex(newIndex) {
//     if (this.animating) return;
//     this.setState({ activeIndex: newIndex });
//   }

//   render() {
//     const { activeIndex } = this.state;

//     const slides = items.map((item) => {
//       return (
//         <CarouselItem
//           onExiting={this.onExiting}
//           onExited={this.onExited}
//           key={item.src}
//         >
//           <img src={item.src} alt={item.altText} />
//           <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
//         </CarouselItem>
//       );
//     });

//     return (
//       <Carousel
//         activeIndex={activeIndex}
//         next={this.next}
//         previous={this.previous}
//       >
//         <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
//         {slides}
//         <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
//         <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
//       </Carousel>
//     );
//   }
// }

// export default Example;

//
import React from 'react'
import Slider from 'infinite-react-carousel'

export default function Home({ images }) {
  return (
    <section className="slider">
      <Slider className="slider__content">
        {images.map((image) => (
          <div key={image.id} className="slider__content--item">
            <img src={image.image} alt={image.title} />
            <p className="slider-description">{image.title}</p>
          </div>
        ))}
      </Slider>
    </section>
  )
}
