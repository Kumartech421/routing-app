import React from 'react';

class RegComp extends React.Component {
    
    render() {
        console.log('--------Reg Component ------------');
        return ( 
            <>
            <hl>This is Regular Component name:{this.props.name}</hl>
            </>
         );
    }
}
 
export default RegComp;