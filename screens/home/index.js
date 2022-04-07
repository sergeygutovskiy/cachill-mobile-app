import { useEffect, useState } from 'react';
import { getRandomPost, postDislikePost, postLikePost } from '../../lib/api';
import HomeScreenContent from '../../components/home/content';

export default function HomeScreen() {
    const [ post, setPost ] = useState(null);

    const loadRandomPost = async () => {
        const postData = await getRandomPost({ prevPostId: post ? post.id : null });
        setPost(postData);
    }; 
    
    const reloadRandomPost = () => {
        setPost(null);
        loadRandomPost();
    }

    const likePost = async () => {
        if ( post === null ) return;
        await postLikePost(post.id);
        reloadRandomPost();
    }

    const dislikePost = async () => {
        if ( post === null ) return;
        await postDislikePost(post.id);
        reloadRandomPost();
    }

    useEffect(() => {
        loadRandomPost();
    }, []);

    return (
        <HomeScreenContent
            post={post}
            reload={reloadRandomPost}
            like={likePost}
            dislike={dislikePost}
        />
    );
};