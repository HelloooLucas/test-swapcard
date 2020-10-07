import React from 'react';

interface NoResultProps {
    data: any[];
};

const NoResult:React.FC<NoResultProps> = ({ data }) => <p>{!data.length ? 'No results :o' : ''}</p>;

export default NoResult;
