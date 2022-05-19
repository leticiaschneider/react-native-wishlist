import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    searchInput: {
        marginTop: 26,
        marginLeft: 18,
        marginRight: 18,
        borderRadius: 15,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        paddingHorizontal: 20,
        padding: 8
    },
    tags: {
        fontSize: 15,
        color: 'gray',
        height: 20,
    },
    tagView: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 20,
    },
    image: {
        borderRadius: 20,
        width: 180,
        height: 300,
        margin: 10,
    },
    listView: {
        flex: 1,
        margin: 10,
        marginTop: 20,
        alignItems: 'center'
    },
    text: {
        fontSize: 15
    },
    textNoData: {
        fontSize: 17,
        marginTop: 30,
        textAlign: 'center'
    },
    AndroidSafeArea: {
        paddingTop: Platform.OS === "android" ? 30 : 0
    }
});