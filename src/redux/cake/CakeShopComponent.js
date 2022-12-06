import React from "react";
import { connect } from "react-redux";
import {CakeActions,CakeAdd} from "./CakeActions";

class CakeShopComponent extends React.Component {
    render() { 
        return ( 
            <>
                <h1>Number of Cakes - {this.props.NumOfCakes}</h1>
                <button onClick={this.props.CakeActions}>Buy Cakes</button>
            </>
         );
    }
}

const mapStateToProps = state => {
    return{
        NumOfCakes : state.NumOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        CakeActions : () => dispatch(CakeAdd())
    }
}
 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeShopComponent);