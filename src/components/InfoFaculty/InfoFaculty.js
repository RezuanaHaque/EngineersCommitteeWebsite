import React from 'react';

const InfoFaculty = (props) => {
    const { name, picture, email, salary, company, address } = props.infofaculty;

    return (
        // card details for each faculty
        <div className="col-lg-4">
            <div className="card m-4 border-3 shadow-lg bg-body rounded" >
                <img src={picture} width="298px" height="326px" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Company:</b> {company}</li>
                    <li className="list-group-item"><b>Address:</b><small> {address}</small></li>
                    <li className="list-group-item"><b>Salary:</b>  ${salary}</li>
                    <li className="list-group-item"><b>Email: </b><small>{email}</small> </li>
                    <li className="list-group-item text-center fs-5 "><i className="fab fa-linkedin"></i> <i className="fab fa-facebook-square"></i> </li>
                </ul>
                {/* event handler for button  */}
                <button onClick={() => props.handleBtn(salary, name)} className="btn btn-dark"><i className="fas fa-user"></i>  ADD</button>
            </div>
        </div>
    );
};

export default InfoFaculty;