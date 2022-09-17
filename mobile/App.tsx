import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity , View } from 'react-native';

interface ButtonProps{
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        React native!
      </Text>

      <Button title='Send 1'/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5
  }
});
