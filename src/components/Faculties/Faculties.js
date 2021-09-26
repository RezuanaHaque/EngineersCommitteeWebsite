import React, { useEffect, useState } from 'react';
import AddFaculty from '../AddFaculty/AddFaculty';
import InfoFaculty from '../InfoFaculty/InfoFaculty';
// import "./Faculties.css"
const Faculties = () => {
    const [faculties, setFaculties] = useState([]);
    const [addedFacultySalary, setaddedFacultySalary] = useState([]);
    const [name, setName] = useState([]);
    useEffect(() => {
        fetch('./faculty.JSON')
            .then(res => res.json())
            .then(data => setFaculties(data));
    }, [])

    const handleBtn = (salary, nameF) => {
        const newlist = [...addedFacultySalary, salary];
        setaddedFacultySalary(newlist);
        // console.log(addedFacultySalary);
        const newNameList = [...name, nameF];
        setName(newNameList);
        // console.log(newNameList);

    }

    return (
        <div className="row">
            <div className="faculties-section col-lg-9">
                <div className="row">
                    {
                        faculties.map(faculty => <InfoFaculty key={faculty._id} handleBtn={handleBtn} infofaculty={faculty}></InfoFaculty>)
                    }
                </div>
            </div>

            <div className="faculties-container mt-4 col-lg-3">
                {
                    <AddFaculty salary={addedFacultySalary} name={name}></AddFaculty>
                }
            </div>
        </div>
    );
};

export default Faculties;