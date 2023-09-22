import {useState} from "react";
import {View, Text} from "react-native";

export const StarWars = () => {
    let [data, setData] = useState({})
    fetch("https://swapi.dev/api/people/1")
        .then(response=> response.json())
        .then(myData=>{
            setData(myData)
        })


    return (
        <View>
            <Text>{data["name"]}</Text>
            <Text>{data["height"]}</Text>
            <Text>{data["mass"]}</Text>
            <Text>{data["eye_color"]}</Text>
            <Text>{data["hair_color"]}</Text>
        </View>
    );
}