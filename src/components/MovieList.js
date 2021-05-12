import React from 'react';
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
import { connect } from 'react-redux';
import{toggleFavorite} from '../actions/favoriteActions'

const MovieList = (props)=> {
    props.toggleFavorite(true)
    const {movieList}= props;

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                    movieList.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter/>
        </div>
    );
}
const mapStatetoProps=(state)=>{
return{
    movieList:state.movie.movies
}
}
const mapActionsToProps={
    toggleFavorite
}
export default connect(mapStatetoProps,mapActionsToProps)(MovieList)