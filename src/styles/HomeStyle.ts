import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'transparent',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 12,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.6)',
    marginBottom: 20,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  button: {
    backgroundColor: '#00c896',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 40,
    alignSelf: 'flex-start',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 6,
  },
  buttonText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'PlusJakartaSans-Bold',
  },
});

export default styles;