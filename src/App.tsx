import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home, ArtistDetails } from "./pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/artists/:id' component={ArtistDetails} />
    </BrowserRouter>
  );
}

export default App;
