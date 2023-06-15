import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { FloatingLabelInput, setGlobalStyles } from 'react-native-floating-label-input';

export default function App() {
  const [merchantId, setMerchantId] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.input}>
          <MyInput
            label="Merchant ID"
            value={merchantId}
            onChangeText={setMerchantId} />
        </View>
        <View style={styles.input}>
          <MyInput isPassword label="Password" value={password} onChangeText={setPassword} />
        </View>
      </View>
      <View style={styles.footer}>
        <LoginButton>
          SignIn
        </LoginButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  content: {
    marginTop: 24,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  input: {
    marginBottom: 16
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


function MyInput(params) {
  const [isFocused, setIsFocused] = useState(false);

  const containerStyles = {
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderColor: isFocused ? '#28BE6D' : 'rgba(29, 29, 29, 0.1)',
    borderRadius: 8
  };
  return (
    <FloatingLabelInput {...params}
      animationDuration={100}
      containerStyles={containerStyles}
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)} />);
}

function LoginButton({ children }) {
  return (
    <TouchableHighlight style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#28BE6D', borderRadius: 8, padding: 18 }}>
      <Text style={{ color: '#FFFFFF' }}>{children}</Text>
    </TouchableHighlight>
  )
}