/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as wpActions from '../store/actions';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from '../design/styles';
import moment from 'moment';
import {colorCode} from '../design/colorCode';

const Logic = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.appData.list);
  const userNameValue = useSelector((state) => state.appData.name);
  const [show, setShow] = useState(false);
  const [showName, setShowName] = useState(true);
  const [item, setItem] = useState('');
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');

  const saveData = () => {
    if (item) {
      const date = moment(new Date());
      const obj = {item, date};
      dispatch(wpActions.saveList(obj));
      setItem('');
      setShow(false);
    } else {
      Alert.alert('nothing added');
    }
  };

  const removeItem = (id) => {
    dispatch(wpActions.removeItem(id));
    setToggle(!toggle);
  };

  const saveUserName = () => {
    dispatch(wpActions.name(userName));
  };

  const renderItem = (itemValue) => {
    return (
      <Animatable.View
        animation="flipInX"
        easing="ease"
        iterationCount={1}
        >
        <View style={[styles.list, styles.row, styles.btw]}>
          <Text style={styles.lg}>{itemValue.item.item}</Text>
          <View style={styles.end}>
            <TouchableOpacity onPress={() => removeItem(itemValue.item.date)}>
              <Text style={styles.removeText}>move to trash</Text>
            </TouchableOpacity>
            <Text style={styles.lg}>
              {moment(itemValue.item.date).fromNow()}
            </Text>
          </View>
        </View>
      </Animatable.View>
    );
  };

  const searchArray =
    data &&
    data.filter((items) => {
      if (name === '') {
        return items;
      }
      if (items.item.toLowerCase().includes(name.toLowerCase())) {
        return items;
      }
    });

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colorCode.brand}]}>
      <View style={styles.card}>
        <View style={styles.shape} />
        <View style={[styles.row, styles.btw]}>
          <Animatable.View
            animation="fadeIn"
            easing="ease-in"
            iterationCount={1}>
            <Text style={[styles.title, styles.white]}>
              {moment().format('a') === 'am' ? 'Good Morning' : 'Good Evening'}{' '}
              {userNameValue}
            </Text>
            <Text style={[styles.w, styles.xs]}>
              {moment().format('MMMM DD YYYY')}
            </Text>
          </Animatable.View>
          <Text style={[styles.sm,styles.white]}>Total Items: {data.length}</Text>
        </View>
        {!show ? (
          <View style={styles.search}>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholderTextColor={colorCode.w}
              placeholder="Search an activity here... "
              style={styles.searchText}
            />
          </View>
        ) : null}
      </View>
      <View style={styles.content}>
        <View style={styles.shapes} />
        <Text style={styles.icon} onPress={() => { setShow(!show);}}> + </Text>
        {data && data.length ? (
          <FlatList
            renderItem={(id) => renderItem(id)}
            data={searchArray}
            keyExtractor={(items, index) => index.toString()}
            contentContainerStyle={{paddingBottom: 140}}
          />
        ) : (
          <Animatable.View
            animation="fadeIn"
            easing="ease-in"
            iterationCount={1}
            style={styles.center}>
            <Text style={[styles.title,{color: colorCode.text}]}>Welcome to Since</Text>
            <Text style={styles.intro}>
              Add any activity which you tend to forget over time and since will
              store the date and time for your reference. Go Ahead, Create your
              first activity by clicking on the add icon.
            </Text>
          </Animatable.View>
        )}
      </View>
      <Modal animationType="slide" transparent={true} visible={show}>
        <View style={styles.modal}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setItem(text)}
            value={item}
            placeholderTextColor="#fff"
            placeholder="Add activity here .."
            maxLength={20}
            onSubmitEditing={() => saveData()}
            returnKeyLabel="done"
          />
          <Animatable.View
            animation="fadeIn"
            easing="ease-in"
            iterationCount={1}>
            {!item ? (
              <TouchableOpacity
                onPress={() => {
                  setShow(!show);
                }}>
                <Text style={styles.btn}>Cancel</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => saveData()}>
                <Text style={styles.btn}>Save</Text>
              </TouchableOpacity>
            )}
          </Animatable.View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showName && !userNameValue}>
        <View style={styles.modal}>
          <Text style={[styles.title, styles.white]}>Let's start !</Text>
          <TextInput
            value={userName}
            onChangeText={(text) => setUserName(text)}
            placeholder="Add your username here..."
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: 20,
              paddingVertical: 20,
            }}
            maxLength={8}
            onSubmitEditing={() => saveUserName()}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Logic;
