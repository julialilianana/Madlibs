import React, { Component } from 'react'
import {Button} from 'reactstrap'
class Paragraph extends Component {

  render() {
        return(
            <div className="paragraph">
                <p>
                Be kind to your {this.props.nounOne}-footed {this.props.pluralNoun}. For a duck may be somebody's {this.props.nounTwo}, be kind to your {this.props.pluralNoun} in {this.props.place}. Where the weather is always {this.props.adjective}. You may think that this is the {this.props.nounThree}, Well it is.
                </p>

                <Button
                    outline color ="danger"
                    onClick={this.props.clear}> Clear
                </Button>

            </div>
        )
    }
}

export default Paragraph
