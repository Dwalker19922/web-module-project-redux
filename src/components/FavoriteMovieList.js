import React from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { deleteFavorite } from '../actions/favoriteActions'
const FavoriteMovieList = (props) => {


    const favorites = props.favorites
    const deleteHandler = (value) => (e) => {
        e.preventDefault();
    props.deleteFavorite(Number(value))

    }
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie => {
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={deleteHandler(movie.id)} className="material-icons">remove_circle</span></span>
                    </Link>
                </div>
            })
        }
    </div>);
}
const mapStateToProps = (state) => {

    return {
        favorites: state.favorites.list
    }
}
const mapActionsToProps = {
    deleteFavorite
}

export default connect(mapStateToProps, mapActionsToProps)(FavoriteMovieList)