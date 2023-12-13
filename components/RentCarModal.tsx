import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Modal,
} from "react-native";
import React, {SetStateAction, useContext, useState} from "react";
import DatePicker from "react-native-modern-datepicker";
import {getFormatedDate} from "react-native-modern-datepicker";
import {ThemeContext} from "./ThemeContext";
import {UserContext} from "./UserContext";
import backendHandler from "../services/BackendHandler";

export function RentCarModal({car, navigation}: any) {
    const theme = useContext(ThemeContext).theme
    const userContext = useContext(UserContext);

    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const [openEndDatePicker, setOpenEndDatePicker] = useState(false);
    const startDate = getFormatedDate(
        new Date(),
        "YYYY/MM/DD"
    );
    const [selectedStartDate, setSelectedStartDate] = useState(startDate);
    const [selectedEndDate, setSelectedEndDate] = useState(startDate);
    const [startedDate, setStartedDate] = useState(startDate);
    const [endedDate, setEndedDate] = useState(startDate);

    function handleChangeStartDate(date: SetStateAction<string>) {
        setStartedDate(date);
    }

    function handleChangeEndDate(date: SetStateAction<string>) {
        setEndedDate(date);
    }

    const handleOnPressStartDate = () => {
        setOpenStartDatePicker(!openStartDatePicker);
    };

    const handleOnPressEndDate = () => {
        setOpenEndDatePicker(!openEndDatePicker);
    };

    const styles = StyleSheet.create({

        title: {
            fontSize: 30,
            color: theme.onBackgroundColor,
        },
        text: {
            fontSize: 14,
            color: theme.onBackgroundColor,
            marginTop: 15,
        },
        inputButton: {
            borderWidth: 1,
            borderRadius: 8,
            borderColor: theme.onBackgroundColor,
            color: theme.onBackgroundColor,
            paddingVertical: 12,
            paddingLeft: 8,
            fontSize: 18,
            justifyContent: "center",
            marginTop: 14,
        },
        inputButtonText: {
            fontSize: 14,
            color: theme.onBackgroundColor,
        },
        closeButton: {
            color: theme.onBackgroundColor
        },
        submitButton: {
            backgroundColor: theme.primaryColor,
            paddingVertical: 12,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            marginVertical: 16,
        },
        submitButtonText: {
            color: theme.onPrimaryColor
        },
        centeredView: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },
        modalView: {
            backgroundColor: theme.backgroundColor,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            padding: 35,
            width: "90%",
            shadowColor: theme.onBackgroundColor,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
    });

    return (
        <View style={{backgroundColor: theme.backgroundColor}}>
            <Text style={styles.title}>Rent the {car.model}!</Text>
            <Text style={styles.text}>Please select the period you want to rent the car</Text>
            <View>
                <View>
                    <View>
                        <Text style={styles.text}>Select start date:</Text>
                        <TouchableOpacity
                            style={styles.inputButton}
                            onPress={handleOnPressStartDate}
                        >
                            <Text style={styles.inputButtonText}>{selectedStartDate}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={openStartDatePicker}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <DatePicker
                                mode="calendar"
                                minimumDate={startDate}
                                selected={startedDate}
                                onDateChange={handleChangeStartDate}
                                onSelectedChange={(date) => setSelectedStartDate(date)}
                                options={{
                                    backgroundColor: theme.backgroundColor.toString(),
                                    textHeaderColor: theme.primaryColor.toString(),
                                    textDefaultColor: theme.onBackgroundColor.toString(),
                                    selectedTextColor: theme.onPrimaryColor.toString(),
                                    mainColor: theme.primaryColor.toString(),
                                    textSecondaryColor: theme.onBackgroundColor.toString(),
                                    borderColor: theme.backgroundColor.toString(),
                                }}
                            />
                            <TouchableOpacity onPress={handleOnPressStartDate}>
                                <Text style={styles.closeButton}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
            <View>
                <View>
                    <View>
                        <Text style={styles.text}>Select end date:</Text>
                        <TouchableOpacity
                            style={styles.inputButton}
                            onPress={handleOnPressEndDate}
                        >
                            <Text style={styles.inputButtonText}>{selectedEndDate}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={openEndDatePicker}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <DatePicker
                                mode="calendar"
                                minimumDate={selectedStartDate}
                                selected={endedDate}
                                onDateChange={handleChangeEndDate}
                                onSelectedChange={(date) => setSelectedEndDate(date)}
                                options={{
                                    backgroundColor: theme.backgroundColor.toString(),
                                    textHeaderColor: theme.primaryColor.toString(),
                                    textDefaultColor: theme.onBackgroundColor.toString(),
                                    selectedTextColor: theme.onPrimaryColor.toString(),
                                    mainColor: theme.primaryColor.toString(),
                                    textSecondaryColor: theme.onBackgroundColor.toString(),
                                    borderColor: theme.backgroundColor.toString(),
                                }}
                            />
                            <TouchableOpacity onPress={handleOnPressEndDate}>
                                <Text style={styles.closeButton}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => {
                    backendHandler.postRental(
                        userContext.user.id.toString(),
                        car.id.toString(),
                        startedDate,
                        endedDate,
                    )
                    navigation.navigate('MyRentalsScreen')
                }}
            >
                <Text style={styles.submitButtonText}>RENT</Text>
            </TouchableOpacity>
        </View>
    );
}