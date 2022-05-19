import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    FlatList,
    Image,
    TextInput,
    View,
    TouchableHighlight,
    TouchableWithoutFeedback
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native'
import clothesList from '../ClothesList';
import style from './Styles'

export default function Feed() {

    const tagList = [
        { id: 1, tagName: "All" },
        { id: 2, tagName: "Blouses" },
        { id: 3, tagName: "T-Shirts" },
        { id: 4, tagName: "Tank Tops" },
        { id: 5, tagName: "Pants" },
        { id: 6, tagName: "Skirts" },
        { id: 7, tagName: "Sweaters" },
        { id: 8, tagName: "Shorts" },
        { id: 9, tagName: "Dresses" }
    ];
    const isFocused = useIsFocused();
    
    const [clothes, setClothesList] = useState(clothesList);
    const [tagNameSelected, setTagNameSelected] = useState("All");

    const [search, setSearch] = useState();
    const updateSearch = (search, tagName) => {
        setSearch(search);
        const data = clothesList.filter(item => {
            let itemList = item.text.toUpperCase().split(' ').join('');
            search = search ? search.toUpperCase().split(' ').join('') : "";
            return (itemList.includes(search) || search == "") && (item.tag === tagName || tagName === "All");
        });
        setClothesList(data);
    };

    const loveIt = (clothingItem) => {
        const data = clothes.filter(item => {
            if (item.id == clothingItem.id) {
                item.liked = !clothingItem.liked
            }
            return item;
        });

        setClothesList(data);
    };

    let lastTap = null;
    const handleDoubleTap = (item, component) => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (component == 'icon' || (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY)) {
            loveIt(item);
        } else {
            lastTap = now;
        }
    }

    useEffect(() => {
        setClothesList(clothesList);
      }, [isFocused]);

    return (
        <SafeAreaView style={style.AndroidSafeArea}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                value={search}
                onChangeText={queryText => updateSearch(queryText, tagNameSelected)}
                placeholder="Search..."
                style={style.searchInput}
            />

            <FlatList keyExtractor={({ id }) => String(id)} horizontal={true} data={tagList} showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
                <TouchableHighlight
                    style={tagNameSelected == item.tagName ? [style.tagView, { backgroundColor: '#d6997f', color: 'white' }] : [style.tagView, { backgroundColor: '#d8d8d8', }]}
                    onPress={() => { setTagNameSelected(item.tagName ? item.tagName : "All"); updateSearch(search, item.tagName); }}
                    underlayColor={tagNameSelected == item.tagName ? '#d6997f' : '#d8d8d8'}>
                    <Text style={tagNameSelected == item.tagName ? [style.tags, { backgroundColor: '#d6997f', color: 'white' }] : [style.tags, { backgroundColor: '#d8d8d8', }]}>{item.tagName}</Text>
                </TouchableHighlight>
            )} />

            <FlatList
                showsHorizontalScrollIndicator={true}
                data={clothes} numColumns={2}
                keyExtractor={({ id }) => String(id)}
                renderItem={({ item, index }) => (
                    <View style={style.listView} >
                        <TouchableWithoutFeedback onPress={() => handleDoubleTap(item, "image")}>
                            <Image source={item.pathImage}
                                key={index}
                                style={style.image} />
                        </TouchableWithoutFeedback>
                        <Text style={style.text}>{item.text}</Text>
                        <TouchableWithoutFeedback onPress={() => handleDoubleTap(item, "icon")}>
                            <Ionicons name={item.liked ? "heart-sharp" : "heart-outline"} size={24} color={item.liked ? "#d6997f" : "black"} />
                        </TouchableWithoutFeedback>
                    </View>
                )}
                ListEmptyComponent={(<Text style={style.textNoData}>No Data Found</Text>)}
                ListFooterComponent={<View style={{ height: 0, marginBottom: 120 }}></View>}
            />
        </SafeAreaView>
    );
}
