import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {Surface, Text} from 'react-native-paper';

const Card = ({data}) => {
  return (
    <View style={styles.container}>
      <Surface style={styles.surface} elevation={1}>
        <Image
          style={{width: '50%', height: '100%'}}
          source={{uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`}}
        />
        <View style={styles.contentCard}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>{data.title}</Text>
          <Text style={{textAlign: 'center'}}>{data.overview}</Text>
        </View>
      </Surface>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 300,
  },
  surface: {padding: 20, height: '100%', display: 'flex', flexDirection: 'row'},
  contentCard: {justifyContent: 'center', alignItems: 'center', flex: 1},
});
