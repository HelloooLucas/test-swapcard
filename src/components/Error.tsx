import React from 'react';

interface ErrorProps {
    error: boolean;
};

const Error:React.FC<ErrorProps> = ({ error }) => <p>{error ? 'Error :(': ''}</p>;

export default Error;
