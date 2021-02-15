import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
  const count = useSelector((state) => state);
  console.log(count);
  return <div>Home</div>;
};

const About = () => <div>About</div>;

const App = () => (
  <Router>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>

    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </Router>
);

export default App;
