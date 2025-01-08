import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="https://images-na.ssl-images-amazon.com/images/I/71t4GuxLCuL.jpg" alt=''/>
                <img src="https://images-na.ssl-images-amazon.com/images/I/81mXQdi5x+L.jpg" alt=''/>
                <img src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" alt=''/>
                <img src="https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg" alt=''/>
                <img src="https://images-na.ssl-images-amazon.com/images/I/71t4GuxLCuL.jpg" alt=''/>
                <img src="https://images-na.ssl-images-amazon.com/images/I/81mXQdi5x+L.jpg" alt=''/>
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery