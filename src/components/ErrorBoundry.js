import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasErrors: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasErrors: true })
    }

    render() {
        if (this.state.hasErrors) {
            return <h1>Ooops. That is not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;