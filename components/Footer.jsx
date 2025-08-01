import { StyleSheet, View } from 'react-native'
import { Ellipse13 } from '../assets/SVGIcons/Icons'

const Footer = () => {
    return (
        <View style={styles.Container}>
            <View>
                <Ellipse13/>

            </View>
            {/* <Text style={{color:"#fff"}}>Footer</Text> */}
            {/* <Rectangle29 style={styles.rectangleIcon} width={400} /> */}
            {/* <Rectangle28 style={styles.Rectangle28} width={400} /> */}
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "gray",
        position: "absolute",
        bottom: 40,
        width: "100%",
        height:108

    },
    Rectangle28: {
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        flex: 1,
        height: 108,
        position: "absolute",
        bottom: 0,
        zIndex:-1
    },
    rectangleIcon: {
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        flex: 1,
        height: 108,
        position: "absolute",
        bottom: 76
    }
})