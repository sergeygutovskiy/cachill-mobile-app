import { useState } from 'react';
import SearchScreenContent from '../../components/search/content';
import { fetchSearch } from '../../lib/api';

export default function SearchScreen() {
    const [ posts, setPosts ] = useState(null);

    const search = async (searchText) => {
        const foundPosts = await fetchSearch(searchText);
        setPosts(foundPosts);
    }
    
    return (
        <SearchScreenContent
            onSearch={search}
            posts={posts}
        />
    );
};