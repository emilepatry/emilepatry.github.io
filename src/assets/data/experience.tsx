import React from 'react';
import {ImageType, Image} from '../../components/image';

import hinterland_notion from '../../assets/images/experience/hinterland_notion.png';
import sage_co from '../../assets/images/experience/sage_co.png';
import girls_friday_1 from '../../assets/images/experience/girls_friday_1.png';
import allure from '../../assets/images/experience/alluresystems.png';
import one from '../../assets/images/experience/1.png';
import two from '../../assets/images/experience/2.png';
import three from '../../assets/images/experience/3.png';
import cjm from '../../assets/images/experience/cjm.png';
import persona1 from '../../assets/images/experience/persona1.png';
import persona2 from '../../assets/images/experience/persona2.png';
import persona3 from '../../assets/images/experience/persona3.png';


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
      <h1 key={2}>Getting Started</h1>,
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
      <p className="point" key={16}>Online research on popular travel forums demonstrated key trends in luxury travel.
      These included the rise in popularity of long-term bookings (people approaching travel advisors like they would a
      financial advisor), multi-generational travel (mother-daughter or father-son), and personalization (given high
      competition, every detail matters).</p>,
      <h2 key={17}>Quantitative Research</h2>,
      <p className="point" key={18}>Using metrics from surveys and Google Analytics, I was able to gather a more
      detailed understanding of the demographic interested in the services CNH Tours offers.</p>,
      <p className="point" key={19}>76.5% of users frequenting the CNH Tours website ranged in age from 18–44; the
      majority (33.5%) being 25 to
      34-year-old professionals.</p>,
      <p className="point" key={20}>42% of users accessed the CNH Tours website through a mobile device and had a
      bounce rate of 73%. Users accessing CNH Tours from a PC had a bounce rate of 44%.</p>,
      <h2 key={21}>Qualitative Research</h2>,
      <p className="point" key={22}>Done through interviews and surveys, the main goal of gathering qualitative
      information was to build empathy with the guests. I wanted to understand what they look for in a travel agency,
      and what pain points might come up in the current user journey.</p>,
      <h3 key={23}>Key Quotes</h3>,
      <p className="point" key={24}>"I usually spend over 20 hours researching and plan several months ahead because
      I'm excited. It also helps me get better deals and make sure everything is planned the way it should be!"</p>,
      <p className="point" key={25}>"I realy heavily on referrals and recommendations from friends when choosing a
      travel agency."</p>,
      <p className="point" key={26}>"Last time I used a travel agency it was great to learn from them and their
      customers' experiences. The agent was personable and kind, and I like the human touch… Oh, I also loved that
      they had been on that cruise!"</p>,
      <p className="point" key={27}>"I loved the pictures my son took. His Instagram feed was beautiful!"</p>,
      <p className="point" key={28}>"I didn't like the time it took the agent to achieve what we could have done in a
      fraction in the time. We also had to go in-person to a specific location in town to book."</p>,
      <h3 key={29}>Personas</h3>,
      Image({
        key: 30,
        caption: ["A grandparent wishing to go to her dream destination with her family.",],
        type: ImageType.FullWidth,
        src: [persona1],
        image_alt: ['Grandparent',],
      }),
      Image({
        key: 31,
        caption: ["A honeymoon couple looking for exotic places to visit.",],
        type: ImageType.FullWidth,
        src: [persona2],
        image_alt: ['Honeymoon couple',],
      }),
      Image({
        key: 32,
        caption: ["A solo traveller looking for a cruise that will cater to all his needs.",],
        type: ImageType.FullWidth,
        src: [persona3],
        image_alt: ['Solo traveller',],
      }),
      <h3 key={33}>User Journey & Impact Matrix</h3>,
      <p className="point" key={34}>Once I had developed an understanding of the users I were designing for, I built a
      user journey map visualizing pain points and steps users currently have to take.</p>,
      Image({
        key: 35,
        caption: ["User Journey Map showcasing guest pain points expectations vs. post-research reality.",],
        type: ImageType.FullWidth,
        src: [cjm],
        image_alt: ['CJM',],
      }),
      <h2 key={36}>Post-Research Key Findings</h2>,
      <p className="point" key={37}>Travellers tend to plan months in advance. Even up to a year and a half.</p>,
      <p className="point" key={38}>Travellers rely heavily on reviews from online forums and word-of-mouth
      recommendations to determine the quality of services offered.</p>,
      <p className="point" key={39}>Travellers like a human connection when working with travel agents.</p>,
    ]
  }
]
