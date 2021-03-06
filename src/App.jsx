import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Main from './components/Main'
import Footer from './components/Footer/Footer'
import PostView from "./components/View/PostView";

function App() {

  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('/data.json');
      const result = await response.json();
      setData(result);
      setIsLoaded(true);
    }
    getData();
  }, [])

  if(isLoaded) {

    return (
      <>
        <GlobalStyle />
        <BrowserRouter>
          <div>
            <Header />
            <Banner 
              posts={data.posts}
              blog={data.blog}
              />
              <Switch>
                <Route exact path={'/'} render={() => 
                  <Main 
                  posts={data.posts}
                  users={data.users} 
                  />
                } />
                <Route exact path='/view/:id' render={() => 
                  <PostView 
                  posts={data.posts}
                />
                } />
              </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </>
      )
  }
}

export default App;
