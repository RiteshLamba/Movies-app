import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// sortByRatings = (e) => {
//   let className = e.target.className;
//   let sortedMovies;
//   let { movies } = this.props;
//   if (className == "fas fa-sort-up") {
//     sortedMovies = movies.sort((movieObjA, movieObjB) => {
//       return movieObjA.dailyRentalRate - movieObjB.dailyRentalRate;
//     });
//   } else {
//     sortedMovies = movies.sort((movieObjA, movieObjB) => {
//       return movieObjB.dailyRentalRate - movieObjA.dailyRentalRate;
//     });
//   }
//   this.props.setMovies(sortedMovies);
// };
