import { StyleSheet, Text, View, Pressable } from 'react-native';

 export default function ScreenB ({ navigation }){
    const onpressHandler =()=>{
      navigation.navigate('Screen_A')
    }
    return(
      <View style= {styles.body}>
      <Text style={styles.text}>
      Second screen
      </Text>
      <Pressable style= {styles.button}
      onPress={onpressHandler}>
      <Text style ={styles.text}>Go to A</Text>
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

     