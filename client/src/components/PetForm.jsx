import React from 'react';

const PetForm = props => {
    const{inputs, errors, handleInputChange, handleSubmit, submitValue}= props;

    return(
        <form className= "col-5 mx-auto bg-info" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input className="form-control" type="text" name="name" value={inputs.name} onChange={handleInputChange} />
                <span className="text-danger">{errors.name ? errors.name.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="type">Pet Type:</label>
                <input className="form-control" type="text" name="type" value={inputs.type} onChange={handleInputChange} />
                <span className="text-danger">{errors.type ? errors.type.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input className="form-control" type="text" name="description" value={inputs.description} onChange={handleInputChange} />
                <span className="text-danger">{errors.description ? errors.description.message : ""}</span>
            </div>
            <h3>Skills: (Optional)</h3>
            <div className="form-group">
                <label htmlFor="skillOne">Skill One:</label>
                <input className="form-control" type="text" name="skillOne" value={inputs.skillOne} onChange={handleInputChange} />
                <span className="text-danger">{errors.skillOne ? errors.skillOne.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="skillTwo">Skill Two:</label>
                <input className="form-control" type="text" name="skillTwo" value={inputs.skillTwo} onChange={handleInputChange} />
                <span className="text-danger">{errors.skillTwo ? errors.skillTwo.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="skillThree">Skill Three:</label>
                <input className="form-control" type="text" name="skillThree" value={inputs.skillThree} onChange={handleInputChange} />
                <span className="text-danger">{errors.skillThree ? errors.skillThree.message : ""}</span>
            </div>
            <input type="submit" value={submitValue} className="btn btn-warning"/>
        </form>
    )

}

export default PetForm