import React from 'react';

interface LoadingProps {
    loading: boolean;
};

const Loading:React.FC<LoadingProps> = ({ loading }) => <p>{loading ? 'Loading...' : ''}</p>;

export default Loading;
