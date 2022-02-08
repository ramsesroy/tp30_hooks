import React from 'react';
import SideBar from './SideBar';

import { Route, Routes } from 'react-router-dom'
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import ContentWrapper from './ContentWrapper';
import NotFound from './NotFound';

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />   
          <Routes>
            <Route path="/" exact={true} element={<ContentWrapper />}/> 
            <Route path="/genres" element={<GenresInDb />} exact={true} />
            <Route path="/last-movie" element={<LastMovieInDb />} exact={true} />
            <Route path="/row-movie" element={<ContentRowMovies/>} exact={true} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </React.Fragment>
  );
}

export default App;
