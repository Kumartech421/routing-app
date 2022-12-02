import React from 'react';

function MemoComp({name}){
    console.log('--------Memo--------------')
    return(
        <>
        <h1>This Is Memo Component name: {name}</h1>
        </>
    )
}

export default React.memo(MemoComp);