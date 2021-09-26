import React from 'react';
import CartFacultyName from '../CartFacultyName/CartFacultyName';


const AddFaculty = (props) => {
    // console.log(props)
    const { salary, name } = props;
    let totalSalary = 0;
    // add all the salary 
    for (const addsalary of salary) {
        totalSalary = totalSalary + addsalary;
    }
    return (
        <div className="border border-2 text-center " style={{ backgroundColor: "lightgray" }}>
            <p><b>Total Person Clicked: </b>{props.name.length}</p>
            <p><b>Total Salary:  $</b>{totalSalary}</p>
            <p><b>Persons Added:</b></p>
            {
                // created a new component for printing name 
                name.map(singleName => <CartFacultyName name={singleName} key={singleName} names={name} ></CartFacultyName>)

            }
        </div>
    );
};

export default AddFaculty;