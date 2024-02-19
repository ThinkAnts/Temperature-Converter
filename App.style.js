import { StyleSheet } from "react-native"
export const style = StyleSheet.create ({
    root: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        alignSelf: "stretch"
    },
    workspace: {
        height: 450,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    imageBackground: {
        height: "100%",
    },
    input: {
     backgroundColor: "white",
     height: 50,
     borderRadius: 20,
     alignSelf: "stretch",
     padding: 25,
    },
    unit: {
        position: "absolute",
        alignSelf: "flex-end",
        paddingRight: 25,
        fontSize: 30,
    }
})