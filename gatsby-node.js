const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/post.js');
  const projectTemplate = path.resolve('src/templates/project.js');
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
              date
              something
              category
              posttype
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach(edge => {
      if (edge.node.frontmatter.posttype === 'project') {
        createPage({
          // Path for this page — required
          path: `${edge.node.frontmatter.path}`,
          component: projectTemplate,
          context: {},
        });
      } else {
        createPage({
          // Path for this page — required
          path: `${edge.node.frontmatter.path}`,
          component: postTemplate,
          context: {},
        });
      }
    });
  });
};
