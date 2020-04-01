import React from 'react';
import './index.scss';

import me from '../../assets/images/me.jpg';


const about_me = [
  <p>I’m a product designer based in Ottawa, Canada. Currently, I run <a className="highlight" href="https://thesage.co" target="_blank" rel="noopener noreferrer">Sage Co</a>, a web design agency I started over the summer of 2018 to exercise my design and management skills. Presently, our goal is to help SMBs develop their digital presence during the COVID-19 crisis.</p>,
  <p>September through April, I study Global Business & Digital Arts at the University of Waterloo, expecting to graduate in 2022.</p>,
  <p>I’m on the lookout for new opportunities, notably internships. If you would like to talk, or ask questions about just about anything, don’t hesitate to reach out!</p>
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