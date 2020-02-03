import { useEffect, useState } from 'react';

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const ACCESS = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = require('contentful').createClient({
    space: SPACE,
    accessToken: ACCESS
});

function RoundedButton() {
    async function fetchEntries() {
        const entries = await client.getEntries();
        if (entries.items) return entries.items;
        console.log(`Error getting Entries for ${contentType.name}.`);
    }

    const [content, setContent] = useState([]);

    useEffect(() => {
        async function getContent() {
            const allContent = await fetchEntries();
            setContent([...allContent]);
        }
        getContent();
    }, []);

    let title = content.length > 0 ? content[0].fields.title : null;
    let tagline = content.length > 0 ? content[0].fields.tagline : null;
    let overview = content.length > 0 ? content[0].fields.overview : null;

    return (
        <header className='header'>
            
            <style jsx>{`
                
            `}</style>
        </header>
    );
}

export default Header;
