import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const ArtistDetails:React.FC<RouteComponentProps> = props => {
    return (
        <>
            <button onClick={props.history.goBack}>Back to list</button>
            <div>Artist Details</div>
        </>
    );
};

export default ArtistDetails;
