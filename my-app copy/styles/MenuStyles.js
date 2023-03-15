import { StyleSheet } from 'react-native';

const MenuStyles = StyleSheet.create({
  breadcrumbs: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  breadcrumbsText: {
    fontSize: 16,
    color: '#333',
  },
  menu: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    marginRight: 20,
  },
});

export default MenuStyles;
