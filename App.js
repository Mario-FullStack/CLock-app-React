import { useState } from "react"
import { Button, View } from "react-native";
import Clock from "./components/Clock";

const App = () => {
    const [on, setOn] = useState(false);

    const toogleClock = () => {
        setOn(!on);
    };

    return (
        <View style={this.styles.container}>
            {on && <Clock/>}
            <Button
                title={`Turn the clock ${on? 'Off' : 'On'}`}
                onPress={toogleClock}
            />
            <StatusBar style="dark" />
        </View>
    );
}

styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default App;