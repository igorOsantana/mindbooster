import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

import { styles } from './styles';

type Props = React.ComponentProps<typeof TextInput> & {
  password?: boolean;
};

const Input: React.FC<Props> = ({
  children,
  style,
  password = false,
  ...props
}) => {
  const inputStyle = style
    ? { ...styles.input, ...Object(style) }
    : styles.input;

  const [hideText, setHideText] = useState(password);

  const toggleHiddenText = () => {
    setHideText(prevState => !prevState);
  };

  const rightIcon = password ? (
    <TextInput.Icon
      forceTextInputFocus={false}
      name={hideText ? 'eye-off' : 'eye'}
      onPress={toggleHiddenText}
    />
  ) : undefined;

  return (
    <TextInput
      style={inputStyle}
      selectionColor="#fff"
      underlineColor="transparent"
      secureTextEntry={hideText}
      right={rightIcon}
      {...props}>
      {children}
    </TextInput>
  );
};

export default Input;
