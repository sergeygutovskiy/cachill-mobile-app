import { Modal, Pressable, Image, StyleSheet, View, Text } from 'react-native';

export default function PostModal({ modal, close }) {
    return (
        <Modal
            animationType={'slide'}
            presentationStyle={'fullScreen'}
            transparent={false}
            visible={modal.open}
            onRequestClose={() => close()}
            onDismiss={() => close()}
        >
            <View style={styles.container}>
                {
                    modal.post === null ?
                    <Text>Загрузка...</Text>
                    :
                    <>
                        <Pressable 
                            onPress={() => close()}
                            style={styles.closeButton}
                        >
                            <Text style={styles.closeButtonText}>Закрыть</Text>
                        </Pressable>
                        <Image
                            source={{ uri: modal.post.image_path }}
                            
                            style={styles.image}
                        />
                        <Text style={styles.text}>
                            {modal.post.text}
                        </Text>
                        <Text style={styles.author}>
                            © {modal.post.author}
                        </Text>
                    </>
                }
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 0,
        padding: 24,
        backgroundColor: 'white',
    },

    closeButton: {
        alignSelf: 'flex-end',
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#333',
        borderRadius: 8,
        marginBottom: 32,
    },

    closeButtonText: {
        color: '#333',
        textTransform: 'uppercase',
    },

    image: {
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
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
});