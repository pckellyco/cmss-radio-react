import React, { useState, useEffect } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap'
import GenreCard from './GenreCard'

export default function GenreMenu() {

    const [genres, setGenres] = useState([
        {
            name: "Pop",
            image: "data:image/jpeg;base64,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"
        },
        {
            name: "Pop",
            image: "data:image/jpeg;base64,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"
        }
    ]);

    // useEffect(() => {
    //     fetch(url)
    //         .then(resp => resp.json())
    //         .then(genres => setGenres(genres))
    // })

    const displayGenres = () => {
        return genres.map((genre) => {
            return <GenreCard key={genre.id} genre={genre}/>
        } )
    }

    return (
        <div className="genre-menu">
            {displayGenres()}
        </div>
    )
}
