

export default function Article ({post}) {

      
    return ( 
    
    <div className="post">
    {post.title} <span className="author">by {post.author}</span>
    <div className="smallinfo">Created:  {post.created_at} || Nr. of comments: {post.num_comments}</div>
     </div>
   )
}