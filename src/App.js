import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/friends">
              <Friends></Friends>
            </Route>
            <Route path="/friend/:friendId">
              <FriendDetails></FriendDetails>
            </Route>
            <Route path="/posts">
                <Posts></Posts>
            </Route>
            <Route path="/post/:postId">
                <PostDetails></PostDetails>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
