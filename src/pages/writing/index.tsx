import React, { useState, useEffect } from 'react';
import './index.scss';

export default function Writing() {
  const [data, setData] = useState([<></>])
  const [loading, setLoading] = useState(true);
  const [sent, setSent] = useState(false);
  function getBlog() {
    var xhttp = new XMLHttpRequest();
    if ("withCredentials" in xhttp) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://emile.substack.com/feed", true);
    } else {
      // CORS not supported.
    }
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        generateBlogListings(this.responseText);
      }
    };
    xhttp.send();
    setSent(true);
  }
  
  useEffect(() => {
    if(!sent){
      getBlog();
    }
  }, [sent]);
  
  function formatPostDate(date: string) {
    if (typeof Date.prototype.toLocaleDateString !== 'function') {
      return date
    }

    return new Date(date).toLocaleDateString('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }
  
  function removeCDATA(text: string | null){
    if(text){
      console.log(text)
      return text.replace("&#8217;","'").replace("&#8212;", "-").replace(new RegExp('&#.{4,6};', 'g'), '').replace("<![CDATA[", "").replace("]]>", "");
    }
    return ""
  }
  function generateBlogListings(responseText: string){
    const parser = new DOMParser();
    const xml = parser.parseFromString(responseText, 'text/xml');

    let items = Array.from(xml.getElementsByTagName('item')).map((item, i) => {
      return (
        <a className="post" key={i} href={removeCDATA(item.getElementsByTagName('link')[0].textContent)} target="_blank" rel="noopener noreferrer" >
          <div>
            <p className="primary">{removeCDATA(item.getElementsByTagName('title')[0].textContent)}</p>
            <p className="date">{formatPostDate(removeCDATA(item.getElementsByTagName('pubDate')[0].textContent))}</p>
            <p className="secondary">{removeCDATA(item.getElementsByTagName('description')[0].textContent)}</p>
          </div>
        </a>
      )
    });
    setData(items)
    setLoading(false)
  }

  
  return (
    <div className="writing">
      {loading ?  <p>Loading...</p> : data }
    </div>
  )
}