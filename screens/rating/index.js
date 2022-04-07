import { useState, useEffect } from 'react';
import RatingScreenContent from '../../components/rating/content';
import { getRatingPosts } from '../../lib/api';
import { useIsFocused } from '@react-navigation/native';

export default function RatingScreen({ navigation }) {
    const isFocused = useIsFocused();
    const [ posts, setPosts ] = useState(null);
    
    const getPosts = async () => {
        const postsData = await getRatingPosts();
        setPosts(postsData);
    }; 
    
    useEffect(() => {
        getPosts();
    }, []);

    useEffect(() => {
        if ( !isFocused ) return;
        getPosts();
    }, [ isFocused ]);

    return (
        <RatingScreenContent
            posts={posts}
        />
    );
};