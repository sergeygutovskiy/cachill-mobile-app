import { useEffect, useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { fetchCategoryPosts } from '../../../lib/api';
import PostCard from '../../post-card';

export default function CatalogPostsScreen({ route }) {
    const [ posts, setPosts ] = useState(null);

    const getPosts = async () => {
        const postsData = await fetchCategoryPosts(route.params.categorySlug);
        setPosts(postsData);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {
                posts === null ?
                <Text>Загрузка...</Text>
                :
                posts.map(post =>
                    <PostCard 
                        key={post.id} 
                        post={post} 
                    />
                )
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
});