import { string, shape } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function CircleButton(props) {
  const { style, name } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <Feather name={name} size={32} color="white" />
    </View>
  );
}

CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
};

CircleButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    backgroundColor: '#2E74D5',
    borderRadius: 32,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, Height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonIcon: {
    color: 'white',
    fontSize: 40,
    lineHeight: 40,
  },
});
