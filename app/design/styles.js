import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colorCode} from './colorCode';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  row: {
    flexDirection: 'row',
  },
  btw: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  end: {
    alignItems: 'flex-end',
  },
  card: {
    height: Platform.OS === 'ios' ? hp(20) : hp(21),
    backgroundColor: colorCode.brand,
    padding: hp(2),
  },
  content: {
    height: Platform.OS === 'ios' ? hp(80) : hp(81),
    backgroundColor: colorCode.bg,
    paddingTop: hp(2),
  },
  searchText: {
    width: wp(95),
    paddingLeft: Platform.OS === 'ios' ? 10 : 15,
    color: '#000',
    fontWeight: 'bold',
  },
  list: {
    backgroundColor: colorCode.w,
    borderRadius: hp(1),
    margin: hp(1),
    width: wp(95),
    padding: hp(2),
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lg: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colorCode.text,
  },
  icon: {
    fontSize: 72,
    color: '#0c9',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 50,
    right: 20,
    zIndex: 10,
    elevation: 5
  },
  xs: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  sm: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#8d8ea8',
  },
  intro: {
    fontSize: 18,
    color: '#8d8ea8',
    padding: wp(5),
  },
  white: {
    color: colorCode.w,
  },
  btn: {
    fontSize: Platform.OS === 'ios' ? hp(2.4) : hp(3),
    paddingTop: 10,
    fontWeight: 'bold',
    color: colorCode.w,
    textAlign: 'center',
  },
  removeText: {
    fontSize: 10,
    color: 'tomato',
    textTransform: 'uppercase',
  },
  modal: {
    height: hp(30),
    backgroundColor: colorCode.dark,
    position: 'absolute',
    bottom: 0,
    width: wp(100),
    borderTopLeftRadius: wp(50),
    borderTopRightRadius: wp(50),
    borderBottomColor: colorCode.bg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: hp(4),
    fontSize: Platform.OS === 'ios' ? hp(2.4) : hp(3),
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colorCode.bg,
    width: wp(80),
    height: hp(10),
    color: '#fff',
    borderRadius: hp(2),
    alignSelf: 'center',
  },
  shape: {
    width: hp(14),
    height: hp(14),
    borderRadius: hp(7),
    backgroundColor: colorCode.dark,
    position: 'absolute',
    bottom: -hp(5),
    left: -hp(4),
    zIndex: -100,
  },
  shapes: {
    width: hp(30),
    height: hp(30),
    borderRadius: hp(15),
    backgroundColor: colorCode.dark,
    position: 'absolute',
    right: -hp(10),
    top: -hp(2),
    opacity: 0.3,
  },
  search: {
    position: 'absolute',
    width: '95%',
    bottom: 10,
    left: 20,
    borderRadius: 5,
    zIndex: 1000,
    borderColor: '#fff',
    borderWidth: 2,
    height: Platform.OS === 'ios' ? hp(5) : hp(6),
    paddingTop: Platform.OS === 'ios' ? hp(1.4) : hp(0),
  },
});
