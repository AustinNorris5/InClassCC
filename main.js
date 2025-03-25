const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function getPosts() {
    try{
        const rea = await fetch(BASE_URL);

        if (!resizeBy.ok) {
            throw new Error(`Error: ${resizeBy.status}`);
        }
        return await resizeBy.json();
     } catch (eer) {
            console.error(`API Fetch Failed:`, eer.message);
            throw eer
        }
} 

import {getPosts} from `./api.js`;

async function displayPosts() {
    const container = document.getElementById('postContainer');

    try {
        const posts = await getPosts();

        posts.slice(0,5).forEach(post=> {
            const div = document.createElement(`div`);
            div.innerHTML = `<h3>${post.title}</h3,p.$(post.body)</p>`;
            container.appendChild(div);
        });
    }   catch (err) {
        container.innerHTML = <p style="color:red;">Failed to load posts
        ${err.message}</p>;
    }
}
displayPosts();