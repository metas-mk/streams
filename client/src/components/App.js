import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      PageOne // BAD Don't use anchor tags in React apps
      <a href="/pagetwo">Navigate to PageTwo</a>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo // BAD Don't use anchor tags in React apps
      <a href="/">Navigate to PageOne</a>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" exact component={PageTwo} />
      </div>
    </BrowserRouter>
  );
};

export default App;
