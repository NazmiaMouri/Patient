import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <View  style={styles.header}>
               <Animatable.Image source={require('../assets/logo.png')}
               animation='pulse'
              
               style={styles.logo}
               resizeMode='stretch'
               />

            </View>
            <Animatable.View style={styles.footer} 
            animation="fadeInUpBig">
               <Text style={styles.title}>Stay connected with everyone!</Text>
               <Text style={styles.text}>Sign in with account</Text>
               <View style={styles.button}>
               <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                   
                   <View
                       
                        style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcons 
                            name="navigate-next"
                            color="#fff"
                            size={20}
                        />
                    </View>
                       
                       
                   </TouchableOpacity>
                   </View> 
               

            </ Animatable.View>
        </View>
        );
    };
    
    export default SplashScreen;
    
    const {height} = Dimensions.get("screen");
    const height_logo = height * 0.20;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1, 
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
       
      },
      header: {
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
      },
      footer: {
          flex: 1,
          backgroundColor: '#009387',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingVertical: 50,
          paddingHorizontal: 30,
        //   zIndex:1,
        //   position:"absolute",
        //   bottom:0
      },
      logo: {
          width: height_logo,
          height: height_logo
      },
      title: {
        //   color: '#05375a',
          color:'#fff',
          fontSize: 30,
          fontWeight: 'bold'
      },
      text: {
        //   color: 'grey',
        color:'#fff',
          marginTop:5
      },
      button: {
          alignItems: 'flex-end',
          marginTop: 30,
          color:'#fff' 
      },
      signIn: {
          width: 150,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          flexDirection: 'row',
         
      },
      textSign: {
          color: 'white',
          fontWeight: 'bold'
      }
    });
    