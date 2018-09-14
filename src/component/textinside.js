import React, { Component } from 'react';
class Inside2 extends Component {
    constructor() {
        super();
        this.state = {
            text: "Inside Component"
        }

    }
    render() {
        setTimeout(() => {
            this.setState({text: "master chief"})
        }, 1000);
        return (
            <div>{this.state.text}</div>
        );
    }
}
export default Inside2;