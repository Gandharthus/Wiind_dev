import { StyleSheet } from 'react-native';
import breakpoints from './breakpoints';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tasksContainer: {
    alignItems: 'center',
  },
  taskButton: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  taskDescription: {
    fontSize: 14,
  },
  menuButton: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },




  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#ff9900',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 40,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  menuItem: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    backgroundColor: '#ff9900',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  // apply different styles for smaller screens
  [breakpoints.sm]: {
    header: {
      height: 80,
      paddingHorizontal: 10,
    },
    logo: {
      width: 80,
      height: 30,
    },
    menuItem: {
      fontSize: 16,
    },
    card: {
      padding: 10,
    },
    title: {
      fontSize: 20,
      marginBottom: 5,
    },
    description: {
      fontSize: 16,
      marginBottom: 5,
    },
    date: {
      fontSize: 12,
    },
    button: {
      padding: 5,
      marginTop: 5,
    },
    buttonText: {
      fontSize: 14,
    },
  },
});

export default styles;

