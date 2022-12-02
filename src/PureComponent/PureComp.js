import React, {PureComponent} from 'react';

class PureComp extends PureComponent {
    
    render() {
        console.log('PureComponent');
        return ( 
            <>
            <hl>This is PureComponent name:{this.props.name}</hl>
            </>
         );
    }
}
 
export default PureComp;