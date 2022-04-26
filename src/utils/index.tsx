export const getCollectionRouteName = (
  routeName: string | undefined,
): string => {
  if (routeName) {
    return `Coleção - ${routeName}`;
  }
  return 'Minhas coleções';
};
