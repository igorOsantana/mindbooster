import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Animated,
} from 'react-native';

import Input from '../../components/input';
import Button from '../../components/button';

import { styles } from './styles';
import useAnimatedOnKeyboard from '../../hooks/animatedOnKeyboard';

const INITIAL_TEXT_TRANSLATE_Y = 0;

const RegisterScreen: React.FC = () => {
  const { animatedValue: animatedTextTranslateY } = useAnimatedOnKeyboard({
    initialValue: INITIAL_TEXT_TRANSLATE_Y,
    toValue: 40,
  });

  const animatedTextStyle = {
    ...styles.title,
    transform: [{ translateY: animatedTextTranslateY }],
  };

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>
          <View style={styles.paddingSide}>
            <Animated.Text style={animatedTextStyle}>
              Preencha os dados do seu cadastro
            </Animated.Text>
            <Input label="Email" style={styles.input} />
            <Input label="Senha" password style={styles.input} />
            <Input label="Repetir senha" password style={styles.input} />
            <Button>Cadastrar</Button>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default RegisterScreen;
