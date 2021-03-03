import {useState} from 'react';
import SearchBox from "./components/SearchBox";
import './style.css';
import data from '../../views/Search/data/users.json'

export default function Search(){
    const [isAtTop, setItAsTop] = useState(false);
    const [userData, setUserData] = useState(data);
    const [result, setResult] = useState([]);

    // Cuando aprieto buscar el buscador se va para arriba, cuando apreto cerrar el buscador vuelve al medio
    const handleCloseOpenSearch = () => {
        setItAsTop(false);
        setResult([]);
    };
    
    const handleSearchClick = (searchText) => {
        if(userData?.length){
            const searchTextMinus = searchText.toLowerCase();
            const filteredData = userData.filter((value) => {
                return (
                    value.name.toLowerCase().includes(searchTextMinus) || 
                    value.phone.toLowerCase().includes(searchTextMinus) ||
                    value.email.toLowerCase().includes(searchTextMinus) ||
                    value.username.toLowerCase().includes(searchTextMinus)
                )
            });
            setResult(filteredData);
        }
    };
    console.log(result)
    return(
        <div className= {`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox onSearch={handleSearchClick} onClose={handleCloseOpenSearch} />
        </div>
    )
}