import React from 'react';
import './index.scss';

import me from '../../assets/images/me.jpg';

const about_me = [
  <p>I'm a product designer based in Waterloo, Canada, pursuing an Honours' Bachelors' Degree in Global Business and Digital Arts at
  the <a className="highlight" href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer">University of Waterloo</a>, expecting
  to graduate in the spring of 2022.</p>,
  <p>On the side, I'm converting <a className="highlight" href="https://www.hinterland.ai/" target="_blank" rel="noopener noreferrer">Hinterland</a>,
  a side-project of mine, into it's own company, as well as running
  <a className="highlight" href="https://thesage.co/#/" target="_blank" rel="noopener noreferrer">Sage Co</a>, a web design agency I started over
  the summer of 2018 to exercise my design and management skills.</p>,
  <h3 key={9}>Consulting</h3>,
  <p>I work directly with SMBs across North America and Europe, typically helping with brand strategy, product design, and website development.</p>,
  <p>To work with me or hear more, please email me at emile@thesage.co</p>

]

const socials: {[social: string] : string} = {
  "Email": "mailto:erpatryb@uwaterloo.ca?Subject=Saying Hello!",
  "Twitter": "https://twitter.com/patryemile",
  "Telegram": "https://t.me/blentry",
  "Newsletter": "https://emile.substack.com",
  "Resume": "files/Resume.pdf",
}

export default function Home() {
  return (
    <div className="home">
      <img src={me} alt="me"/>
      <p className="hi-there">Hi there,</p>
      <div className="about-me">
        {about_me.map((text, i) => {
          return <div key={i}>{text}</div>
        })}
      </div>
      <div className="socials">
        {Object.keys(socials).map((key, i) => {
          return <a key={i} target="_blank" rel="noopener noreferrer" className="highlight" href={socials[key]}><p>{key}</p></a>
        })}
      </div>
    </div>
  )
}
