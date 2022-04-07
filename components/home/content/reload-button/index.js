import { Pressable, Text, StyleSheet } from 'react-native';

export default function ReloadButton({ onButtonClicked, buttonStyle }) {
    return (
        <Pressable 
            onPress={onButtonClicked}
            style={[ buttonStyle, styles.reloadButton ]}
        >
            <Text style={styles.reloadButtonText}>
                Еще!
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    reloadButton: {
        backgroundColor: 'white',
        borderColor: '#333',
        borderWidth: 2,
    },

    reloadButtonText: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});