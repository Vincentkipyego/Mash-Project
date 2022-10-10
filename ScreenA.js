import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function ScreenA ({ navigation }){

    const onpressHandler =()=>{
      navigation.navigate('Screen_B')
    }
  
    return(
      <View style= {styles.body}>
      <Text>
      first screen
      </Text>
      <Pressable style= {styles.button}
      onPress={onpressHandler}>
      <Text style ={styles.text}>Go to B</Text>
      </Pressable>
      </View>
  
    )
  }
  const styles= StyleSheet.create({

text: {
  fontSize :20,
},
button: {
  backgroundColor: 'green',
  borderRadius: 5,
},
body: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop:50,
  },
  })
