import React from 'react';

export default function BlogList({posts}){
    // Helper function implicitly returns a <li>

    // If we want the IDs as well as the blog posts, we should get an array of the Ids (using Object.keys).
    // Then we map over that array.
    // With each id, we can access the blog post in the posts object.
    const listItems = Object.keys(posts).map(id => {
        const theBlogPost = posts[id];
        return <li>{theBlogPost.title} - {id}</li>
    });
    return (
        <ol>
            {listItems}
        </ol>
    )
}