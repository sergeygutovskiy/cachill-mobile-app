import { Pressable, Text, StyleSheet } from 'react-native';

export default function DislikeButton({ onButtonClicked, buttonStyle }) {
    return (
        <Pressable 
            onPress={onButtonClicked}
            style={({ pressed }) => [ 
                buttonStyle, 
                styles.likeButton,
                {
                    backgroundColor: pressed ? '#000' : '#333',
                },
            ]}
        >
            <Text style={styles.dislikeButtonText}>
                😡
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    dislikeButton: {
    },

    dislikeButtonText: {
        fontSize: 20,
    },
});