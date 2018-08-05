const db = require('../models')

module.exports={
    createSetList: (req,res) => {
        db.setList.create(req.body).then(dbnewsetList=> {
            res.json(dbnewsetList)
        })
    },

   addSong:(req, res) => {
       db.setList.findOneAndUpdate({name: req.params.name}, {album: req.params.album})
       //   then do the update function here 
       .then(dbnewsetList=>{
           res.json(dbnewsetList)
       })
   },

  removeSong: (req, res) => {
     // do delete function here 
  }
}