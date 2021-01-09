import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state={
    characters : [ ]
  }
  removeCharecter=(index)=>{

    this.setState({
      characters: this.state.characters.filter((character,i)=>{
        return i !== index
      })
    })

  }
  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }
  render() {
    return (
      <div className="container">
        <h1>React toturial Practice</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Table  characterData= {this.state.characters} 
                removeCharecter={this.removeCharecter}
        />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
export default App;