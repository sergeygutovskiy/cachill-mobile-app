import { Pressable, Text, StyleSheet } from 'react-native';

export default function LikeButton({ onButtonClicked, buttonStyle }) {
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
            <Text style={styles.likeButtonText}>
                ☝🏼
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    likeButton: {
    },

    likeButtonText: {
        fontSize: 20,
    },
});