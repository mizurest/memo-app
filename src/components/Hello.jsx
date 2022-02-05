import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { shape, string } from 'prop-types';

function Hello(props) {
  const { children, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>{`Hello ${children}`}</Text>
    </View>
  );
}

Hello.propTypes = {
  children: string.isRequired,
  style: shape(),
};

Hello.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    backgroundColor: 'teal',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20,
  },
});

export default Hello;
