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
                        />
                    </li>
                    <li>Noun (Plural): <br/>
                        <input
                            value={this.props.pluralNoun}
                            onChange={this.props.updatePluralNoun}
                            placeholder="Think Wacky!"
                        />
                    </li>
                    <li>Noun: <br/>
                        <input
                            value={this.props.nounTwo}
                            onChange={this.props.updateNounTwo}
                            placeholder="Think Wacky!"
                        />
                    </li>
                    <li>Place: <br/>
                        <input
                            value={this.props.place}
                            onChange={this.props.updatePlace}
                            placeholder="Think Wacky!"
                        />
                    </li>
                    <li>Adjective: <br/>
                        <input
                            value={this.props.adjective}
                            onChange={this.props.updateAdjective}
                            placeholder="Think Wacky!"
                        />
                    </li>
                    <li>Noun: <br/>
                        <input
                            value={this.props.nounThree}
                            onChange={this.props.updateNounThree}
                            placeholder="Think Wacky!"
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
