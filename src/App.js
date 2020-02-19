import React, {Component} from 'react';
import './App.css';
import InputBox from './components/InputBox.js'
import Paragraph from './components/Paragraph.js'
import { Button } from 'reactstrap';

class App extends Component{
    constructor(props){
        super(props)
        this.state ={
            nounOne: "",
            pluralNoun: "",
            nounTwo: "",
            place: "",
            adjective: "",
            nounThree: "",
            paragraphRender: false
        }
    }
    updateNounOne = (event) => {
        this.setState({ nounOne: event.target.value})
    }
    updatePluralNoun = (event) => {
        this.setState({ pluralNoun: event.target.value})
    }
    updateNounTwo = (event) => {
        this.setState({ nounTwo: event.target.value})
    }
    updatePlace = (event) => {
        this.setState({ place: event.target.value})
    }
    updateAdjective = (event) => {
        this.setState({ adjective: event.target.value})
    }
    updateNounThree = (event) => {
        this.setState({ nounThree: event.target.value})
    }
    handleSubmit = (event) => {
        this.setState({paragraphRender: true })
        event.preventDefault()
    }
    clear = () => {
        this.setState({
            nounOne: "",
            pluralNoun:"",
            nounTwo:"",
            place:"",
            adjective:"",
            nounThree:"",
            paragraphRender: false })
    }
    render(){
        return(
            <div>
            <h1 className="header"> Madlibs </h1>
            <div className= "app">

                <InputBox
                    nounOne={this.state.nounOne}
                    updateNounOne={this.updateNounOne}
                    pluralNoun={this.state.pluralNoun}
                    updatePluralNoun={this.updatePluralNoun}
                    nounTwo={this.state.nounTwo}
                    updateNounTwo={this.updateNounTwo}
                    place={this.state.place}
                    updatePlace={this.updatePlace}
                    adjective={this.state.adjective}
                    updateAdjective={this.updateAdjective}
                    nounThree={this.state.nounThree}
                    updateNounThree={this.updateNounThree}
                    handleSubmit={this.handleSubmit}
                />
                {this.state.paragraphRender &&
                <Paragraph
                    nounOne={this.state.nounOne}
                    pluralNoun={this.state.pluralNoun}
                    nounTwo={this.state.nounTwo}
                    place={this.state.place}
                    adjective={this.state.adjective}
                    nounThree={this.state.nounThree}
                    clear={this.clear}
                />
            }
            </div>
            </div>
        )
    }
}
export default App;
