import React, { Component } from 'react';

export default class ClassComponentExample extends Component {
    constructor() {
        super();
        this.state = { textHere : 'click me' };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(() => {
            return { buttonText: "clicked Me!!!" };
        });
    }

    render() {
        const { textHere } = this.state;
        return <button onClick={this.handleClick}>{textHere}</button>;
    }

}
