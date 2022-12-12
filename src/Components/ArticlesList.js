import React from 'react'
import ArticleItem from './ArticleItem'
import data from "../data.json"


export default function ArticlesList() {

  return (
    <div>
        {data.hits.map((element) => {
            return 
            <ArticleItem 
            title= {data.hits.title}
            url= {data.hits.url}
            article= {element}

            />
            
        })}
    </div>
  )
}
