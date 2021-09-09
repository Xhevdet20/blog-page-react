import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom';


const BlogDetails = () => {
  const history = useHistory();

  const { id } = useParams();
  const {data : blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);

  const handleClick = () => {

    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      console.log('thingy deleted');
      history.push('/');
    });


  }

  return(
    <div className="blog-details">
      {isPending && <p>Loading... </p>}
      {error && <p>{error} </p>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by : {blog.author}</p>
          <div>{blog.body} </div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;