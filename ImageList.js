import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';
const ImageList= (props)=>{
    const images= props.image.map((image)=>{
        return <ImageCard  key= {image.id} image= {image}></ImageCard>
    });
    return <div className= "image-list">{images}</div>
};
export default ImageList;