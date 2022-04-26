import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  color?: string;
};

const Loader: React.FC<Props> = ({ color }) => {
  const styles = makeStyles();
  const { colors } = useTheme();
  const colorToUse = color || colors.primary;

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.loader}>
        <ActivityIndicator animating={true} color={colorToUse} />
      </View>
    </SafeAreaView>
  );
};

export default Loader;

const makeStyles = () => {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: -1,
      opacity: 0.5,
    },
    loader: {
      width: Dimensions.get('window').width / 4,
      height: Dimensions.get('window').height / 4,
      zIndex: 1,
    },
  });
};
