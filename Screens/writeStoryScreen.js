import React from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';


export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View>
                <Header backgroundColor={'green'}
                  centerComponent={{
                    text: 'StoryHub',
                    style: { color: 'white', fontSize: 30 , padding:20 },
                  }}
                />

                <View style = {styles.inputview}>
                    <TextInput style = {styles.inputbox} placeholder = 'write a Title of the story'/>
                </View>

                <View style = {styles.inputview}>
                    <TextInput style = {styles.inputbox1} placeholder = 'write the author name of the story'/>
                </View>

                <View style = {styles.inputview}>
                    <TextInput style = {styles.inputbox2} multiline={true} placeholder = 'write the story'/>
                </View>

                <View>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttontext}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputview:{
        flexDirection:'row',
        margin:10
    },
    inputbox:{
        borderRadius:5,
        width:260,
        height:50,
        borderWidth:5,
        textAlign:'center',
        marginTop:7
    },
    inputbox1:{
        borderRadius:5,
        width:330,
        height:50,
        borderWidth:5,
        textAlign:'center',
        marginTop:7
    },
    inputbox2:{
        borderRadius:5,
        width:380,
        height:350,
        borderWidth:5,
        textAlign:'center',
        marginTop:7
    },
    button:{
        width:'80%',
        height:60,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:5,
        marginLeft:40,
        marginTop:5,
        borderRadius:66
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold',
        padding:10,
        textAlign:'center',
        color:'black',

    }
})