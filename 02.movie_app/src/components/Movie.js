import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({id, title, year, summary, poster, genres}) {
	return (
	<Link to={{
		pathname: "/movie-detail",
		state: {
			id: id,
			title: title,
			year: year,
			summary: summary,
			poster: poster,
			genres: genres
		}
	}}>
		<div className="movie">
			<img src={poster} alt={title} title={title} />
			<div className="movie_data">
				<h3 className="movie_title">{title}</h3>
				<h3 className="movie_year">{year}</h3>
				<ul className="genres">
					{genres.map((genre, index) => (
						<li key={index} className="genres_genre">{genre}</li>
					))}
				</ul>
				<p className="movie_summary">{summary.slice(0, 150) + "..."}</p>
			</div>
		</div>
	</Link>);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	year: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
