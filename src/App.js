import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import { useSpeechSynthesis } from "react-speech-kit";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function App() {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(" ")
  const [savedNote, setSavedNote] = useState("")
  const[buttonText,setButtonText]=useState("Start Recording")
  const { speak,cancel } = useSpeechSynthesis();


  const handleListen = async() => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        mic.start()
      }
      setButtonText("Stop Recording")
      setSavedNote("Processing...")
      cancel()
    } else {
      mic.stop()
      mic.onend = () => {

      }
      setButtonText("Start Recording")
      await handleSaveNote()
    }
    mic.onstart = () => {
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }
  // async function askQuestion(prompt)
  // {
  //   // Call Backend OpenAI Apis for completion 
  //   var responseAns="";
  //   await axios.post('http://localhost:8080/completion',{
  //     prompt:prompt
  //   })
  //   .then(async (response)=>{
  //     if(response.status==200){
  //       const parsedData = await response.data.bot
  //       // console.log(parsedData)
  //       responseAns= parsedData;
  //       return responseAns
  //       }
  //       else{
  //       responseAns= "Error: API call failed. Try again.."
  //       return responseAns
  //       }
  //   })
  //   return ""
  // }
  async function askQuestion(prompt){
  const response = await fetch('http://localhost:8080/completion', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        prompt: prompt
    })
})
if(response.ok){
const data = await response.json();
const parsedData = data.bot
console.log(parsedData)
return parsedData;
}
else
return "Error: API call failed. Try again.."
}
  const handleSaveNote = async() => {
    // Call OpenAI Apis using note
    const res=await askQuestion(note)
    setSavedNote(res.split('\n').map(str => <p>{str}</p>));
    speak({ text: res })
    setNote('')
  }

  return (
    <>
      <h1>Speech to text GPT-3 enabled</h1>
      <div className="container">
        <div className="box">
          <h2>Input</h2>
          <button onClick={async () => {
            setIsListening(prevState => !prevState)
           await handleListen()
          }}>
            {buttonText}
          </button>
          <p>{note}</p>
        </div>
        <div className="box">
          <h2>Response from GPT-3</h2>
          <Card>
      <Card.Body>
        {savedNote}
      </Card.Body>
    </Card>
        </div>
      </div>
    </>
  )
}

export default App
