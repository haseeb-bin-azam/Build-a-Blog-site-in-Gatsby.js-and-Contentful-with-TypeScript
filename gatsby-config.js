require('dotenv').config();

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.SPACE_ID,
                accessToken: process.env.ACCESS_TOKEN,
            },
        },
    ]
}


