import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Main = props => {
    const[pets,setPets] = useState([]);

    useEffect (() => {
        Axios.get('http://localhost:8000/api/pets')
            .then(res => setPets(res.data.results))
            .catch(err => console.log(err));
    }, [])

    return(
        <div>
            <h2 className ="bg-info  text-dark rounded col-6 mx-auto">These Pets Are Looking For A Good Home!</h2>
            <table className="table table-info col-7 mx-auto">
                <thread>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thread>
                <tbody>

                    {
                        pets.map((p,i)=>{
                            return <tr key={i}>
                                        <td>{p.name}</td>
                                        <td>{p.type}</td>
                                        <td>
                                            <Link to={`/pet/${p._id}`} className="btn btn-warning">Details</Link>
                                            <Link to={`/edit/${p._id}`} className="btn btn-info"> Edit </Link>
                                        </td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Main;