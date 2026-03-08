import React from 'react';

const Card = (props) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={props.imgURL} className="card-img-top" alt="album cover" />
      <div className="card-body">
        <h5 className="card-title">{props.albumTitle}</h5>
        <p className="card-text">{props.albumDescription}</p>
        <button className="btn btn-primary me-2">{props.buttonText}</button>
        <button className="btn btn-secondary" onClick={props.onSelectAlbum}>
          View
        </button>
      </div>
    </div>
  );
};

export default Card;