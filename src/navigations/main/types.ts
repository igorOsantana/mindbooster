import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainNativeStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

export type HomeNavigatorProps = NativeStackScreenProps<
  MainNativeStackParamList,
  'Home'
>;
