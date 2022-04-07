import { StyleSheet, View, Text, Image } from 'react-native';
import DislikeButton from './dislike-button';
import LikeButton from './like-button';
import ReloadButton from './reload-button';

export default function HomeScreenContent({ post, reload, like, dislike }) {
    const onReloadButtonClicked = () => reload();
    const onLikeButtonClicked = () => like();
    const onDislikeButtonClicked = () => dislike();
    
    return (
        <View style={styles.container}>
            {
                post === null ?
                <Text>Загрузка....</Text>
                :
                <>
                    <Image
                        source={{ uri: post.image_path }}
                        
                        style={styles.image}
                    />
                    <Text style={styles.text}>
                        {post.text}
                    </Text>
                    <Text style={styles.author}>
                        © {post.author}
                    </Text>
                    <View style={styles.buttons}>
                        <LikeButton 
                            onButtonClicked={onLikeButtonClicked}
                            buttonStyle={styles.button}
                        />
                        <DislikeButton
                            onButtonClicked={onDislikeButtonClicked}
                            buttonStyle={styles.button}
                        />
                        <ReloadButton
                            onButtonClicked={onReloadButtonClicked}
                            buttonStyle={styles.button}
                        />
                    </View>
                </>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        padding: 24,
        backgroundColor: 'white',
        borderRadius: 30,
    },

    image: {
        flex: 1,
        backgroundColor: '#C6C6C6',
        borderRadius: 12,
        marginBottom: 24,
    },

    text: {
        fontSize: 24,
        lineHeight: 28,
        marginBottom: 16,
    },

    author: {
        fontSize: 18,
        color: '#A6A6A6',
        fontWeight: '400',
        marginBottom: 24,
    },

    buttons: {
        flexDirection: 'row',
    },

    button: {
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
        width: 56,
        height: 56,
        borderRadius: 28,
    }
});