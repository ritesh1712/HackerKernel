import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default homeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#007AFF',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  fabText: {
    fontSize: 36,
    color: 'white',
    fontWeight: '500',
  },
  searchBar: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    height: 40,
    borderRadius: 10,
    marginVertical: 10,
  },
  noProductsText: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 18,
    paddingVertical: 20,
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    backgroundColor: 'rgba(211, 211, 211,0.6)',
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shop: {
    fontSize: 23,
    fontWeight: '700',
    paddingVertical: 20,
  },
  shopInfo: {
    opacity: 0.5,
    fontWeight: '500',
    paddingVertical: 2,
  },
});
