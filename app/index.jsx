// import { faker } from '@faker-js/faker';
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { Color, FontFamily } from '../GlobalStyes';
import { Ellipse12, Ellipse13, Ellipse14, Frame142, Freez, HomeIcon, QrCode, Rectangle1489, Rectangle1490, Rectangle28, Rectangle29, Rectangle30, UnfreezIcon } from '../assets/SVGIcons/Icons';
const index = () => {
    const [Active, setActive] = useState(true)
    const [ActiveTab, setActiveTab] = useState(1);
    const [Expiry, setExpiry] = useState('01/28')

    const fetchData = () => {

        let month = faker.number.int({ min: 1, max: 12 })
        let year = faker.number.int({ min: 10, max: 99 })
        if (month <= 9) {
            month = '0' + month.toString();
        }
        setExpiry(month + '/' + year)

    }
    return (
        <SafeAreaView style={styles.Viewbg}>
            <Text style={styles.Title}>select payment mode</Text>
            <Text style={styles.SubTitle}>choose your preferred payment method to make payment</Text>
            <View style={styles.TabContainer}>
                <ScrollView style={styles.ScrolViewContainer} horizontal={true}>
                    <Pressable style={[styles.ButtonView, { borderColor: ActiveTab == 0 ? Color.colorFirebrick : Color.colorWhite }]} onPress={() => setActiveTab(0)}>
                        <Text style={[styles.ButtonText, { color: ActiveTab == 0 ? Color.colorFirebrick : Color.colorWhite }]}>pay</Text>
                    </Pressable>
                    <Pressable style={[styles.ButtonView, { borderColor: ActiveTab == 1 ? Color.colorFirebrick : Color.colorWhite }]} onPress={() => setActiveTab(1)}>
                        <Text style={[styles.ButtonText, { color: ActiveTab == 1 ? Color.colorFirebrick : Color.colorWhite }]}>Card</Text>
                    </Pressable>
                </ScrollView>
            </View>
            <View style={{ flex: 1, marginHorizontal: 15 }}>
                <Text style={styles.yourDigitalDebit}>your digital debit card</Text>
                <View style={{ flexDirection: "row", gap: 20, marginTop: 15, }}>
                    {
                        Active ?
                            <ImageBackground
                                source={require('../assets/images/CardDetails.png')}
                                style={{
                                    width: 200,
                                    height: 300,
                                    backgroundColor: "#000"
                                }}
                                resizeMode='stretch'
                            >
                                <Text style={styles.ExpirtLabel}>expiry</Text>
                                <Text
                                    style={styles.ExpirtDate}
                                >{Expiry}</Text>
                                <Text style={[styles.NumberStyle, { top: 75 }]}>{faker.number.int({ min: 1111, max: 9999 })}</Text>
                                <Text style={[styles.NumberStyle, { top: 102 }]}>{faker.number.int({ min: 1111, max: 9999 })}</Text>
                                <Text style={[styles.NumberStyle, { top: 129 }]}>{faker.number.int({ min: 1111, max: 9999 })}</Text>
                                <Text style={[styles.NumberStyle, { top: 156 }]}>{faker.number.int({ min: 1111, max: 9999 })}</Text>
                            </ImageBackground>



                            :
                            <Image
                                source={require('../assets/images/Design_Layer.png')}
                                style={{
                                    width: 200,
                                    height: 300,
                                }}
                                resizeMode='stretch'
                            />






                    }


                    <View style={{ height: 300, width: 90, justifyContent: "center", alignItems: "center", paddingHorizontal: 10, gap: 10, }}>
                        <Pressable onPress={() => { setActive(!Active), fetchData() }}>
                            {Active ?
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Rectangle1490 style={{ position: "absolute" }} />
                                    <Freez />

                                </View>
                                :
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Rectangle1489 style={{ position: "absolute" }} />
                                    <UnfreezIcon />
                                </View>
                            }
                        </Pressable>
                        <Text style={[styles.UnfreeText, { color: Active ? Color.colorWhite : Color.colorFirebrick }]}>{Active ? `freeze` : `unfreeze`}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.BottomContainer}>
                <View style={styles.BottomItem}>
                    <View style={styles.IconContainerBlack}>
                        <Ellipse12 height={45} width={45} style={styles.IconPosition} />
                        <HomeIcon style={styles.IconPosition} />
                    </View>
                    <Text style={[styles.BottomText, { opacity: 0.3 }]}>home</Text>
                </View>
                <View style={styles.BottomItem}>
                    <View style={styles.IconContainerPink}>
                        <Ellipse13 height={70} width={70} style={styles.IconPosition} />
                        <Rectangle30 height={25} width={25} style={styles.IconPosition} />
                        <QrCode height={27} width={27} style={styles.IconPosition} />
                    </View>
                    <Text style={styles.BottomText}>Yolo Pay</Text>
                </View>
                <View style={styles.BottomItem}>
                    <View style={styles.IconContainerGray}>
                        <Ellipse14 height={45} width={45} style={styles.IconPosition} />
                        <Frame142 style={styles.IconPosition} />
                    </View>
                    <Text style={[styles.BottomText, { opacity: 0.3 }]}>gini</Text>
                </View>
            </View>
            <Rectangle28 style={styles.Rectangle28} />
            <Rectangle29 style={styles.rectangleIcon} width={400} />
        </SafeAreaView>
    )
}

