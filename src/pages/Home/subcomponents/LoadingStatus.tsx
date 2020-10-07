import React from 'react';

import { Loading, Error } from '../../../components';

interface LoadingStatusProps {
    queryResponse: any;
    query: string;
};

const LoadingStatus:React.FC<LoadingStatusProps> = ({ queryResponse, query }) => {
    const { loading, error, called } = queryResponse;

    return (
        <>
            {!called ? <p>Please make a search</p> : ''}
            {called && !query ? <p>Please make a search</p> : ''}
            {called && query ? <Loading loading={loading} /> : ''}
            {called && !loading && query ? <Error error={!!error} /> : ''}
        </>
    )

};

export default LoadingStatus;
