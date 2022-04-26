import { DrawerScreenProps } from '@react-navigation/drawer';

export type HomeDrawerParamList = {
  Collections: undefined;
};

export type CollectionsNavigatorProps = DrawerScreenProps<
  HomeDrawerParamList,
  'Collections'
>;
