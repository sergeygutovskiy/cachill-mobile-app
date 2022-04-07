// const API_URL = 'http://localhost:3000/api'
const API_URL = 'https://mchs-server.herokuapp.com/api';

const getRandomPost = async ({ prevPostId }) => {
    let url = `${API_URL}/posts/random`;
    if ( prevPostId !== null )
        url += `?prevPostId=${prevPostId}`;

    const response = await fetch(url);
    const post = await response.json();

    return post;
};

const getRatingPosts = async () => {
    const url = `${API_URL}/posts/rating`;

    const response = await fetch(url);
    const posts = await response.json();

    return posts;
};

const postLikePost = async (postID) => {
    const url = `${API_URL}/posts/${postID}/like`;

    const response = await fetch(url, {
        method: 'POST', 
    });

    return response;
}

const postDislikePost = async (postID) => {
    const url = `${API_URL}/posts/${postID}/dislike`;

    const response = await fetch(url, {
        method: 'POST', 
    });

    return response;
}

const fetchSearch = async (searchText) => {
    const url = `${API_URL}/posts/search?query=${searchText}`;

    const response = await fetch(url);
    const posts = await response.json();

    return posts;
};

const fetchCategoryPosts = async (categorySlug) => {
    const url = `${API_URL}/posts/categories/${categorySlug}`;

    const response = await fetch(url);
    const posts = await response.json();

    return posts;
};

export {
    getRandomPost,
    postLikePost,
    postDislikePost,
    getRatingPosts,
    fetchSearch,
    fetchCategoryPosts,
};