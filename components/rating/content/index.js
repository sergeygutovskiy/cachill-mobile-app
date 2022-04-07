import { ScrollView, StyleSheet, Text } from 'react-native';
import RatingPostCard from './post-card';

export default function RatingScreenContent({ posts }) {
    return (
        <ScrollView style={styles.container}>
            {
                posts === null ?
                <Text>Загрузка...</Text>
                :
                posts.map(post => 
                    <RatingPostCard 
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
    }
});