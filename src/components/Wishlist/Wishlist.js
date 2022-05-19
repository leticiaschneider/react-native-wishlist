import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native'
import clothesList from '../ClothesList';
import styles from './Styles';

export default function Wishlist() {

  const [wishlist, setWishlist] = useState();
  const [clothes, setClothesList] = useState(clothesList);

  const isFocused = useIsFocused();

  const loveIt = (clothingItem) => {
    const clothesData = clothesList.filter(item => {
      if (item.id == clothingItem.id) {
        item.liked = !clothingItem.liked
      }
      return item;
    });
    setClothesList(clothesData);

    const wishlistData = clothes.filter(item => item.liked);
    setWishlist(wishlistData);
  };
  
  useEffect(() => {
    const data = clothes.filter(item => {
      return item.liked;
    });
    setWishlist(data);
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Text style={styles.title}>Your likes</Text>
        <FlatList
          data={wishlist} numColumns={1}
          keyExtractor={({ id }) => String(id)}
          renderItem={item =>
            <View style={styles.viewWishlist} >
              <Image source={item.item.pathImage}
                key={item.index}
                style={styles.image} />
              <Text style={styles.text}>{item.item.text}</Text>
              <TouchableWithoutFeedback onPress={() => loveIt(item.item)}>
                <Ionicons name={item.item.liked ? "heart-sharp" : "heart-outline"} size={24} color={item.item.liked ? "#d6997f" : "black"} />
              </TouchableWithoutFeedback>
            </View>
          }
          ListEmptyComponent={(<Text style={styles.noData}>You do not currently have any likes.</Text>)}
          ListFooterComponent={<View style={{ height: 0, marginBottom: 90 }}></View>}
        />
    </SafeAreaView>
  );
}
