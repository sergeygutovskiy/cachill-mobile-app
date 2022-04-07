import { StyleSheet, View } from 'react-native';
import SearchInput from './input';
import SearchResults from './results';

export default function SearchScreenContent({ onSearch, posts }) {        
    return (
        <View style={styles.container}>
            <SearchInput
                onSearch={onSearch}
            />
            <SearchResults
                posts={posts}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});