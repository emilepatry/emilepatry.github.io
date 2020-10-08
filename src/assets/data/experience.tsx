import React from 'react';
import {ImageType, Image} from '../../components/image';

import hinterland_cover from '../../assets/images/experience/hinterland_cover.gif';
import sage_co from '../../assets/images/experience/sage_co.png';
import girls_friday_1 from '../../assets/images/experience/girls_friday_1.png';
import alluremockup_1 from '../../assets/images/experience/alluremockup_1.png';
import one from '../../assets/images/experience/1.png';
import two from '../../assets/images/experience/2.png';
import three from '../../assets/images/experience/3.png';

export default [
  {
    "company_name": "Hinterland",
    "company_website": "https://www.hinterland.ai/",
    "title": "Founder, CEO",
    "timeline": "April 2020 - Present",
    "location": "Ottawa, ON",
    "points": [
      <span className="point" key={1}>Hinterland brings the boutique tour operator's value proposition to a digital platform -- designed to fine-tune every step of your guests' journey.</span>,
      Image({
        key: 2,
        type: ImageType.FullWidth,
        src: [hinterland_cover],
        image_alt: ['Hinterland Logo Cover Image'],
      }),
    ]
  },
  {
    "company_name": "Sage Co",
    "company_website": "https://thesage.co",
    "title": "Founder, Designer",
    "timeline": "July 2018 - Present",
    "location": "Waterloo, ON",
    "points": [
      <span className="point" key={1}>	Over the Summer of 2020, <a className="highlight" href="https://arora-aditya.com" target="_blank" rel="noopener noreferrer">Aditya Arora</a> and I doubled down on Sage Co,
      the design agency we started in 2018, as an attempt to support SMBs throughout North America and Europe
      to transition their stores to digital platforms.</span>,
      <h2 key={2}>Getting Started</h2>,
      <p className="point" key={3}>At the beginning of the COVID-19 pandemic, I had the misfortune to lose my
      projected summer internship, like many other students. Despite this, I pushed myself to do something
      productive with my summer and learn as much as possible.</p>,
      <p className="point" key={4}>	Having completed a successful internship with the Allure Systems team as
      their sole product designer, I was inspired to practice my client relations and management skills.<p>
    ]
  },
  
]
