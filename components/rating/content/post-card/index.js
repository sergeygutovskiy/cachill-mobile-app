import { Pressable, StyleSheet, View, Text, Image } from 'react-native';
import { useContext } from 'react';
import PostModalContext from '../../../../lib/contexts/post-modal';

export default function RatingPostCard({ post }) {
    const { openModal } = useContext(PostModalContext);
    
    return (
        <Pressable onPress={() => openModal(post)}>
            <View style={styles.container}>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>
                        {post.rating}
                    </Text>
                    <Text style={styles.likes}>
                        {post.likes >= 0 ? `+${post.likes}` : `-${post.likes}`}
                    </Text>
                </View>
                <View style={styles.content}>
                    <Text 
                        numberOfLines={3}
                        ellipsizeMode={'tail'}
                        style={styles.contentText}
                    >
                        {post.text}
                    </Text>
                    <Text style={styles.contentAuthor}>
                        {post.author}
                    </Text>
                </View>
                <Image
                    source={{ uri: post.image_path }}
                    style={styles.image}
                />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 16,
    },

    ratingContainer: {
        alignItems: 'center',
        padding: 16,
        paddingRight: 0,
        textAlign: 'center',
    },

    rating: {
        fontSize: 80,
        lineHeight: 80,
        marginBottom: 8,
    },

    likes: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        fontSize: 12,
        color: 'white',
        backgroundColor: '#ff6060',
        borderRadius: 12,
    },

    content: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        padding: 16,
    },

    contentText: {
        fontSize: 16,
    },

    contentAuthor: {
        marginBottom: 5,
    },

    image: {
        width: 110,
        height: 146,
        backgroundColor: '#C6C6C6',
    }
});