import { StyleSheet, useColorScheme, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          <Icon name="home" size={70} color="purple" />;
          <Icon name="skip-next" size={70} color="purple" />;
          <Icon name="new-releases" size={70} color="olive" />;
          <Icon name="fast-forward" size={70} color="orange" />;
          <Icon name="emoji-symbols" size={70} color="green" />;
          <Icon name="emoji-nature" size={70} color="fuchsia" />;
          <Icon name="man" size={70} color="magenta" />;
          <Icon name="luggage" size={70} color="pink" />;
          <Icon name="luggage" size={70} color="violet" />;
          <Icon name="luggage" size={70} color="tan" />;
          <Icon name="luggage" size={70} color="blue" />;
          <Icon name="luggage" size={70} color="indigo" />;
          <Icon name="luggage" size={70} color="red" />;
          <Icon name="luggage" size={70} color="gray" />;
          <Icon name="luggage" size={70} color="grey" />;
          <Icon name="luggage" size={70} color="cyan" />;
          <Icon name="luggage" size={70} color="maroon" />;
          <Icon name="cruelty-free" size={70} color="teal" />;
        </Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
