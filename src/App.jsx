import React, { useState ,useCallback, useEffect,useRef} from 'react'
import './App.css'
const App = () => {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState("")
  const [numberallowed, setNumberallowed] = useState("")
  const [charallowed, setCharAllowed] = useState("")
const passwordref=useRef(null)
  const generatePassword=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str+="0123456789"
    if(charallowed)str+="!@#$%^&*()_+"

    for( let i=1;i<=length;i++){
      const char=Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberallowed,charallowed])

  useEffect(()=>{
    generatePassword()
  },[length,numberallowed,charallowed])

  const copyPassword=()=>{
    window.navigator.clipboard.writeText(password)
    passwordref.current.select()
  }

  return (
    <div className='container'>
      <h3 className='heading'>Password Generator</h3>
      <div className='container2'>
        <input type='text' placeholder='password' value={password} ref={passwordref} />
        <button onClick={copyPassword}>Copy</button>
      </div>
      <div className='container3'>
        <input type='range' min={6} max={50} className='range' value={length} onChange={(e) => setLength(e.target.value)} />
      </div>
      <div>
      <label className='label' >Length:{length}</label>
      <input type='checkbox' id='number' defaultChecked={numberallowed} onChange={() => { setNumberallowed((prev) => !prev) }} />
      <label htmlFor='number' className='label'>Numbers</label>
      <input type='checkbox' id='number' defaultChecked={charallowed} onChange={() => { setCharAllowed((prev) => !prev) }} />
      <label htmlFor='number' className='label'>Character</label>
      </div>




    </div>
  )
}

export default App