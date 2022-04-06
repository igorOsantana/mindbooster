import { useEffect, useState, useCallback } from 'react';
import { Keyboard, KeyboardEvent, Animated } from 'react-native';

type AnimatedOnKeyboardProps = {
  initialValue: number;
  toValue: number;
};

const useAnimatedOnKeyboard = ({
  initialValue,
  toValue,
}: AnimatedOnKeyboardProps) => {
  const [animatedValue] = useState(new Animated.Value(initialValue));

  const doAnimation = useCallback(
    (event: KeyboardEvent) => {
      Animated.timing(animatedValue, {
        duration: event.duration,
        toValue,
        useNativeDriver: false,
      }).start();
    },
    [animatedValue, toValue],
  );

  const dismissAnimation = useCallback(
    (event: KeyboardEvent) => {
      Animated.timing(animatedValue, {
        duration: event.duration,
        toValue: initialValue,
        useNativeDriver: false,
      }).start();
    },
    [animatedValue, initialValue],
  );

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardWillShow', event => {
      doAnimation(event);
    });
    const hideSubscription = Keyboard.addListener('keyboardWillHide', event => {
      dismissAnimation(event);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [doAnimation, dismissAnimation]);

  return {
    animatedValue,
  };
};

export default useAnimatedOnKeyboard;
