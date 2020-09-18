const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');


const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        unique:[true, "Name Already in Use,"],
        required:[true, "Your Pet Needs A Name!"],
        minlength:[3, "You Need At Least 3 Characters"]
    },
    type:{
        type: String,
        required:[true, "You Must Tell Us What Kind of Pet This Is!"],
        minlength:[3, "You Need At Least 3 Characters!"]
    },
    description:{
        type: String,
        required:[true, "Please Provide a Valid Description!"],
        minlength:[3, "Description Must Be At Least 3 Characters!"]
    },
    skillOne:{
        type:String,
        default:""
    },
    skillTwo:{
        type:String,
        default:""
    },
    skillThree:{
        type:String,
        default:""
    }


}, {timestamps:true})

// const allPets = newPet.find({}, "name type", function(err,docs){
//     if(err) console.log(err);
//     console.log(docs);
// });



PetSchema.plugin(uniqueValidator);
const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;