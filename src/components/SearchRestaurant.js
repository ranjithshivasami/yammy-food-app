import { useState } from "react";
const SearchRestaurant = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const onChangeSearchHandler = (event) => {        
        setSearchValue(event.target.value);
    }

    const onClickSearchHandler = () =>{
        props.onSearch(searchValue);
    }
    const onClickClearHandler = () =>{
        props.onClear(true);
    }

    return (
        <div className="container search__container">
            <input type="text"
             placeholder="Search" 
             value={searchValue}
             onChange={onChangeSearchHandler}
             />
            <button className="btn-search" onClick={onClickSearchHandler}> Search</button>
            <button className="btn-search" onClick={onClickClearHandler}> Clear Search</button>
        </div>
    );
}

export default SearchRestaurant;