import React, { useEffect, useState } from 'react';
import AddFaculty from '../AddFaculty/AddFaculty';
import InfoFaculty from '../InfoFaculty/InfoFaculty';
// import "./Faculties.css"
const Faculties = () => {
    const [faculties, setFaculties] = useState([]);
    const [addedFaculty, setAddedFaculty] = useState([]);
    useEffect(() => {
        fetch('./faculty.JSON')
            .then(res => res.json())
            .then(data => setFaculties(data));
    }, [])
    let total = 0;
    const handleBtn = (salary) => {
        // // addedFaculty.push(salary);
        // total += salary;
        // // console.log(total);
        const newlist = [...addedFaculty, salary];
        setAddedFaculty(newlist);
        const reducer = (faculty, newFaculty) => faculty + faculty;
        console.log(newlist.reduce(reducer));
        // console.log(newlist);

    }
    return (
        <div className="m-5 d-flex">
            <div className="faculties-section  d-flex flex-wrap w-75 ">
                {
                    faculties.map(faculty => <InfoFaculty key={faculty.address} handleBtn={handleBtn} infofaculty={faculty}></InfoFaculty>)
                }
            </div>

            <div className="faculties-container mt-4">
                {
                    <AddFaculty></AddFaculty>
                }
            </div>
        </div>
    );
};

export default Faculties;