import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todoitem extends Component {

    getStyle = ()=>{
        return{
            background:'#f4f4f4',
            padding:'10px',
            borderbottom:'1px #ccc dotted',
        
        textDecoration:this.props.todo.completed?'line-through':'none'
    }}

    markComplete = (event)=>{

    }
    
    render() {
        const { id,title}=this.props.todo
        return (
            // you can style static by a variable or dynamically by class function
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
                {title}
                <button 
                onClick={this.props.delTodo.bind(this,id)}
                style={btnStyle}>x</button>
                </p>

            </div>
        )
    }
}


//Proptypes -> enforcing types
Todoitem.PropTypes={
    todo:PropTypes.object.isRequired
}
const btnStyle={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 8px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'

}
// const itemStyle={
//     backgroundColor:'#f4f4f4'
// }
export default Todoitem
