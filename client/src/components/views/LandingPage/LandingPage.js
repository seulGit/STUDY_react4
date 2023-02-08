import React, { useEffect } from 'react';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config';
import { useState } from 'react';
import MainImage from './Sections/MainImage';
import GridCards from '../commons/GridCards';
import { Row } from 'antd';

function LandingPage() {

    const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

        fetch(endpoint)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            setMovies([...response.results])
            setMainMovieImage(response.results[0])
        })

    }, [])

    return (
        <div style={{ width: '100%', margin: '0' }}>

            {/* Main Image */}
            {MainMovieImage &&
                <MainImage 
                image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
                title={MainMovieImage.original_title}
                text={MainMovieImage.overview} 
                />
            }

            <div style={{ width: '85%', margin: '1rem auto' }}>
                <h2>Movies by latest</h2>
                <hr />

                {/* Movie Grid Cards */}

                <Row>

                {Movies && Movies.map((movie, index) => (
                    <React.Fragment key={index}>
                        <GridCards
                            image={movie.poster_path ?
                            `${IMAGE_BASE_URL}w500${movie.poster_path}` : null} 
                             movieId={movie.id}
                             movieName={movie.original_title}
                        />
                    </React.Fragment>
                ))}

                </Row>

            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button> Load More </button>
            </div>
            
        </div>
    )
}

export default LandingPage
