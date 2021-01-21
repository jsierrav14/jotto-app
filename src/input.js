import React, {Component} from 'react';
import {connect} from 'react-redux'


class Input extends Component {

    render(){
    

     let contents = this.props.success ? null : <form className="form-inline">
       <input data-test="input-box" className="mb-2 mx-sm-3" type="text" placeholder="enter guess"/>
       <button data-test="submit-button" type="submit" className="btn btn-primary">Submit </button>
     </form>
        return (
         <div data-test="component-input">
         {contents}
         </div>  
        )
    }
}


const mapStateProps = ({success}) =>{

    return {success}

}

export default connect(mapStateProps)(Input)