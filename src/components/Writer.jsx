
import React from "react";
import { connect} from "react-redux";
import marked from "marked";


const Writer = ({text, fullsize, toogleWrite}) => 
{
    marked.setOptions({
        breaks: true
    })
    if(!fullsize || fullsize === 2){
        return (   
            <div id="writer">
                <div id="previewer">Previewer
                <button onClick={toogleWrite}>X</button>
                </div>
                <div id="preview" dangerouslySetInnerHTML={{__html:marked(text)}}></div>
            </div>
        );
    }else{
        return(
            <div></div>
        )
    }
  }

const mapStateToProps = state => ({
    text: state.text,
    fullsize: state.fullsize

})

const mapDispatchToProps = dispatch => ({
    toogleWrite() {
        dispatch({
            type: "CHANGE-SIZE",
            current_box:2
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Writer)