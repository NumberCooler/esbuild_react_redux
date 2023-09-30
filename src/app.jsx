import * as React from 'react'
import ReactDOM from "react-dom/client";
import "./style.css";
// imports for provider
import { store } from './store'
import { Provider } from 'react-redux'
// imports for component binding
import { set1 } from './set_value.js';
import { toogle } from './toogle_start_false.js'
import { useSelector, useDispatch } from 'react-redux'
let Switch = () => {
    const state1 = useSelector((state) => state.bool.value)
    const dispatch = useDispatch()
    let switch_onClick= () => dispatch(toogle())
    return <div style={ {border:"solid 1px #000", display:"flex", width:"200px", height:"50px" } } onClick={switch_onClick}>
        <div style={{flex:1}}></div>
        <div style={{flex:1}} className={ state1 == true ? "lime" : "red" }></div>
    </div>;
}
let ConfigColor = ()=>{
    const dispatch = useDispatch()
    let ref1 = React.useRef();
    let color_onChange = (e)=>{
        dispatch(set1(ref1.current.value));
    };
    return <div>
        <input ref={ref1} type="color" onChange={color_onChange}></input>
    </div>
}
let ShowColor = ()=>{
    const state1 = useSelector((state) => state.color.value)
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