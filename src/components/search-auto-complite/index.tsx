import { useEffect, useState } from "react";
import Suggestions from "./suggestions";
import './style.css';
export default function SearchAutoComplite() {
    const [users, setUsers] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchParam, setSearchParam] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [suggestionSelected, setSuggestionSelected] = useState('');
    
    function handleChange(event ) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if(query.length > 1){
            const filteredData = users && users.length
            ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
            : []
            setFilteredUsers(filteredData);
            setShowDropdown(true);
        }else{
            setShowDropdown(false);
        }
    }

    async function fetchListOfUsers() {
        try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        console.log(data.users);
        if(data && data.users && data.users.length){
            setUsers(
                data.users.map((userItem) => userItem.firstName)
            );
        }
        } catch (error) {
            console.log('error', error);
        }
    }

    useEffect(() => {
        fetchListOfUsers();
    }, []);

    function handleSuggestionSelected(event) {
        const selectedSuggestion = event.target.textContent; // Obtiene el texto de la sugerencia seleccionada
        setSuggestionSelected(selectedSuggestion);
        console.log('suggestionSelected', suggestionSelected);
        setShowDropdown(false);
    }

    console.log('users', users, searchParam, filteredUsers);
    return (
        <div className="wrapper-search-auto-complite">
            <div className="container-input">
                <input 
                    type="text" 
                    onChange={handleChange}
                    value={searchParam}
                />
            </div>
        
            {
                showDropdown && filteredUsers && filteredUsers.length > 0
                
                ? <Suggestions suggestion={filteredUsers} handleClick={handleSuggestionSelected}/>
                : null
            }

            {
                suggestionSelected && suggestionSelected.length > 0 ?
                <div>
                    <h1>{suggestionSelected}</h1>
                </div>
                : null
            }
        </div>
    );  
}