import React from 'react';
import { NavLink } from 'react-router-dom';

interface HomeProps {
    artists: any[];
};

const Home:React.FC<HomeProps> = ({ artists }) => {
    return (
        <>
            <h1>HOME</h1>
            <ul>
                {artists.map(artist => (
                    <>
                        <h3>{artist.name}</h3>
                        <NavLink to={`/artists/${artist.name}`}>Go to artist</NavLink>
                    </>
                ))}
            </ul>
        </>
    );
};

export default Home;
