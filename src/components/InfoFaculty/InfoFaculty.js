import React from 'react';

const InfoFaculty = (props) => {
    const { name, picture, email, salary, company } = props.infofaculty;
    const addedFaculty = [];
    // const total=0;

    return (
        <div>
            <div className="card m-4 border-3" style={{ width: "19rem" }}>
                <img src={picture} width="298px" height="326px" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Company:</b> {company}</li>
                    <li className="list-group-item"><b>Salary:</b>  ${salary}</li>
                    <li className="list-group-item"><b>Email: </b><small>{email}</small> </li>
                </ul>
                <button onClick={() => props.handleBtn(salary)} className="btn btn-dark">ADD</button>
            </div>
        </div>
    );
};

export default InfoFaculty;