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

    render() {
        return (
            // you can style static by a variable or dynamically by class function
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.markComplete}/>
                {this.props.todo.title}
                </p>

            </div>
        )
    }
}


//Proptypes -> enforcing types
Todoitem.PropTypes={
    todo:PropTypes.object.isRequired
}

// const itemStyle={
//     backgroundColor:'#f4f4f4'
// }
export default Todoitem
