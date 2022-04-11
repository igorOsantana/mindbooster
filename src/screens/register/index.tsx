import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Input from '../../components/input';
import Button from '../../components/button';

import { styles } from './styles';
import useAnimatedOnKeyboard from '../../hooks/animatedOnKeyboard';

const INITIAL_TEXT_FONT_SIZE = styles.title.fontSize;

const RegisterScreen: React.FC = () => {
  const { animatedValue: animatedTextFontSize } = useAnimatedOnKeyboard({
    initialValue: INITIAL_TEXT_FONT_SIZE,
    toValue: INITIAL_TEXT_FONT_SIZE / 1.5,
  });

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
            <Button style={styles.button}>Cadastrar</Button>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default RegisterScreen;
