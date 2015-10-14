module.exports  = function(grunt) {
  grunt.config.set('osseus_to_db', {
    posts: {
      files: [
        {
          src: ['src/posts/*.md']
        }
      ]
    }
  });
};
