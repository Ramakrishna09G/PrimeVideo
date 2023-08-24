// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieItem} = props
  const {id, thumbnailUrl, videoUrl, categoryId} = movieItem

  return (
    <div className="movie-item-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <>
            <button
              data-testid="closeButton"
              type="button"
              className="close-btn"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <ReactPlayer url={videoUrl} className="react-player" />
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
