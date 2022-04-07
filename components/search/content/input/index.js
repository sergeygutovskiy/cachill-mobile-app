import { StyleSheet, Pressable, TextInput, View, Text } from 'react-native';
import { useState } from 'react';

export default function SearchInput({ onSearch }) {
    const [ searchText, setSearchTest ] = useState('');
    const onButtonPressed = () => onSearch(searchText);
    
    return (
        <View style={styles.container}>
            <TextInput
                value={searchText}
                onChangeText={setSearchTest}
                style={styles.input}
                placeholder='Я ищу...'
            />
            <Pressable
                onPress={onButtonPressed}
                disabled={searchText === ''}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    Найти
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#333',
        borderRadius: 12,
        marginBottom: 24,
    },

    input: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },

    button: {
        padding: 16,
    },

    buttonText: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
});