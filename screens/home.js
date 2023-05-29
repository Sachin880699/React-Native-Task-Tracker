import React, { useEffect, useState , useRef} from 'react';
import { Text, View, Button, FlatList, StyleSheet,  TouchableOpacity, Image } from 'react-native';
import Users from './users';
import Login from './Authentication/login';

const Home =({navigation})=>{

    return(
        <View >
           <TouchableOpacity onPress={()=>navigation.navigate("Users")}>
            <Image style={styles.userImage} source={{uri:"https://e7.pngegg.com/pngimages/389/412/png-clipart-font-awesome-computer-icons-user-profile-users-group-blind-miscellaneous-blue-thumbnail.png"}} />
            </TouchableOpacity>
            
            <Text style={{fontSize:30,color:"red"}} onPress={()=>navigation.navigate("Login")}>Login</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    

    userImage:{
        width: 150,
        height: 150,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "black",
        marginLeft:100,
        borderColor:"gray",
        borderRadius:10
    }
    
})

export default Home