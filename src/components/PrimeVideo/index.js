// Write your code here
import MoviesSlider from '../MoviesSlider/index'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-bg-container">
      <div className="prime-video-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-img"
        />
        <div className="movies-list-container">
          <h1 className="movies-category">Action Movies</h1>
          <div className="slider-container">
            <MoviesSlider moviesList={actionMoviesList} />
          </div>
        </div>
        <div className="movies-list-container">
          <h1 className="movies-category">Comedy Movies</h1>
          <div className="slider-container">
            <MoviesSlider moviesList={comedyMoviesList} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
