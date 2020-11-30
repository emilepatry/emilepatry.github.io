import React from 'react';
import {ImageType, Image} from '../../components/image';

import hinterland_notion from '../../assets/images/experience/hinterland_notion.png';
import sage_co from '../../assets/images/experience/sage_co.png';
import girls_friday_1 from '../../assets/images/experience/girls_friday_1.png';
import allure from '../../assets/images/experience/alluresystems.png';
import one from '../../assets/images/experience/1.png';
import two from '../../assets/images/experience/2.png';
import three from '../../assets/images/experience/3.png';

export default [
  {
    "company_name": "Hinterland",
    "company_website": "https://www.hinterland.ai/",
    "title": "Founder",
    "timeline": "April 2020 - Present",
    "location": "Ottawa, ON",
    "points": [
      <span className="point" key={1}>Hinterland allows tour operators to scale while preserving the personalized service that makes them successful.</span>,
      <p className="point" key={2}>Currently building an MVP, conducting user research, and receiving mentorship from <a className="highlight" href="https://velocityincubator.com" target="_blank" rel="noopener noreferrer">Velocity</a> at the University of Waterloo.</p>,
      Image({
        key: 9,
        caption: ["Notion organization is everything...",],
        type: ImageType.FullWidth,
        src: [hinterland_notion],
        image_alt: ['Hinterland Notion'],
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
      the design agency we started in 2018. Our goal was to support SMBs throughout North America and Europe
      to transition their stores to digital platforms.</span>,
      <h2 key={2}>Getting Started</h2>,
      <p className="point" key={3}>At the beginning of the COVID-19 pandemic, I had the misfortune to lose my
      projected summer internship, like many other students. Despite this, I pushed myself to do something
      productive with my summer and learn as much as possible.</p>,
      <p className="point" key={4}>	Having completed a successful internship with the Allure Systems team as
      their sole product designer, I was inspired to practice my client relations and management skills.</p>,
      Image({
        key: 5,
        caption: ["",],
        type: ImageType.FullWidth,
        src: [sage_co],
        image_alt: ['Sage Co Website Mock'],
      }),
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
    "title": "UX Case Study",
    "timeline": "March - December 2019",
    "location": "Paris, FR",
    "points": [
      <p className="point" key={1}>Allure Systems leverages machine learning to automate the traditional photoshoot. Their solutions primarily  e-commerce stylists a wide range of tools to choose from, easing their workflow, maximizing productivity, and facilitating inclusivity in the fashion industry.</p>,
      <p className="point" key={2}>In March 2019, I had the opportunity to join Allure Systems as their first product designer. As an intern, I had to familiarize myself with their service through extensive interviews with all of the company's stakeholders and early users and collect data from their progress.</p>,
      Image({
        key: 3,
        type: ImageType.FullWidth,
        src: [girls_friday_1],
        image_alt: ['give it a relevant alt'],
        caption: ['None of these models have ever worn these clothes.',],
      }),
      <p className="point" key={4}>I had the responsibility to create and define the flow and UX what would be Allure System's v1.0 product. During my time in Paris, the three biggest lessons I learned were how to product manage myself, how to determine task prioritization, and how to efficiently communicate with developers.</p>,
      <h2 key={5}>The Solution</h2>,
      <p className="point" key={6}>The Allure Systems solution incorporates everything a stylist needs in a clean and user-friendly interface. Starting from what was an unintuitive product built by a team of developers, the solution offers the end-user a full scope of customizable options. It also enhances the B2C relationship through in-app recommendations.</p>,
      Image({
        key: 7,
        type: ImageType.FullWidth,
        src: [alluremockup_1],
        image_alt: ['give it a relevant alt'],
        caption: ['Shooting App  interface.',],
      }),
      Image({
        key: 8,
        type: ImageType.ThreeInOne,
        src: [one, two, three],
        image_alt: ['give it a relevant alt', 'give it a relevant alt', 'give it a relevant alt'],
        caption: ['', '', 'Technicians adding a new series of mannequins.',],
      }),
      <h3 key={9}>Highlights</h3>,
      Image({
        key: 10,
        type: ImageType.Left,
        src: [alluremockup_1],
        image_alt: ['give it a relevant alt',],
        caption: ['',],
        text: "Indulging in the Parisian lifestyle for just under a year was lovely. I'll be missing daily viennoiseries the most..."
      }),
      Image({
        key: 11,
        type: ImageType.Right,
        src: [alluremockup_1],
        image_alt: ['give it a relevant alt',],
        caption: ['',],
        text: "Indulging in the Parisian lifestyle for just under a year was lovely. I'll be missing daily viennoiseries the most..."
      }),
    ]
  }
]
