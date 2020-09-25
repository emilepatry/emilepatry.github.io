import React from 'react';
import './index.scss';

import me from '../../assets/images/me.jpg';

const about_me = [
  <p>I'm a product designer based in Waterloo, Canada, pursuing an Honours' Bachelors' Degree in Global Business and Digital Arts at
  the <a className="highlight" href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer">University of Waterloo</a>, expecting
  to graduate in the spring of 2022.</p>,
  <p>On the side, I'm converting <a className="highlight" href="https://www.hinterland.ai/" target="_blank" rel="noopener noreferrer">Hinterland</a>,
  a side-project of mine, into it's own company, as well as running the<a className="highlight" href="https://thesage.co/#/" target="_blank" rel="noopener noreferrer"> Sage Co</a>, a web design agency I started over
  the summer of 2018 to exercise my design and management skills.</p>,
]

const socials: {[social: string] : string} = {
  "Email": "mailto:erpatryb@uwaterloo.ca?Subject=Saying Hello!",
  "Newsletter": "https://emile.substack.com",
  "Telegram": "https://t.me/blentry",
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
