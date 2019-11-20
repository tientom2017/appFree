import React, {Component} from 'react';
import Exam from "./folder/exam.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            color: 'red'
        })
    }
    render() {
        return (
            <div className="App">
                <p style={{color: this.state.color}}>heading 1</p>
                `12`12`1212312
                <Exam color={this.state.color} />
            </div>
        );
    };
    
}


export default App;
