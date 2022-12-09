import React from "react";
import IceCreamActions from "./IceCreamActions";
import { connect } from "react-redux";


class IceCreamComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <>
                <h2>Number of Ice Creams - {this.props.IceCreamCount}</h2>
                <button onClick={this.props.buyIcream}>Buy IceCream</button>
            </>
         );
    }
}

const mapStateToProps = state => {
    return {
        IceCreamCount : state.IceCream.NumOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcream : () => dispatch(IceCreamActions())
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamComponent);