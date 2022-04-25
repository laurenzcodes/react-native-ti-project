/* eslint-disable no-plusplus */
/* eslint-disable no-var */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';

import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const TestComponent: React.FC<{
  data: any;
}> = (props) => {
  var count = 0;
  return (
    <View style={{ flex: 1 }}>
      <Text style={componentStyles.text}>{count}</Text>
      <IncreaseCounter onPress={() => count++}>Increase counter</IncreaseCounter>
      <Text>{props.data.text}</Text>
    </View>
  );
};

const componentStyles = {
  text: {
    color: '#333',
    fontSize: 12,
  },
};
const IncreaseCounter = styled.TouchableOpacity`
  background-color: #ff9500;
  width: 100px;
  height: 50px;
`;

export default TestComponent;
