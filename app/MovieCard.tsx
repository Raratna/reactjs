"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardImg, CardText, CardTitle, Button } from 'react-bootstrap';

const MovieCard = () => {
    const [movieData, setMovieData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/movie');
                setMovieData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch movie data');
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:5000/api/movies/' + id);
            setMovieData((prevData) => ({
                ...prevData,
                data: prevData.data.filter((movie) => movie.id !== id)
            }));
        } catch (error) {
            console.error('Error deleting data:', error);
            setError('Failed to delete movie');
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            {movieData && (
                <div className="row">
                    {movieData.data.map((movie, index) => (
                        <Card key={index} className="col-md-4 p-2 px-2 shadow-xl object-cover">
                            <CardImg variant="top" src={movie.foto} alt="Card Image cap" />
                            <CardTitle className="font-bold text-xl">{movie.judul}</CardTitle>
                            <CardText>Rating {movie.rating}</CardText>
                            <Button variant="secondary" onClick={() => handleDelete(movie.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </Button>
                        </Card>
                    ))}
                </div>
            )}
        </>
    );
};

export default MovieCard;
