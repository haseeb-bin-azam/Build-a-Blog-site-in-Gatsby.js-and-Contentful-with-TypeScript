import React from 'react';
const styles = require('./blog.module.css');
import Layout from '../components/Layout';
import {Link} from 'gatsby';

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Product({ pageContext }) {

    const { itemDetails } = pageContext;
    console.log(itemDetails);
    // console.log(JSON.parse(itemDetails.content.raw));
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.heading}>{itemDetails.title}</h1>
                <img src={itemDetails.images[0].fluid.src} alt="image1" />
                <p>{documentToReactComponents(JSON.parse(itemDetails.content.raw))}</p>
                <Link to={'/'}>
                    <button className={styles.lastbutton}>Go Back To Main Blog Page</button>
                </Link>
            </div>
        </Layout>
    )
}
