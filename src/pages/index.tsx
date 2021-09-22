import React from 'react';
import { Link } from 'gatsby';

import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const styles = require('./index.module.css');

export default ({ data }) => {
    console.log(data.allContentfulPost.nodes);

    let img1 = data.allContentfulPost.nodes[0].images[0].fluid.src;
    console.log(img1);
    let img2 = data.allContentfulPost.nodes[1].images[0].fluid.src;
    console.log(img2);
    return (
        <div>
            <Layout>
                <div className={styles.container}>
                    <Link to={`/${data.allContentfulPost.nodes[0].slug}`}>
                        <h1 className={styles.heading}>{data.allContentfulPost.nodes[0].title}</h1>
                    </Link>
                    <img src={img1} alt="image1" />
                    <p>{data.allContentfulPost.nodes[0].subtitle}</p>
                    <Link to={`/${data.allContentfulPost.nodes[0].slug}`}>
                        <button>Read More</button>
                    </Link>

                    <Link to={`/${data.allContentfulPost.nodes[1].slug}`}>
                        <h1 className={styles.heading}>{data.allContentfulPost.nodes[1].title}</h1>
                    </Link>
                    <img src={img2} alt="image2" />
                    <p>{data.allContentfulPost.nodes[1].subtitle}</p>
                    <Link to={`/${data.allContentfulPost.nodes[1].slug}`}>
                        <button className={styles.lastbutton}>Read More</button>
                    </Link>
                </div>
            </Layout>

        </div>
    )
}

export const queryData = graphql`
    query {
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
`;

