export interface HomeProps {
    queryResponse: any;
    debouncedSetQuery: (text: string) => void;
    query: string;
};
