import React, { useState, useEffect } from 'react'
import { getArticle } from './services/ksf'
import './App.css'
import Element from './components/Element'
import Image from './components/Image'

const App = () => {
  const [article, setArticle] = useState('')

  useEffect(() => {
    getArticle('a6282b95-e620-4040-87d1-731fed85a7d6')
      .then(response => {
        console.log(response.data)
        const data = {
          authors: response.data.authors,
          body: response.data.body,
          listImage: response.data.listImage,
          mainImage: response.data.mainImage,
          paper: response.data.paper,
          preamble: response.data.preamble,
          tags: response.data.tags,
          title: response.data.title,
          updateTime: response.data.updateTime,
          publishingTime: response.data.publishingTime,
        }
        setArticle(data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  const dateFixer = dateStr => {
    const temp = new Date(dateStr)
    const newStr = new Intl.DateTimeFormat('default', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(temp)
    return newStr
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center'
  }

  const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
  }

  const h1Style = {
    backgroundColor: '#f07e26',
    fontFamily: 'Duplex Serfif Web, Roboto',
    width: '80%',
    position: 'fixed',
    margin: 0,
  }

  const paraStyle = {
    color: '#f07e26',
    fontWeight: 'bold',
    margin: 0,
  }

  const h2Style = {
    margin: '40px 0px 5px 0px',
    fontFamily: 'Duplex Serfif Web, Roboto',
    fontSize: '2.75rem'
  }

  const authorStyle = {
    textAlign: 'right',
    color: '#f07e26',
    margin: 0,
  }

  const barStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  }

  const ingressStyle = {
    fontSize: '1.25rem',
    lineHeight: '1.2',
    fontFamily: 'Roboto',
  }

  console.log(article)

  return (

    <div className="App" style={containerStyle}>
      {article &&
        <div style={mainContainerStyle}>
          <div>
            <h1 style={h1Style}>{article.paper.toUpperCase()}</h1>
            <h2 style={h2Style}>{article.title}</h2>
            <div style={barStyle}>
              <p style={paraStyle}>{`#${article.tags}`}</p>
              <p style={authorStyle}>{article.authors[0].byline} <strong>/</strong> {dateFixer(article.publishingTime)} <strong>/</strong> Uppdaterad: {dateFixer(article.updateTime)}</p>
            </div>
            <Image item={article.mainImage} />
            <p style={ingressStyle}>{article.preamble}</p>
          </div>
          <div>
            {article.body &&
              article.body.map((item, idx) => <Element key={idx} item={item} />)
            }
          </div>
        </div>
      }
    </div>
  );
}

export default App;
