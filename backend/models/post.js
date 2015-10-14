/**
 * File: backend/models/post.js
 * Defined: PostSchema
 * Description: defines a schema for saving posts to the db
 * Dependencies: Mongoose
 *
 * @package osseus
 */

/* Basic Setup */
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;


/* Creating User Schema */
var PostSchema  = new Schema({
  text: 'String'
});


/* Export Model */
module.exports  = mongoose.model('Post', PostSchema);
