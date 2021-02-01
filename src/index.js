import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {POPULAR_ACTORS_DATA} from './mocks/popular_actors_data';
import {getCast} from './utils';

// not convinced that this is the best way to source non-movie actors
// so not bothering to replace it with an api call
const getPopularActors = () => getCast(POPULAR_ACTORS_DATA.results);


ReactDOM.render(
  <React.StrictMode>
    <App defaultActors={getPopularActors()}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
