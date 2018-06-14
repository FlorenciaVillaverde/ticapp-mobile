import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ text }) => {
  return <TouchableOpacity style ={styles.button}>
    <Text style ={styles.buttonText}>{text}</Text>
    onPress={}
  </TouchableOpacity>
};


const styles = {
  button: {
    backgroundColor: '#AF2C78',
    //fontSize: 30,
    margin: 150,
    borderRadius: 25,
    borderWidth: 0.5,
    padding: 30,
    textAlign: 'center',
  },
buttonText: {
    color: 'blue',
    marginLeft: 160,
    fontWeight: 'bold',

  }

};

export default Button;
