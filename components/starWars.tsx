import {useState} from "react";
import {View, Text, SafeAreaView, FlatList} from "react-native";

export const StarWars = () => {
    let [data, setData] = useState({})
    fetch("https://swapi.dev/api/people")
        .then(response => response.json())
        .then(myData => {
            setData(myData)
        })


    return (
        <View>
            <FlatList data={data["results"]} renderItem={({item}) =>
                <Text>{item["name"]}</Text>
            }
            />
            {/*<Text>{data["name"]}</Text>*/}
            {/*<Text>{data["height"]}</Text>*/}
            {/*<Text>{data["mass"]}</Text>*/}
            {/*<Text>{data["eye_color"]}</Text>*/}
            {/*<Text>{data["hair_color"]}</Text>*/}
            {/*<Text>{JSON.stringify(data["results"])}</Text>*/}
        </View>
    );
}