/* eslint-disable no-empty */
import { useState, useCallback, useEffect, useRef } from "react"

const PasswordGenerator = () => {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [character, setCharacter] = useState(false)
    // state update
    const [password, setPassword] = useState("")
    
    const passwordRef = useRef("null")

// usecallback -> memorize 
    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) { str += "0123456789" }
        if (character) { str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~" }
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
        }
        setPassword(pass)

    }, [length, numberAllowed, character, setPassword])
    // ye fn numberallowed setlength aur character hr jgah call ho rha, 
    // koi aisa way jissse ye kaam ho jaye -> usecallback hook (lets you cache a fn definition between re-render)
    // mtlb ki jitne bar fn use krna h use krlo, call krlo

    // jb page run hota to useEffect call hota aur agr dependencies me koi ched chad hui to dubara se re-render hota
    useEffect(() => {
      passwordGenerator()
    }, [length, numberAllowed, character, passwordGenerator ])

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0, 3)
        window.navigator.clipboard.writeText(password) 
    }, [password])



    return (
        <div>
            <div className="w-full text-xl text-center max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-800">
                <h1 className="text-xl text-center text-white ">Password Generator</h1>
                <div className="mt-3 flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-2 px-4 "
                        placeholder="Password"
                        readOnly
                        ref={passwordRef}
                    />
                    <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-500 px-3 py-0.5 shrink-0 text-white">copy</button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <input
                        type="range"
                        min={6}
                        max={100}
                        value={length}
                        className="cursor-pointer"
                        onChange={(e) => { setLength(e.target.value) }}
                    />
                    <label>Length: {length}</label>
                </div>
                <div className="mt-3 flex items-center gap-x-2 text-sm">
                    <input
                        type="checkbox"
                        defaultChecked={numberAllowed}
                        id="numberInput"
                        className="cursor-pointer"
                        onChange={(e) => { setNumberAllowed((prev) => !prev) }}
                    />
                    <label htmlFor="numberInput">Number</label>
                </div>
                <div className=" mt-3 flex items-center gap-x-2 text-sm">
                    <input
                        type="checkbox"
                        defaultChecked={character}
                        id="characterInput"
                        className="cursor-pointer"
                        onChange={(e) => { setCharacter((prev) => !prev) }}
                    />
                    <label htmlFor="numberInput">Character</label>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator
