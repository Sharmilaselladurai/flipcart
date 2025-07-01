import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
        <div className="descriptionBox-navigator">
            <div className="descriptionBox-nav-box">Description</div>
            <div className='descriptionBox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className="descriptionBox-description">
          <p>Welcome to Shopper, your go-to destination for everything stylish, affordable, and high-quality. Whether you're looking for the latest fashion trends, everyday essentials, or exclusive seasonal collections, we bring you a curated selection of products to match your lifestyle.

          </p>
          <div>
             <p>At Shopper, we believe in:</p>
                <p>💯 Quality-first products</p>
               <p>🚚 Fast & reliable delivery</p>
                <p>💸 Affordable pricing</p>
                <p>💬 Friendly customer support</p>
          </div>
        </div>
    </div>
  )
}

export default DescriptionBox