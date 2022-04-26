import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Input from '../../components/input';
import Button from '../../components/button';
import Logo from '../../components/logo';
import Link from '../../components/link';

import useAnimatedOnKeyboard from '../../hooks/animatedOnKeyboard';

import { LoginScreenNavigationProp } from './types';
import { useKeyboard } from '@react-native-community/hooks';
import { useTheme } from '@react-navigation/native';

const INITIAL_VIEW_SCALE = 1;
const INITIAL_VIEW_TRANSLATE_Y = 0;

const LoginScreen: React.FC<LoginScreenNavigationProp> = ({ navigation }) => {
  const { animatedValue: animatedViewScale } = useAnimatedOnKeyboard({
    initialValue: INITIAL_VIEW_SCALE,
    toValue: 0.75,
  });

  const { animatedValue: animatedViewTranslateY } = useAnimatedOnKeyboard({
    initialValue: INITIAL_VIEW_TRANSLATE_Y,
    toValue: 60,
  });
  const {
    colors: { text },
  } = useTheme();

  const styles = makeStyles({ color: text });

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  const goToCollection = () => {
    navigation.navigate('Home');
  };

  const animatedViewStyle = {
    ...styles.header,
    transform: [
      { scale: animatedViewScale },
      { translateY: animatedViewTranslateY },
    ],
  };

  const { keyboardHeight } = useKeyboard();
  const keyboardOffset = keyboardHeight / 10;

  return (
    <SafeAreaView style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior="position"
          contentContainerStyle={styles.paddingSide}
          keyboardVerticalOffset={keyboardOffset}>
          <Animated.View style={animatedViewStyle}>
            <Logo size="medium" />
            <Text style={styles.brandText}>MindBooster</Text>
          </Animated.View>
          <Input label="Email" style={styles.input} />
          <Input label="Senha" password style={styles.input} />
          <View style={styles.link}>
            <Link>Esqueci a senha</Link>
          </View>
          <Button onPress={goToCollection}>Entrar</Button>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <View style={{ ...styles.footer, ...styles.paddingSide }}>
        <Button secondary onPress={goToRegister}>
          Cadastrar
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const makeStyles = ({ color }: { color: string }) =>
  StyleSheet.create({
    header: {
      alignItems: 'center',
    },
    brandText: {
      fontSize: 50,
      fontWeight: 'bold',
      color,
      paddingBottom: 40,
    },
    flex1: {
      flex: 1,
    },
    wrapper: {
      flex: 1,
      justifyContent: 'space-between',
    },
    paddingSide: {
      paddingHorizontal: 40,
    },
    input: {
      marginBottom: 20,
    },
    link: {
      alignItems: 'flex-end',
      marginTop: 5,
      marginBottom: 50,
    },
    footer: {
      width: '100%',
      marginBottom: 50,
    },
  });
