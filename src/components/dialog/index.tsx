import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Portal,
  Dialog as DialogPaper,
  Paragraph,
  Button,
} from 'react-native-paper';
import { useTheme } from '@react-navigation/native';

const { Title, Content, Actions } = DialogPaper;

type Props = React.ComponentProps<typeof DialogPaper> & {
  title: string;
  cancelText?: string;
  okText?: string;
  danger?: boolean;
  onOk: () => void;
};

const Dialog: React.FC<Props> = props => {
  const { colors } = useTheme();
  const styles = makeStyles({
    bgColor: colors.background,
    color: colors.text,
    danger: props.danger,
  });

  const dialogStyle = { ...styles.wrapper, ...Object(props.style) };

  return (
    <Portal>
      <DialogPaper {...props} style={dialogStyle}>
        <Title style={styles.title}>{props.title}</Title>
        <Content>
          <Paragraph style={styles.content}>{props.children}</Paragraph>
        </Content>
        <Actions>
          <Button onPress={props.onDismiss} color={styles.cancelBtn.color}>
            {props.cancelText || 'Cancelar'}
          </Button>
          <Button onPress={props.onOk} color={styles.okBtn.color}>
            {props.okText || 'Sim'}
          </Button>
        </Actions>
      </DialogPaper>
    </Portal>
  );
};

export default Dialog;

type StyleProps = {
  bgColor: string;
  color: string;
  danger?: boolean;
};

const makeStyles = ({ bgColor, color, danger }: StyleProps) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: bgColor,
      marginHorizontal: 50,
      borderRadius: 5,
    },
    title: {
      color,
    },
    content: {
      color,
    },
    cancelBtn: {
      color,
    },
    okBtn: {
      color: danger ? '#f00' : color,
    },
  });
