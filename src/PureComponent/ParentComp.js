import React from 'react';
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';
class ParentComp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name: "kumar"
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({name : "kumar123"})
        }, 2000)
    }

    render() {
        return (
            <>
                <h1>This is ParentComp name:{this.state.name}</h1>
                {/* <h1><RegComp name={this.state.name} /></h1>
                <h1><PureComp name={this.state.name} /></h1> */}
                <MemoComp name={this.state.name} />
            </>
         );
    }
}
 
export default ParentComp;