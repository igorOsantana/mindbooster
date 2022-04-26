import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { IconButton } from 'react-native-paper';

import Avatar from '../avatar';
import { useTheme } from '@react-navigation/native';
import useThemeApp from '../../hooks/themeApp';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const { colors } = useTheme();
  const styles = makeStyles({ bgColor: colors.background, color: colors.text });

  const handleLogout = () => {
    props.navigation.navigate('Login');
  };

  const { toggleTheme } = useThemeApp();

  return (
    <DrawerContentScrollView {...props} style={styles.wrapper}>
      <Avatar />
      <View style={styles.divider} />
      <DrawerItemList {...props} />
      <DrawerItem
        {...props}
        label="Trocar tema"
        onPress={toggleTheme}
        icon={({ color }) => <IconButton icon="brightness-6" color={color} />}
      />
      <DrawerItem
        {...props}
        label="Logout"
        onPress={handleLogout}
        icon={({ color }) => <IconButton icon="chevron-left" color={color} />}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

type StyleProps = {
  bgColor: string;
  color: string;
};

const makeStyles = ({ bgColor, color }: StyleProps) => {
  return StyleSheet.create({
    wrapper: {
      backgroundColor: bgColor,
    },
    divider: {
      height: 1,
      backgroundColor: color,
      marginHorizontal: 20,
      marginBottom: 20,
    },
  });
};
