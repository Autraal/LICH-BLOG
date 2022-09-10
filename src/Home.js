import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
const { error,isPending,blogs } = useFetch("http://localhost:9000/blogs")
  return (
    <div className="home">
      {error && <div><h1>{ error } 🔒</h1></div>}
      {isPending && <div><h1>Loading...</h1> <p>Might Take some sec...🙈🙉🙊</p> </div>}     
       {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
