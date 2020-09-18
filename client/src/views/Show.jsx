import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';

const Show = props =>{
    const [pet, setPet] =useState({
        name:'',
        type:'',
        description:'',
        skillOne:'',
        skillTwo:'',
        skillThree:'',
    });
    useEffect(()=> {
        Axios.get(`http://localhost:8000/api/pet/${props.id}`)
            .then(res=> setPet(res.data.results))
            .catch(err => console.log(err))
    }, [props])

    const destroyPet = () => {
        Axios.delete(`http://localhost:8000/api/destroy/pet/${props.id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    return(
        <div className="mx-auto p-5 col-6 bg-info text-dark">
            <h2>Details About {pet.name}</h2>
            <p>Pet Type:{pet.type}</p>
            <p>Description:{pet.description}</p>
            <h3>Skills:</h3>
            <ul className="list-group text-dark">
                <li className="list-group-item">{pet.skillOne}</li>
                <li className="list-group-item">{pet.skillTwo}</li>
                <li className="list-group-item">{pet.skillThree}</li>
            </ul>
            <button className="btn btn-danger btn btn-outline-warning m-5" onClick={destroyPet}>Adopt {pet.name}</button>
        </div>
    );

}

export default Show;
