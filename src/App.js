import React, { useState, useEffect } from 'react'
import { getArticle } from './services/ksf'
import './App.css'
import Element from './components/Element'

const App = () => {
  const [article, setArticle] = useState('')

  useEffect(() => {
    getArticle('a6282b95-e620-4040-87d1-731fed85a7d6')
      .then(response => {
        console.log(response.data.authors)
        const data = { authors: response.data.authors,
          body: response.data.body,
          listImage: response.data.listImage,
          mainImage: response.data.mainImage,
          paper: response.data.paper,
          preamble: response.data.preamble,
          tags: response.data.tags,
          title: response.data.title,
          updateTime: response.data.updateTime,
        }
        setArticle(data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])
  
    
  if(article.body){
  console.log(article.body)
  }
  return (
    <div className="App">
      <h1>{article.paper}</h1>
      <h2>{article.title}</h2>
      <h4>{article.preamble}</h4>
      <div>
      {article.body && 
        article.body.map((item, idx)  => <Element key={idx} item={item} />)
      }
      </div>
    </div>
  );
}

export default App;
