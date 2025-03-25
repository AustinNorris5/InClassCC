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