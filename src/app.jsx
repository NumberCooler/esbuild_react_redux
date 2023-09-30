import * as React from 'react'
import ReactDOM from "react-dom/client";
import "./style.css";
 
// imports for provider
import { store } from './store'
import { Provider } from 'react-redux'

// imports for component binding
import { set } from './set_value';
import { toogle } from './toogle_start_false'
import { useSelector, useDispatch } from 'react-redux'


let Switch = () => {
    const state1 = useSelector((state) => state.counter2.value)
    const dispatch = useDispatch()

    let [ state, setState ] = React.useState({value:false});

    let switch_onClick= () => dispatch(toogle())

    let switch_click = ()=>{
        if(state.value == false) {
            setState({value:true});
        } else if(state.value == true) {
            setState({value:false});
        }
    }
    return <div style={ {border:"solid 1px #000", display:"flex", width:"200px", height:"50px" } } onClick={switch_onClick}>
        <div style={{flex:1}}></div>
        <div style={{flex:1}} className={ state1 == true ? "lime" : "red" }></div>
    </div>;
}

let ConfigColor = ()=>{
    //const state1 = useSelector((state) => state.counter.value)

    const dispatch = useDispatch()
    let ref1 = React.useRef();

    let color_onChange = (e)=>{
        dispatch(set(ref1.current.value));
    };

    return <div>
        <input ref={ref1} type="color" onChange={color_onChange}></input>
    </div>
}
let ShowColor = ()=>{

    const state1 = useSelector((state) => state.counter.value)

    return <div>{state1}</div>
}

let Greet = () => {
    return <div>
        <h1>Hello, world!</h1>

        <div style={{display:"flex"}}>
            <ConfigColor></ConfigColor>
            <ShowColor></ShowColor>
        </div>
        <div style={{display:"flex"}}>
            <Switch></Switch>
            <Switch></Switch>
        </div>
    </div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <Greet />
    </Provider>
);


