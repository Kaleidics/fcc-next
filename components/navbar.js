import { useEffect, useState } from 'react';

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const ACCESS = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = require('contentful').createClient({
    space: SPACE,
    accessToken: ACCESS
});

function Navbar() {
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

    let imageSrc = content.length > 0 ? content[0].fields.navbarLogo.fields.file.url : null;
    let imageAlt = content.length > 0 ? content[0].fields.navbarLogo.fields.description : null;

    return (
        <div className='navbar'>
            <div className='navbar-content'>
                <img className='navbar-logo' src={imageSrc} alt={imageAlt} />
                <div className='mobile-nav'>
                    <div className='line one'></div>
                    <div className='line two'></div>
                    <div className='line three'></div>
                </div>
            </div>

            <style jsx>{`
                .navbar {
                    width: 100%;
                    padding: 20px 0;
                    border-bottom: 1px solid rgb(232, 232, 232);
                }

                .navbar-content {
                    max-width: 1024px;
                    margin: 0 auto;
                    width: 90%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .navbar-logo {
                    max-width: 200px;
                }

                .mobile-nav {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 36px;
                    height: 26px;
                    padding: 20px 0;
                    align-items: center;
                }

                .line {
                    width: 30px;
                    height: 2px;
                    background: grey;
                    border-radius: 3px;
                }
            `}</style>
        </div>
    );
}

export default Navbar;
