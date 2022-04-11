import React from 'react';
import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

type FabPosition = 'left' | 'right';

type Props = React.ComponentProps<typeof FAB> & {
  position?: FabPosition;
};

const Fab: React.FC<Props> = ({ position = 'right', ...props }) => {
  const { colors } = useTheme();
  const styles = makeStyles({ position, bgColor: colors.primary });
  const fabStyle = { ...styles.fab, ...Object(props.style) };

  return <FAB {...props} style={fabStyle} />;
};

type StyleProps = {
  position: FabPosition;
  bgColor: string;
};

const makeStyles = ({ position, bgColor }: StyleProps) => {
  const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      backgroundColor: bgColor,
      margin: 16,
      bottom: 30,
      right: 20,
    },
  });
  if (position === 'left') {
    return { ...styles, fab: { ...styles.fab, left: 30, right: undefined } };
  }
  return styles;
};

export default Fab;
