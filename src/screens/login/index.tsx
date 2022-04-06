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
import Logo from '../../components/logo';
import Link from '../../components/link';

import { LoginScreenNavigationProp } from './types';
import { styles } from './styles';
import useAnimatedOnKeyboard from '../../hooks/animatedOnKeyboard';

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

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  const animatedViewStyle = {
    ...styles.header,
    transform: [
      { scale: animatedViewScale },
      { translateY: animatedViewTranslateY },
    ],
  };

  return (
    <SafeAreaView style={styles.flex1}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>
          <Animated.View style={animatedViewStyle}>
            <Logo size="medium" />
            <Animated.Text style={styles.brandText}>MindBooster</Animated.Text>
          </Animated.View>
          <View style={styles.paddingSide}>
            <Input label="Email" style={styles.input} />
            <Input label="Senha" password style={styles.input} />
            <View style={styles.link}>
              <Link>Esqueci a senha</Link>
            </View>
            <Button>Entrar</Button>
          </View>
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
