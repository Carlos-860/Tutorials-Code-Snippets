import React from 'react';
import star from '../assets/star.png';

function Card(props) {
  let badgeText = '';
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div style={card} className="card">
      {(props.openSpots === 0 || props.location === 'Online') && (
        <span style={{ position: 'absolute', top: '6px', left: '6px', background: 'white', padding: '5px 7px', fontSize: '10px', fontWeight: 'bold', borderRadius: '2px' }}>{badgeText}</span>
      )}

      <img src={`./assets/${props.coverImg}`} alt="Katie Zaraferes" style={cardImage} className="card--image" />

      <div style={{ cardStats }} className="card--stats">
        <img src={star} width="14" alt="Star Icon" style={cardStar} className="card--star" />
        <span>{props.stats.rating} </span>
        <span style={gray} className="gray">
          ({props.stats.reviewCount}) &#8226;
        </span>
        <span style={gray} className="gray">
          {' '}
          {props.location}
        </span>

        <p style={cardTitle} className="card--title">
          {props.title}
        </p>

        <p style={cardPrice} className="card--price">
          <span style={{ fontWeight: 'bold' }} className="bold">
            From ${props.price}
          </span>{' '}
          / person
        </p>
      </div>
    </div>
  );
}

export default Card;

const card = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flex: '0 0 auto',
  maxWidth: '175px',
  fontSize: '12px',
};

const cardImage = {
  width: '100%',
  minWidth: '176px',
  maxHeight: '235px',
  objectFit: 'cover',
  borderRadius: '9px',
  marginBottom: '9px',
};

const cardTitle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const cardStats = {
  display: 'flex',
  alignItems: 'center',
};

const cardStar = {
  height: '14px',
};

const cardPrice = {
  marginTop: 'auto',
};

const gray = {
  color: '#918e9b',
};
