import { useEffect, useState } from "react";
import { View } from "react-native";

export default function Clock() {
    let [time, setTime] = useState('00:00');
    let tick = 0

    //null: first time only
    //[]: On every render
    //[a,b]: Watch for changes
    //return: On unmount
    useEffect(() => {
        tick = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            console.info('tick');
        }, 1000);
        return () => {
            clearInterval(tick);
        }
    }, []);

    return (
        <View>
            <Text>
                {time}
            </Text>
        </View>
    )
}