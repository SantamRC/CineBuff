import {StyleSheet, Text, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Trending from './Services/Trending';
import Card from './Components/Card';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Trending()
      .then(data => setData(data))
      .catch(() => console.log('Got a Request Error'));
  }, []);
  return (
    <ScrollView>
      <Text style={{textAlign: 'center', fontSize: 30}}>Trending Movies</Text>
      {data.map(item => (
        <Card key={item.id} data={item} />
      ))}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({});
