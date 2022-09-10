import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "./Createblog";
import Data from "./Data";
import BlogDetails from "./BlogDetails";
function App() {
  return (
    <Router>
      {" "}
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateBlog />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route path="/data">
              <Data />
            </Route>
           
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
