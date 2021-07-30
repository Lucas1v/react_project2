
import React from "react";
import { connect } from "react-redux";

const Reader = ({text, changeText, fullsize, toogleRead}) => {
    if(!fullsize || fullsize === 1){
    return(
    <div id="reader">
        <div id="Editor">Editor
        <button onClick={toogleRead}>X</button>
        </div>
        <textarea id="editor" value={text} onChange={(event) => changeText(event.target.value)}></textarea>
    </div>
);}else{
    return(<div></div>);
}
}


const mapStateToProps = state => ({
    text: state.text,
    fullsize: state.fullsize
})

const mapDispatchToProps = dispatch => ({
    changeText(input) {
        dispatch({
            type: "CHANGE-TEXT",
            newtext: input
        })
    },
    toogleRead() {
        dispatch({
            type: "CHANGE-SIZE",
            current_box:1
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Reader)