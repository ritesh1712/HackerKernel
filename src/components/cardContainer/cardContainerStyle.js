import { StyleSheet } from 'react-native';

const cardContainerStyle = StyleSheet.create({
  container: {
    paddingVertical: 20,
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
  },
  showAllText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'blue',
  },
  productCardContainer: {
    width: '48%',
    marginVertical: 5,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default cardContainerStyle;
