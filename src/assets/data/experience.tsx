import React from 'react';
import {ImageType, Image} from '../../components/image';

import hinterland_notion from '../../assets/images/experience/hinterland_notion.png';
import sage_co from '../../assets/images/experience/sage_co.png';
import girls_friday_1 from '../../assets/images/experience/girls_friday_1.png';
import allure from '../../assets/images/experience/alluresystems.png';
import one from '../../assets/images/experience/1.png';
import two from '../../assets/images/experience/2.png';
import three from '../../assets/images/experience/3.png';
import cjm from '.../../assets/images/experience/cjm.png';

export default [
  {
    "company_name": "Hinterland",
    "company_website": "https://www.hinterland.ai/",
    "title": "Founder",
    "timeline": "April 2020 - Present",
    "location": "Ottawa, ON",
    "points": [
      <span className="point" key={1}>Hinterland allows tour operators to scale while preserving the personalized service that makes them successful.</span>,
      Image({
        key: 9,
        caption: ["Notion organization is everything...",],
        type: ImageType.FullWidth,
        src: [hinterland_notion],
        image_alt: ['Hinterland Notion'],
      }),
      <p className="point" key={2}>Currently building an MVP, conducting user research, and formulating business plan.</p>,
    ]
  },
  {
    "company_name": "Sage Co",
    "company_website": "https://thesage.co",
    "title": "Founder, Designer",
    "timeline": "July 2018 - Present",
    "location": "Waterloo, ON",
    "points": [
      Image({
        key: 1,
        caption: ["",],
        type: ImageType.FullWidth,
        src: [sage_co],
        image_alt: ['Sage Co Logo'],
      }),
      <span className="point" key={2}>	Over the Summer of 2020, <a className="highlight" href="https://arora-aditya.com" target="_blank" rel="noopener noreferrer">Aditya Arora</a> and I doubled down on Sage Co,
      the design agency we started in 2018. Our goal was to support SMBs throughout North America and Europe
      to transition their stores to digital platforms.</span>,
      <h2 key={2}>Getting Started</h2>,
      <p className="point" key={3}>At the beginning of the COVID-19 pandemic, I had the misfortune to lose my
      projected summer internship, like many other students. Despite this, I pushed myself to do something
      productive with my summer and learn as much as possible.</p>,
      <p className="point" key={4}>	Having completed a successful internship with the Allure Systems team as
      their sole product designer, I was inspired to practice my client relations and management skills.</p>,
    ]
  },
  {
    "company_name": "Allure Systems",
    "company_website": "https://www.alluresystems.com/",
    "title": "Sole Product Designer",
    "timeline": "March - December 2019",
    "location": "Paris, FR",
    "points": [
      <span className="point" key={1}>In 2019 I had the opportunity to work in a fashion-tech startup as the only Product Designer. Here are a couple of things that I learned on the way, and a glimpse of what I got to work on.</span>,
      Image({
        key: 16,
        caption: ["The end result.",],
        type: ImageType.FullWidth,
        src: [allure],
        image_alt: ['Allure Solution Mock',],
      }),
    ]
  },
  {
    "company_name": "CNH Tours",
    "company_website": "https://www.cnhtours.com/",
    "title": "Web Design Case Study",
    "timeline": "March - December 2019",
    "location": "Paris, FR",
    "points": [
      <span className="point" key={1}>CNH Tours is a rapidly growing travel agency focused on the Galapagos Archipelago,
      working with over four hundred travellers a year.</span>,
      <h2 key={2}>What is CNH Tours?</h2>,
      <p className="point" key={3}>"Few Galapagos cruise agencies know the Galapagos better than we do. We help you find
      the ship that best meets your needs based on our knowledge of the offered cruises." -- Heather Blenkiron, CEO of
      CNH Tours</p>,
      <p className="point" key={4}>Booking a cruise to the Galapagos is overwhelming. CNH Tours travel agents guide
      their travellers in finding their perfect ship, itinerary, dates, and trip extensions. They then facilitate the
      booking process and remain at the guests' disposal throughout their trip.</p>,
      <p className="point" key={5}>The demographic they work with are wealthy, highly educated professionals from
      first-world countries. More specifically, they range in ages from millennials to baby boomers.</p>,
      <h3 key={6}>The Challenge</h3>,
      <p className="point" key={7}>CNH Tours' online presence does not reflect the quality of services offered. How
      might we improve their services and look in a scalable manner?</p>,
      <h3 key={8}>The Proposed Solution</h3>,
      <p className="point" key={9}>A complete redesign of the information architecture, user flow, and aesthetics
      of the CNH Tours website. Integration of CNH side services (Galapagos Advisor, Galapagos for Families, and
        Epicurean Galapagos).</p>,
      <h3 key={10}>My Role</h3>,
      <p className="point" key={11}>As this was an independent side project, I acted as a player with many hats.
      This included being a project manager, UI Designer, User Researcher. Ultimately, I acted as the sole UX Designer
      for this project.</p>,
      <p className="point" key={12}>Nonetheless, I could not have completed this without the help and support of fellow
      students and mentors. Thank you to University of Waterloo students Kenneth Nambgung and Shannon Henderson, and
      professors Karin Schmidlin, Tabatha Dominguez, and Hira Javed for guiding me through various Business, UX, and
      Customer Experience design courses.</p>,
      <h1 key={13}>Research</h1>,
      <p className="point" key={14}>To gain a deeper understanding of the vast scope of guests CNH Tours caters to, I
      divided my research into three sections: Influences & Trends, Quantitative Research, and Qualitative Research.</p>,
      <h2 key={15}>Influences, Inspiration, and Future Trends</h2>,
      Image({
        key: 18,
        caption: ["The end result.",],
        type: ImageType.FullWidth,
        src: [allure],
        image_alt: ['Allure Solution Mock',],
      }),
    ]
  }
]
