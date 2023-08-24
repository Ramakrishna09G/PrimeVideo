// Write your code here
import Slider from 'react-slick'

import MovieItem from '../MovieItem/index'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  return (
    <>
      <Slider {...settings}>
        {moviesList.map(eachItem => (
          <MovieItem movieItem={eachItem} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
