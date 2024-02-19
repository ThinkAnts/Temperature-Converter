import {TextInput,Text, View } from "react-native"
import { style } from "../App.style"

export function Input({defaultValue, onChange, unit}) {
   return (
    <View style = {style.root}>
       <TextInput style = { style.input}
       maxLength={4} placeholder="Please enter the temperature" 
       defaultValue={defaultValue.toString()}
       onChangeText={(text) => {
         onChange(text);
       }}/>
       <Text style = {style.unit}>{unit}</Text>
    </View>
   )
}