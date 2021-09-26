import React, { useEffect, useState } from 'react';
import AddFaculty from '../AddFaculty/AddFaculty';
import InfoFaculty from '../InfoFaculty/InfoFaculty';
const Faculties = () => {
    const [faculties, setFaculties] = useState([]);
    const [addedFacultySalary, setaddedFacultySalary] = useState([]);
    // for setting the name 
    const [name, setName] = useState([]);
    // fetching data 
    useEffect(() => {
        fetch('./faculty.JSON')
            .then(res => res.json())
            .then(data => setFaculties(data));
    }, [])
    // here we are doing process for updating salary and name 
    const handleBtn = (salary, nameF) => {
        const newlist = [...addedFacultySalary, salary];
        setaddedFacultySalary(newlist);
        const newNameList = [...name, nameF];
        setName(newNameList);
    }

    return (
        <div className="row">
            <div className="col-lg-9">
                <div className="row">
                    {
                        faculties.map(faculty => <InfoFaculty key={faculty._id} handleBtn={handleBtn} infofaculty={faculty}></InfoFaculty>)
                    }
                </div>
            </div>

            <div className="mt-4 col-lg-3">
                {
                    <AddFaculty salary={addedFacultySalary} name={name}></AddFaculty>
                }
            </div>
        </div>
    );
};

export default Faculties;