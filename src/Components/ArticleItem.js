import React from 'react'

export default function ArticleItem({title, url, article}) {
    console.log(url);
  return (
    <div>
        {title} {url} {article}
    </div>
  )
}
