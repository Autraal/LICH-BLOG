import { useEffect, useState } from "react"
const useFetch  = (url)=>{
    const [blogs, setBlogs] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);
  

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((res) => {
              if (!res.ok) {
                throw Error("Failed To Fetch");
              }
              return res.json();
            })
            .then(data => {
              setBlogs(data);
              setisPending(false);
              setError(null)
            })
            .catch(err =>{ setError(err.message); setisPending(false)});
        }, 1000);
      }, [url]);
    return{ blogs ,isPending, error}
}
export default useFetch;