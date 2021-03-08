import React from 'react'

const SearchResultsItems = (name, email) => {
    return ( 
        <div style={{backgroundColor: "#E8E7E7", marginTop: 5, marginBottom: 5, padding: 10, width: "100%"}}>    
                <p>{name}</p>
                <p>{email}</p>
        </div>
    );
}

export default SearchResultsItems;
