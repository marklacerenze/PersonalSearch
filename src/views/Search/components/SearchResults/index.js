import React from 'react'
import SearchResultsItems from './SearchResultsItems';

export default function index ({results, isSearching}) {
    return (
        <div style={{width: "100%", padding: "0rem, 2rem, 0rem, 2rem"}}>
            {!results?.length && isSearching && <p>No existen resultados.</p>}
            {results?.map((value) => {
                return(
                    <SearchResultsItems/>
                );
            })}      
        </div>
    );
};
