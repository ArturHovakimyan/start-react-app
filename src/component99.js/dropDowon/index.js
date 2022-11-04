import React from 'react';

const DropDowon = ({records}) => {
    return (
        <select>
            {records.map((item) => (
        <option key={item.id}>
          hello
        </option>
      ))}
        </select>
    );
}

export default DropDowon;
