import React, { useState } from 'react';

const FilterOtions = ({departments, filterData}) => {
    const [division, setDivision] = useState("")
    const handleOnChange = (event) => {
        setDivision(event.target.value)
    }
    return (
        <div>
            <input type="text" value={division} onChange={ handleOnChange }/>
            <button onClick={()=> filterData(division)}>Search</button>
        </div>
    );
}

export default FilterOtions;
