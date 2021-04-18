import React, {useState} from 'react'

function Deleteme() {

    const [state, setstate] = useState(1)
    const [display , setDisplay] = useState(undefined)

    const something1 = () => {
    return <h1>this is for free state</h1>
    }

    const something2 = () => {
    return <h2>this is for member state</h2>
    }


    const test = (key) => {
    switch (key) {
        case 0:
            return something1()
            
        case 1:
            return something2()
            
        default:
            break;
    }
}

    return (
        <div>
           {/* {
               {
                    0:<h1>test</h1>,
                    1:<h1>test2</h1>
               }[{state}]
           } */}
           <h1>test</h1>
           <h1>{state}</h1>
           {/* {something1()} */}
           {test(1)}
        </div>
    )
}

export default Deleteme
        