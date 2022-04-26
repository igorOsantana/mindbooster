import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Platform,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Input from '../../components/input';
import Button from '../../components/button';

import useAnimatedOnKeyboard from '../../hooks/animatedOnKeyboard';
import { useTheme } from '@react-navigation/native';

const RegisterScreen: React.FC = () => {
  const { animatedValue: animatedTextFontSize } = useAnimatedOnKeyboard({
    initialValue: INITIAL_TEXT_FONT_SIZE,
    toValue: INITIAL_TEXT_FONT_SIZE / 1.5,
  });

  const {
    colors: { text },
  } = useTheme();
  const styles = makeStyles(text);

  const animatedTextStyle = {
    ...styles.title,
    fontSize: animatedTextFontSize,
  };

  return (
    <SafeAreaView style={styles.flex1}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={10}>
          <View style={styles.wrapper}>
            <Animated.Text style={animatedTextStyle}>
              Preencha os dados do seu cadastro
            </Animated.Text>
            <View>
              <Input label="Email" style={styles.input} />
              <Input label="Senha" password style={styles.input} />
              <Input label="Repetir senha" password style={styles.input} />
            </View>
            <Button>Cadastrar</Button>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const makeStyles = (color?: string) =>
  StyleSheet.create({
    flex1: {
      flex: 1,
    },
    wrapper: {
      paddingHorizontal: 40,
      justifyContent: 'space-evenly',
      height: '100%',
    },
    title: {
      fontSize: 38,
      fontWeight: 'bold',
      color,
      marginTop: 60,
    },
    input: {
      marginBottom: 20,
    },
  });

const INITIAL_TEXT_FONT_SIZE = makeStyles().title.fontSize;
