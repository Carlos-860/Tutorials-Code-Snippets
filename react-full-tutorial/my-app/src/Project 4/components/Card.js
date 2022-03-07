import React from 'react';

function Card(props) {
  return (
    <div style={card}>
      <div>
        <img src={`./assets/${props.imageUrl}`} alt={props.title} />
      </div>

      <div>
        <div>
          <img src={`./assets/location-icon.png`} alt="Location Icon" />
          <span style={{ fontSize: '10px', textTransform: 'uppercase', margin: '0rem .5rem' }}>{props.location}</span>
          <a style={{ fontSize: '10px', color: '#918E9B' }} href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>

        <h2 style={cardTitle}>{props.title}</h2>

        <p style={{ fontSize: '10px', fontWeight: 'bold' }}>
          {props.startDate} - {props.endDate}
        </p>

        <p style={{ fontSize: '10px', lineHeight: '150%' }}>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;

const card = {
  marginBlock: '5rem',
  display: 'flex',
  gap: '2rem',
  maxWidth: '471px',
  margin: '2rem auto',
};

const cardTitle = {
  fontSize: '25px',
  fontWeight: 'bold',
  marginTop: '.5rem',
  marginBottom: '.25rem',
};
