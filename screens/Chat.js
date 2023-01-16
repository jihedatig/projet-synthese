import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native'
import { useState } from 'react'
import React from 'react'
import ChatInput from '../components/ChatInput'
import ChatBtn from '../components/ChatBtn'
import MyColors from '../constants/colors'

export default function Chat() {
  const [entredChatText, setEntredChatText] = useState('')
  const [chatList, setChatList] = useState ([
    {
      text:'hello',
      key:'123'
    }
  ])

  function chatIinpuHandler(entredText){
    setEntredChatText(entredText)

  };

  function addChatHandler(){
    setChatList((currentchatList) => [
      ...currentchatList, 
      {text: entredChatText, key: Math.random().toString()},
    ]);
    setEntredChatText('');
  };


  return (

   

    <View style={styles.chatContainer}>
    
    <View style={styles.chatList}>
  
      <FlatList contentContainerStyle={{justifyContent:'flex-start'}} data={chatList} renderItem={itemData => {
        return(
          <View style={styles.chatItem} >
            <Text style={styles.chatItem}> {itemData.item.text}</Text>
          </View>
        )
      }}
      />

    </View>

        <View style={styles.chat}>

        <ChatInput placeholder={'taper votre message'}  inputconfig={{onChangeText: chatIinpuHandler, value:entredChatText}}/>
        <ChatBtn icon='send' onPress={addChatHandler}/>

        </View>

    </View>
    
  )
}

const styles = StyleSheet.create({
  chat:{
      flex:1,
      alignItems:'center',
      flexDirection:'row',
  },
chatList:{
      flex:3,
      alignItems:'flex-start',
    
},
chatContainer:{
  flex:1,
      alignItems:'center',

      padding: 30
},
chatItem:{
  margin: 8,
  borderRadius: 6,
  backgroundColor: MyColors.orange,
  padding:2,
  color:'black'
},
chatInput:{
  flex:3
},
chatBtn:{
  flex:1
}
  
})