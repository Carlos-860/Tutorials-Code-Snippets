import React from 'react';
import ProfileImage from '../assets/laura-smith.png';
import Mail from '../assets/Mail.png';
import Linkedln from '../assets/Linkedln.png';
import TwitterIcon from '../assets/Twitter Icon.png';
import FacebookIcon from '../assets/Facebook Icon.png';
import InstagramIcon from '../assets/Instagram Icon.png';
import LinkedinIcon from '../assets/Linkedin Icon.png';
import GitHubIcon from '../assets/GitHub Icon.png';

function BusinessCard() {
  return (
    <main style={{ background: '#1c1c1c' }}>
      <div style={cardFlexContainer}>
        <div style={cardContainer}>
          <div style={card}>
            <img src={ProfileImage} alt="Laura Smith" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />

            <div style={cardBody}>
              <h1 style={{ fontSize: '26px', fontWeight: 'bold', margin: '0rem' }}>Laura Smith</h1>
              <h2 style={{ fontSize: '14px', fontWeight: 'normal', color: '#f3bf99' }}>Frontend Developer</h2>
              <p style={{ fontSize: '12px', color: '#f5f5f5' }}>laurasmith.website</p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <a href="!#" style={btn_primary}>
                  <img src={Mail} alt="Mail Icon" style={{ marginRight: '0.4rem' }} />
                  <span style={{ fontSize: '14px' }}>Email</span>
                </a>

                <a href="!#" style={btn_brand}>
                  <img src={Linkedln} alt="Linkedln Icon" style={{ marginRight: '0.4rem' }} />
                  <span style={{ fontSize: '14px' }}>Linkedln</span>
                </a>
              </div>

              <div style={{ textAlign: 'left', marginTop: '2rem' }}>
                <h3 style={{ marginBottom: '0', color: '#f5f5f5' }}>About</h3>

                <p style={{ fontSize: '14px', color: '#dcdcdc', lineHeight: '150%' }}>
                  I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for
                  new things to learn.
                </p>

                <h3 style={{ marginBottom: '0', color: '#f5f5f5' }}>Interests</h3>

                <p style={{ fontSize: '14px', color: '#dcdcdc', lineHeight: '150%' }}>
                  Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
              </div>
            </div>

            <div style={cardFooter}>
              <img src={TwitterIcon} alt="Twitter Icon" />
              <img src={FacebookIcon} alt="Facebook Icon" />
              <img src={InstagramIcon} alt="Instagram Icon" />
              <img src={GitHubIcon} alt="GitHub Icon" />
            </div>
          </div>
        </div>

        <div style={cardContainer}>
          <div style={card}>
            <img src={ProfileImage} alt="Laura Smith" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />

            <div style={cardBody}>
              <h1 style={{ fontSize: '26px', fontWeight: 'bold', margin: '0rem' }}>Laura Smith</h1>
              <h2 style={{ fontSize: '14px', fontWeight: 'normal', color: '#f3bf99' }}>Frontend Developer</h2>
              <p style={{ fontSize: '12px', color: '#f5f5f5' }}>laurasmith.website</p>

              <a
                href="!#"
                style={{ background: '#fff', color: '#374151', padding: '0.5rem 1rem', borderRadius: '5px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <img src={Mail} alt="Mail Icon" style={{ marginRight: '0.4rem' }} />
                <span style={{ fontSize: '14px' }}>Email</span>
              </a>

              <div style={{ textAlign: 'left', marginTop: '2rem' }}>
                <h3 style={{ marginBottom: '0', color: '#f5f5f5' }}>About</h3>

                <p style={{ fontSize: '14px', color: '#dcdcdc', lineHeight: '150%' }}>
                  I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for
                  new things to learn.
                </p>

                <h3 style={{ marginBottom: '0', color: '#f5f5f5' }}>Interests</h3>

                <p style={{ fontSize: '14px', color: '#dcdcdc', lineHeight: '150%' }}>
                  Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
              </div>
            </div>

            <div style={cardFooter}>
              <img src={TwitterIcon} alt="Twitter Icon" />
              <img src={FacebookIcon} alt="Facebook Icon" />
              <img src={InstagramIcon} alt="Instagram Icon" />
              <img src={LinkedinIcon} alt="Linkedin Icon" />
              <img src={GitHubIcon} alt="GitHub Icon" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BusinessCard;

const cardFlexContainer = {
  minHeight: '100vh',
  maxWidth: 'max-content',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '2rem',
  margin: 'auto',
};

const cardContainer = {
  background: '#23252c',
  padding: '3rem',
};

const card = {
  flexGrow: '1',
  maxWidth: '317px',
  height: 'max-content',
  background: '#1a1b21',
  borderRadius: '10px',
  overflow: 'hidden',
};

const cardBody = {
  padding: '1rem 2rem',
  textAlign: 'center',
};

const btn_primary = {
  background: '#fff',
  color: '#374151',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
};

const btn_brand = {
  background: '#5093e2',
  color: '#fff',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
};

const cardFooter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
  background: '#161619',
  padding: '0.75rem',
};
