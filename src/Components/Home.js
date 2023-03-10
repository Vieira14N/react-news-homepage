import React from 'react'

export default function Home() {
    const nome = "ian";
    const boole = true;
    const array = ['ian','elisa','sthef']
  
    function idade(idade){
        return idade;
    }

    return (
    <>
        <h1>{nome}</h1>
        <p>{boole ? "verdadeiro" : "falso"}</p>
        <p>{Date.now()}</p>
        <p>{idade(4)}</p>
        <ul>
            {array.map(element => (
                <li>{element}</li>
            )
            )}
        </ul>
        
    </>
  )
}

