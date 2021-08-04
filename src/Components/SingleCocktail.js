import React from 'react';
import { Link } from 'react-router-dom';

const SingleCocktail = ({id, image, name, glass, info}) => {
    return <article className="single-item">
              <img src={image} alt={name} />
              <div className="info">
                <h3>{name}</h3>
                <p>{glass}</p>
                <p><span>{info}</span></p>
                {/* <button className="btn">Details</button> */}
                <Link to={`/cocktails/${id}`} className="btn">Details</Link>
              </div>
            </article>
}

export default SingleCocktail