import React, { Component } from "react";

class Movies extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    let resp = await fetch("https://react-backend101.herokuapp.com/movies");
    let jsonMovies = await resp.json();
    this.setState({
      movies: jsonMovies.movies,
    });
  }

  deleteEntry(movieobj) {
    let moviesArr = this.state.Movies;

    let filtereMovies = moviesArr.filter((movieObj) => {
      return movieObj != movieobj;
    });

    this.setState({
      Movies: filtereMovies,
    });
  }

  sortByStock = (e) => {
    let className = e.target.className.trim();
    console.log(" in stock function");
    let sortedMovies;
    let movies = this.state.movies;

    if (className == "fas fa-sort-up") {
      sortedMovies = movies.sort((movieObjA, movieObjB) => {
        return movieObjA.numberInStock - movieObjB.numberInStock;
      });
    } else {
      sortedMovies = movies.sort((movieObjA, movieObjB) => {
        return movieObjB.numberInStock - movieObjA.numberInStock;
      });
    }

    this.setState({
      movies: sortedMovies,
    });
  };

  sortByRatings = (e) => {
    let className = e.target.className;
    let sortedMovies;
    let movies = this.state.movies;
    if (className == "fas fa-sort-up") {
      sortedMovies = movies.sort((movieObjA, movieObjB) => {
        return movieObjA.dailyRentalRate - movieObjB.dailyRentalRate;
      });
    } else {
      sortedMovies = movies.sort((movieObjA, movieObjB) => {
        return movieObjB.dailyRentalRate - movieObjA.dailyRentalRate;
      });
    }

    this.setState({
      movies: sortedMovies,
    });
  };

  render() {
    console.log(this.state.movies);
    let filterArr = this.state.movies;
    return (
      <div>
        {" "}
        hello
        <p className="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          neque maxime, corrupti assumenda deleniti eum quaerat fugiat pariatur
          iste inventore.
        </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">
                <i className="fas fa-sort-up" onClick={this.sortByStock}></i>
                Stock
                <i className="fas fa-sort-down" onClick={this.sortByStock}></i>
              </th>
              <th scope="col">
                <i className="fas fa-sort-up" onClick={this.sortByRatings}></i>
                Rate
                <i
                  className="fas fa-sort-down"
                  onClick={this.sortByRatings}
                ></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {filterArr.map((movieObj) => {
              return (
                <tr scope="row" key={movieObj._id}>
                  <td> </td>

                  <td>{movieObj.title} </td>
                  <td>{movieObj.genre.name}</td>
                  <td>{movieObj.numberInStock}</td>
                  <td>{movieObj.dailyRentalRate}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        this.deleteEntry(movieObj);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
