import { ScrollView, Text } from 'react-native';
import PostCard from '../../../post-card';

export default function SearchResults({ posts }) {
    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            {
                posts !== null ?
                posts.length > 0 ?
                    posts.map(post => 
                        <PostCard 
                            key={post.id}
                            post={post} 
                        />
                    )
                    :
                    <Text>
                        Ничего не найдено
                    </Text>
                :
                <Text>
                    Начните искать
                </Text>
            }
        </ScrollView>
    );
};