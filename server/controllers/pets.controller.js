const Pets = require("../models/pets.model");




module.exports ={
    index:(req,res) => {
        Pets.find().sort("type:1")
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))

    },
    create:(req,res) =>{
        Pets.create(req.body)
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))

    },
    show:(req,res) =>{
        Pets.findOne({_id:req.params.id})
        .then(data => res.json({results:data}) )
        .catch(err => res.json(err.errors))

    },
    update:(req,res) =>{ 
        Pets.findOneAndUpdate({_id:req.params.id},req.body,{new:true, useFindAndModify:false})
        .then(data => res.json({results:data}) )
        .catch(err => res.json(err.errors))

    },
    destroy:(req,res) =>{
        Pets.deleteOne({_id:req.params.id})
        .then(data => res.json({results:data}) )
        .catch(err => res.json(err.errors))

    },

}
