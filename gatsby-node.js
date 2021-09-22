const path = require('path');

exports.createPages = async ( {actions, graphql} ) => {
    const {createPage} = actions;

    const result = await graphql(`
        {
            allContentfulPost {
                nodes {
                    title
                    slug
                    subtitle
                    author
                    content {
                        raw
                    }
                    images {
                        fluid {
                            src
                        }
                    }
                }
            }
        }
    `)

    // console.log(JSON.stringify(result));

    result.data.allContentfulPost.nodes.forEach((obj) => {
        createPage({
            path: `/${obj.slug}`,
            component: path.resolve(`./src/template/blog.tsx`),
            context: {
                itemDetails: obj
            }
        })
    });
} 