import ManImage from '../../../assets/categories/mchs.jpg';
import WomanImage from '../../../assets/categories/woman.jpg';
import AnimeImage from '../../../assets/categories/anime.jpg';
import { StyleSheet, Text, Image, View, Pressable, ScrollView } from 'react-native';

const categories = [
    {
        label: 'МЧС',
        slug: 'mchs',
        image: ManImage,
    },
    {
        label: 'ЖЧС',
        slug: 'women',
        image: WomanImage,
    },
    {
        label: 'Аниме',
        slug: 'anime',
        image: AnimeImage,
    },
];

export default function CatalogCategoriesScreen({ navigation }) {
    const openPosts = (categorySlug) => {
        navigation.navigate('catalog.posts', {
            categorySlug: categorySlug,
        });
    };
    
    return (
        <ScrollView 
            contentContainerStyle={styles.container}
            >
            {
                categories.map(category =>
                    <Pressable
                        key={category.slug}    
                        onPress={() => openPosts(category.slug)}
                        style={{ flex: 1 }}
                    >
                        <View
                            style={styles.category}
                        >
                            <Image
                                source={category.image}
                                style={styles.categoryImage}
                            />
                            <View style={styles.categoryTextWrapper}>
                                <Text
                                    style={styles.categoryText}
                                >
                                    {category.label}
                                </Text>
                            </View>
                        </View>
                    </Pressable>
                )
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    
    category: {
        flex: 1,
        position: 'relative',
        aspectRatio: 2,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 16,
    },

    categoryImage: {
        flex: 1,
    },

    categoryTextWrapper: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },

    categoryText: {
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white',
    },
});