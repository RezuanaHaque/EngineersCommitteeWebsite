import React from 'react';

const CartFacultyName = (props) => {
    const { name } = props;
    return (
        <div className="border border-dark mb-3 w-75 mx-auto" style={{ color: "black" }} >
            <p>{name}</p>
        </div>
    );

};

export default CartFacultyName;