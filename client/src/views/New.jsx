import React, {useState} from 'react';
import Axios from 'axios';
import PetForm from '../components/PetForm';
import { navigate } from '@reach/router';


const New = props =>{
    const initialPet ={
        name:"",
        type:"",
        description:"",
        skillOne:"",
        skillTwo:"",
        skillThree:""
    };

    const [pet, setPet] = useState(initialPet);

    const [errors, setErrors] =useState(initialPet);

    const handleInputChange = (e) => {
        setPet({
            ...pet,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        setErrors(initialPet);
        e.preventDefault();
        Axios.post('http://localhost:8000/api/create/pet', pet)
            .then(res => {
                if(res.data.results){
                    navigate('/')
                }
                else{
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err))
    }



    return(
        <div>
            <h2>Know A Pet Needing A Home?</h2>
            <PetForm
                inputs={pet}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Add A Pet"
            
            />


        </div>
    )


}

export default New;