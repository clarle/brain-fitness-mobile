import React, { useCallback } from 'react';
import { AsyncStorage, StyleSheet, Text, View, Image } from 'react-native';
import { Header } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import { Icon, Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24283E'
  },
});

export default function LessonScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ 
          icon: 'menu',
          color: '#fff',
          onPress: () => navigation.toggleDrawer()
        }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        backgroundColor='#24283E'
      />
      <View style={{marginTop: "10%", marginBottom: "5%", flex: 1, alignItems: 'center'}}>
        <Progress.Bar progress={0.1} width={350}/>
        <View style={{
          backgroundColor: 'white',
          marginTop: "5%",
          marginBottom: "5%",
          flexDirection: 'row',
          borderRadius: 10,
          height: "100%"
        }}>
          <View style={{flex: 0.90, padding: 20}}>
            <View style={{flexDirection: 'row', justifyContent: "flex-end"}}>
              <Text style={{color: 'green'}}>72</Text>
              <Text> </Text>
              <Icon name="thumb-up" color="green"></Icon>
            </View>
            <View style={{marginTop: "15%", flexDirection: 'row', justifyContent: 'center'}}>
              <Image style={{width: 200, height: 200, borderRadius: 100}} 
                source={{uri: 'http://placekitten.com/g/200/200'}}
              ></Image>
            </View>
            <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>EXERCIȚII DE DICȚEE</Text>
            </View>
            <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>PENTRU COPIII DU DISLEXIE</Text>
            </View>
            <View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, color: "green"}}>Metode interactive de predare</Text>
            </View>
            <View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'center'}}>
              <Icon name="query-builder" color="#5087bd"></Icon>
              <Text> </Text>
              <Text style={{color: '#5087bd'}}>7 min</Text>
            </View>
            <View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'center'}}>
              <Button containerStyle={{width: 300, height: 100}} title="ÎNCEPEȚI LECȚIA"></Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
