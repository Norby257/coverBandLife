var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var trackNameSchema = new Schema ({
   name: {
       type: String,
       required: true
   },

   album: {
       type: String,
       required: true
   },
   lyrics: {
       type: String,
    
   },
   gig: {
       type: String,
       required: true
   }
})

var trackName = mongoose.model('trackName', trackNameSchema);

module.exports = trackName;