import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootAuthStackParamList } from '../../navigations/auth/types';

export type LoginScreenNavigationProp = NativeStackScreenProps<
  RootAuthStackParamList,
  'Login'
>;
