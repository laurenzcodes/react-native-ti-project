/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Button, Image, Text, View} from 'react-native';

import stopIcon from './assets/stop.png';
import startIcon from './assets/start.png';

const LogItem = () => {
  return (
    <View style={{}}>
      {/* Display Image depending on action */}
      <Image style={{width: 50, height: 50}} source={stopIcon} />
      <Image style={{width: 50, height: 50}} source={startIcon} />

      {/* Action type */}
      <Text>Log action label</Text>
    </View>
  );
};

const Actionlog = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Actionlog</Text>
      <View>
        {/* List with actions */}
        <LogItem />
      </View>

      {/* Display stopwatch seconds */}
      <Text>{0}</Text>

      {/* Timer controls */}
      <View>
        <Button title="Start" />
        <Button title="Pause" />
        <Button title="Reset" />
      </View>
    </View>
  );
};

export default Actionlog;
