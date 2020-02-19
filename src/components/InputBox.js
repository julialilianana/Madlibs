import React, {Component} from 'react';
import { Button } from 'reactstrap';

class InputBox extends Component{
    render(){
        return(
            <div className="inputBox">
                <form onSubmit = {this.props.handleSubmit}>
                <ol>
                    <li>Noun: <br/>
                        <input
                            value={this.props.nounOne}
                            onChange={this.props.updateNounOne}
                            placeholder="Think Wacky!"
                            style={{width: "250px"}}
                        />
                    </li>
                    <li>Noun (Plural): <br/>
                        <input
                            value={this.props.pluralNoun}
                            onChange={this.props.updatePluralNoun}
                            placeholder="Think Wackier!"
                            style={{width: "250px"}}
                        />
                    </li>
                    <li>Noun: <br/>
                        <input
                            value={this.props.nounTwo}
                            onChange={this.props.updateNounTwo}
                            placeholder="Come On That's Not Wacky!"
                            style={{width: "250px"}}
                        />
                    </li>
                    <li>Place: <br/>
                        <input
                            value={this.props.place}
                            onChange={this.props.updatePlace}
                            placeholder="NOW THATS Wacky!"
                            style={{width: "250px"}}
                        />
                    </li>
                    <li>Adjective: <br/>
                        <input
                            value={this.props.adjective}
                            onChange={this.props.updateAdjective}
                            placeholder="NOW YOUR THINKING Wacky!"
                            style={{width: "250px"}}
                        />
                    </li>
                    <li>Noun: <br/>
                        <input
                            value={this.props.nounThree}
                            onChange={this.props.updateNounThree}
                            placeholder="Save The Wackiest For LAst"
                            style={{width: "250px"}}
                        />
                    </li>
                </ol>
                <Button color="danger"
                type="submit">Submit</Button>
                </form>

            </div>
        )
    }
}
export default InputBox;
