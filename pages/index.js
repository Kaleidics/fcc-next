import { useEffect, useState } from 'react';
import Head from 'next/head';
import Post from '../components/post';
import Navbar from '../components/navbar'

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const ACCESS = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = require('contentful').createClient({
    space: SPACE,
    accessToken: ACCESS
});

function HomePage() {
    async function fetchEntries() {
        const entries = await client.getEntries();
        if (entries.items) return entries.items;
        console.log(`Error getting Entries for ${contentType.name}.`);
    }

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const allPosts = await fetchEntries();
            setPosts([...allPosts]);
        }
        getPosts();
    }, []);

    return (
        <>
            <Head>
                <title>freeCodeCamp - Elk Grove</title>
            </Head>
            <Navbar />

            <style jsx global>{`
                html {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                }

                body {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                    padding: 0;
                }

                .clearfix::after {
                    content: '';
                    clear: both;
                    display: table;
                }
            `}</style>
        </>
    );
}

export default HomePage;
