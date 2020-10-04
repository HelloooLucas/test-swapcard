import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home, ArtistDetails } from "./pages";

const App: React.FC = () => {
  const artists = ([{ name: 'Lucas' }, { name: "Jan" }]);
  return (
    <BrowserRouter>
      <Route exact path='/' render={props => <Home {...props} artists={artists} />} />
      <Route path='/artists/:id' render={props => <ArtistDetails {...props} />} />
    </BrowserRouter>
  );
}

export default App;
