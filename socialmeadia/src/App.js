import {Link,Routes ,Route} from 'react-router-dom';
import About from "./About";
import Header from "./Header";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Footer from "./Footer";
import Home from "./Home";
import Missing from "./Missing";
import Post from "./Post";
import PostLayout from './PostLayout';
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      tittle: 'My First Post',
      datetime: "July 01, 2022 11:17:35 AM",
      body:"Made a Video About Tesla Q1 results"
    },
    {
      id: 2,
      tittle: 'My Second Post',
      datetime: "July 01, 2022 11:17:35 AM",
      body:"I attended a Defi blockchain event"
    },
    {
      id: 3,
      tittle: 'My Third Post',
      datetime: "July 01, 2022 11:17:35 AM",
      body:"Web3 globel summit next week"
    },
    {
      id: 4,
      tittle: 'My Fourth Post',
      datetime: "July 01, 2022 11:17:35 AM",
      body:"ETH will outperform BTC"
    }
  ]);
  const [search, setSearch] = useState('');
  const [searchResults, serSearchResults] = useState([
    
  ])
  return (
    <div className="App">
    <Header  tittle="Akshai Social Media"/>
      <Nav
        search={search}
        setSearch={setSearch}
      />
    <Home />
    <NewPost/>
    <PostPage/>
    <About/>
    <Missing/>
    <Footer/>
    </div>
  );
}

export default App;
