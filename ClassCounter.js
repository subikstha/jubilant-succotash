import React from 'react'

class ClassCounter extends React.Component {
    state = {
        count: 0
    }

    // increment = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    componentDidMount() { // useEffect equivalent 
        console.log('Component mounted')
    }

    componentWillUnmount() { // Effect cleanup

    }

    render() {
        return <>
            <h2>This is a class based counter</h2>
            <p>This is the count right now {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
        </>
    }
}

export default ClassCounter