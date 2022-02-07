import { string, shape, func } from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Icon from './Icon';

export default function CircleButton(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Icon name={name} size={40} color="white" />
    </TouchableOpacity>
  );
}

CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

CircleButton.defaultProps = {
  style: null,
  onPress: null,
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
