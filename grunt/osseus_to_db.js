module.exports  = {
  posts: {
    files: [
      {
        src: ['src/posts/*.md']
      }
    ],
    options: {
      parser: global.config.post_parser
    }
  }
};
