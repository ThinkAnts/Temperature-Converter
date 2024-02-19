
import { style } from "./App.style"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { Text, View, ImageBackground } from "react-native"
import hotBackground from "./assets/hot.png"
import coldBackground from "./assets/cold.png"
import { Input } from "./components/Input"
import { useState, setInputValue, setCurrentUnit, useEffect } from "react"
import { DisplayTemperature } from "./components/DisplayTemperature/DisplayTemperature"
import { UNITS, convertTemperatureTo, getOppsiteUnit, isIceTemperature } from "./utils/temperature"
import { ButtonConvert } from "./components/Button/ButtonConvert"

export default function App() {
   const [inputValue, setInputValue] = useState(0)
   const [currentUnit, setCurrentUnit] = useState("°C")
   const [ currentBackground, setCurrentBackground] = useState(coldBackground)
   const oppositeUnit = getOppsiteUnit(currentUnit);

   useEffect(() => {
    if(isIceTemperature(inputValue, currentUnit)) {
      setCurrentBackground(coldBackground);

    } else {
      setCurrentBackground(hotBackground);
    }
   }, [inputValue, currentUnit]);

   function getConvertedTemp() {
      if(isNaN(inputValue)) {
        return ""
      } else {
        return  convertTemperatureTo(inputValue, oppositeUnit).toFixed(1)
      }
   }

  return (
    <ImageBackground style = {style.imageBackground} source={currentBackground}>
    <SafeAreaProvider>
    <SafeAreaView style = {style.root}>
    <View style = {style.workspace}>
      <DisplayTemperature unit={oppositeUnit} 
      temperature={getConvertedTemp()} />
      <Input unit={currentUnit} onChange= {setInputValue} defaultValue={0}> </Input>
      <ButtonConvert onPress={() =>{
        setCurrentUnit(oppositeUnit)
      }} currentUnit={currentUnit}>
      </ButtonConvert>
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
    </ImageBackground>
  )
}

