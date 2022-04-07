import { StyleSheet, Pressable, View, Image, Text } from 'react-native';
import { useContext } from 'react';
import PostModalContext from '../../lib/contexts/post-modal';

export default function PostCard({ post }) {
    const { openModal } = useContext(PostModalContext)
    
    return (
        <Pressable onPress={() => openModal(post)}>
            <View style={styles.container}>
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
    },

    image: {
        width: 110,
        height: 146,
        backgroundColor: '#C6C6C6',
    }
});