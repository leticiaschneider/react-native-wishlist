import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    image: {
        borderRadius: 20,
        width: 50,
        height: 50,
        margin: 10,
    },
    viewWishlist: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    text: {
        fontSize: 15,
        width: 250
    },
    title: {
        textAlign: 'center',
        color: '#ca8d76',
        textTransform: 'uppercase',
        fontSize: 25,
        marginTop: 20,
        fontWeight: '700',
        letterSpacing: 3,
        marginBottom: 15
    },
    AndroidSafeArea: {
        paddingTop: Platform.OS === "android" ? 30 : 0
    }
});