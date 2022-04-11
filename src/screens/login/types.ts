import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootAuthStackParamList } from '../../navigations/main/types';

export type LoginScreenNavigationProp = NativeStackScreenProps<
  RootAuthStackParamList,
  'Login'
>;
