import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Collection = {
  id: string;
  name: string;
};

export type CollectionsNativeStackParamList = {
  MyCollections: undefined;
  Collection: Collection;
};

export type MyCollectionsScreenProps = NativeStackScreenProps<
  CollectionsNativeStackParamList,
  'MyCollections'
>;

export type CollectionScreenProps = NativeStackScreenProps<
  CollectionsNativeStackParamList,
  'Collection'
>;
