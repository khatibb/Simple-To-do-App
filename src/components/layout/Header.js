import React from 'react'

export default function Header() {
    return (
        <div>
            <header style={headerStyle}>
                <h1>Todolist</h1>
            </header>
        </div>
    )
}


const headerStyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10 px'
}