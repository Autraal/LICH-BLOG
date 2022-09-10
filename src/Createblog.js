import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
        const [title, setTitle] = useState('');
        const [body, setBody] = useState('');
        const [author, setAuthor] = useState('Olumide');
        const [isAdding,setisAdding] = useState(false);
  const history = useHistory()

        const handleSubmit = (e) => {
          setisAdding(true)
          e.preventDefault();
          const blog = { title, body, author };
          fetch('http://localhost:9000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
          }).then(() => {
          setisAdding(false)
          history.push('/')
          })
        }

    return (  
        <div className="create">
<h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          placeholder="Blog Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          placeholder="Full Story"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input type="text"
        required 
        placeholder="Author?"
          onChange={(e) => setAuthor(e.target.value)}
        />
     
        {!isAdding && <button>Add Blog</button>}
        {isAdding && <button>Adding Blog....</button>}
      </form>
        </div>
    );
  


}
 
export default CreateBlog;
// FOR SELECTING HARD CODED AUTHORS
  // eslint-disable-next-line
       {/* <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select> */}