import React from 'react';
import './index.scss';

import experience from '../../assets/data/experience';

interface Job {
  company_logo: string;
  company_name: string;
  company_website: string;
  title: string;
  timeline: string;
  location: string;
  points: string[];
}


export default function Work() {
  return (
    <div className="work">
      <div className="jobs">
      {experience.map((job, i) => {
        return (
          <div className="job" key={i} id={job.company_name}>
            <h1 className="primary">
              <a className="highlight" href={job.company_website} target="blank" rel="noopener noreferrer">
                {job.company_name.replace(/\s/g, '\xA0')}
              </a> |
              {' '}{job.title}
            </h1>
            <p className="secondary">{job.timeline}</p>
            <div className="points">
              {job.points.map((point, j) => {
                return point
              })}
            </div>
            {(i === experience.length - 1) ? <></>: <hr></hr>}
          </div>
        );
      })}

      </div>
    </div>
  )
}