export default index;

const styles = StyleSheet.create({
    Viewbg: {
        flex: 1,
        backgroundColor: "#000"
    },
    Title: {
        marginTop: vs(40),
        marginHorizontal: s(20),
        fontSize: s(24),
        letterSpacing: s(-0.17),
        fontWeight: "600",
        color: Color.colorWhite,
        textAlign: "left"
    },
    SubTitle: {
        marginHorizontal: s(20),
        marginTop: vs(10),
        width: s(328),
        fontSize: s(14),
        letterSpacing: s(-0.17),
        color: Color.colorWhite,
        textAlign: "left",
        opacity: 0.5
    },
    TabContainer: {
        width: "100%",
        height: vs(50),
        marginTop: vs(20)
    },
    ScrolViewContainer: {
        height: vs(60),
        marginLeft: s(20)
    },
    ButtonView: {
        borderRadius: s(40),
        borderStyle: "solid",
        borderColor: Color.colorWhite,
        borderWidth: 1,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        padding: s(4),
        flex: 1,
        marginRight: s(10),
        borderBottomWidth: 0,
        borderLeftWidth: s(0.3),
        borderRightWidth: s(0.3)
    },
    ButtonText: {
        width: s(80),
        fontSize: s(16),
        letterSpacing: s(-0.17),
        textTransform: "lowercase",
        color: Color.colorWhite,
        textAlign: "center"
    },
    Rectangle28: {
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        flex: 1,
        height: vs(108),
        position: "absolute",
        bottom: vs(40),
        alignSelf: "center"
    },
    rectangleIcon: {
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        flex: 1,
        height: vs(115),
        position: "absolute",
        bottom: vs(125),
        alignSelf: "center"
    },
    BottomContainer: {
        height: vs(100),
        // backgroundColor: 'gray',
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "absolute",
        bottom: vs(40),
        width: "100%",
        zIndex: 1
    },
    BottomItem: {
        height: s(110),
        width: "33%",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    IconContainerBlack: {
        width: "100%",
        height: s(70),
        justifyContent: "center",
        alignItems: "center"
    },
    IconContainerPink: {
        width: "100%",
        height: s(70),
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
    IconContainerGray: {
        width: "100%",
        height: s(70),
        justifyContent: "center",
        alignItems: "center"
    },
    IconPosition: {
        position: 'absolute'
    },
    BottomText: {
        fontSize: s(12),
        letterSpacing: s(-0.17),
        fontWeight: "500",
        color: Color.colorWhite
    },
    yourDigitalDebit: {
        marginTop: vs(15),
        marginStart: s(10),
        fontSize: s(10),
        letterSpacing: s(-0.17),
        textTransform: "uppercase",
        fontWeight: "500",
        fontFamily: FontFamily.poppinsMedium,
        color: Color.colorWhite,
        textAlign: "left",
        opacity: 0.2
    },
    UnfreeText: {
        color: Color.colorFirebrick,
        marginTop: vs(20)
    },
    NumberStyle: {
        color: '#fff',
        fontSize: s(12),
        position: "absolute",
        fontFamily: FontFamily.poppinsSemiBold,
        left: s(23)
    },
    ExpirtLabel: {
        position: "absolute",
        top: vs(60),
        right: s(63),
        fontSize: s(10),
        letterSpacing: s(-0.17),
        fontFamily: FontFamily.poppinsRegular,
        color: Color.colorWhite,
        opacity: 0.5
    },
    ExpirtDate: {
        top: vs(75),
        right: s(50),
        fontSize: s(14),
        letterSpacing: s(-0.17),
        fontFamily: FontFamily.poppinsRegular,
        color: '#fff',
        position: "absolute"
    }

});
