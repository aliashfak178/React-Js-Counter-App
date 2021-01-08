import React from 'react';

class myCounter extends React.Component{

            state = { number:0};
            counter = ()=>{
                this.setState({number: this.state.number + 1});
            };
            re_counter = ()=>{
                this.setState({number: this.state.number - 1});
            };
    render(){
        return(
            <div className="counter">
                <button type="submit" onClick={this.counter}>Add Counter</button>
                <button type="submit" onClick={this.re_counter}>Substract Counter</button>
                <h1>{this.state.number}</h1>
            </div>
        )
    }
}
export default myCounter;