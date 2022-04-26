/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Button, Image, Text, View} from 'react-native';

import stopIcon from './assets/stop.png';
import startIcon from './assets/start.png';

const LogItem = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      {/* Display Image depending on action */}
      <Image source={stopIcon} />
      <Image source={startIcon} />
      <Text>{/* Action type */}</Text>
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
      <Text>{0}</Text> {/* Display stopwatch seconds */}
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
