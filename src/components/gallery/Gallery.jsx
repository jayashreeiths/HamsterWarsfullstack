import Hamsters from "./Hamsters";
//import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Gallery = ({ hamsterList }) => {
  return (
    <div className="Gallery">
      <Link to="/Upload">
        <h1 className="galleryButton">UPLOAD YOUR HAMSTER</h1>
      </Link>

      <div className="container-list">
        {hamsterList.map((hamster) => (
          <Hamsters hamster={hamster} key={hamster.id} hamsterList ={hamsterList} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;