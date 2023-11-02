import React from 'react'

const StarRatings = ({rating}) => {
  return (
    <div className="stars" style={{"--rating" : rating}} aria-label="Rating of this product is 2.3 out of 5." />
  )
}

export default StarRatings