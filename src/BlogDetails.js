import { useParams } from "react-router-dom";
import useFetch from './useFetch'
const BlogDetails = () => {
    const { id  } = useParams()
    const { blogs,error,isPending } = useFetch('http://localhost:9000/blogs/' + id)
    return ( 
        <div className="Blog-Details">
              {error && <div><h1>{ error } 🔒</h1></div>}
      {isPending && <div><h1>Loading...</h1> <p>Might Take some sec...🙈🙉🙊</p> </div>}     
       {blogs && (
        <article>
            <h2>{blogs.title}</h2>
            <p>Written by {blogs.author}</p>
            <div>
                {blogs.body}
            </div>
        </article>
       )}
        </div>
   
     );
}
 
export default BlogDetails;