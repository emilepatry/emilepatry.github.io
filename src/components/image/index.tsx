import React, { useState, useContext, MouseEvent } from 'react';
import {Link} from 'react-router-dom';
import './index.scss';


enum ImageType {
  FullWidth=1,
  ThreeInOne=2,
  Left=3,
  Right=4
}


interface ImageProp {
  key?: number;
  type: ImageType;
  src: string[];
  image_alt: string[];
  caption: string[];
  text?: string;
}

export default function Image(props: ImageProp) {
  if(props.type === ImageType.ThreeInOne){
    return (
      <div className="image three" key={props.key}>
        <figure className="image">
          <img src={props.src[0]} alt={props.image_alt[0]} />
          <figcaption>{props.caption[0]}</figcaption>
        </figure>
        <figure className="image">
          <img src={props.src[1]} alt={props.image_alt[1]} />
          <figcaption>{props.caption[1]}</figcaption>
        </figure>
        <figure className="image">
          <img src={props.src[2]} alt={props.image_alt[2]} />
          <figcaption>{props.caption[2]}</figcaption>
        </figure>
      </div>
    )
  }
  if(props.type === ImageType.Left){
    return (
      <div className="image left" key={props.key}>
        <figure>
          <img src={props.src[0]} alt={props.image_alt[0]} />
          <figcaption>{props.caption[0]}</figcaption>
        </figure>
        <div className="text">
          <p>{props.text}</p>
        </div>
      </div>
    )
  }
  if(props.type === ImageType.Right){
    return (
      <div className="image right" key={props.key}>
        <div className="text">
          <p>{props.text}</p>
        </div>
        <figure>
          <img src={props.src[0]} alt={props.image_alt[0]} />
          <figcaption>{props.caption[0]}</figcaption>
        </figure>
      </div>
    )
  }
  return (
    <figure className="image fullwidth" key={props.key}>
      <img src={props.src[0]} alt={props.image_alt[0]} />
      <figcaption>{props.caption[0]}</figcaption>
    </figure>
  )
}

export {ImageType, Image}