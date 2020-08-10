import React, {Component} from 'react';

export default class Scorepoint extends Component {

    render() {
        console.log(this.props.max_score)
        switch(this.props.max_score){
            case 1:
                return(
                    <div className="left-1"></div>
                )

            case 2:
                return(
                    <>
                        <div className="left-1"></div>
                        <div className="left-2"></div>
                    </>
                )
            
            case 3:
                return(
                    <>
                        <div className="left-1"></div>
                        <div className="left-2"></div>
                        <div className="left-3"></div>
                    </>
                )
            
            default:
                return(
                    <>
                        <div className="left-1"></div>
                        <div className="left-2"></div>
                        <div className="left-3"></div>
                    </>
                );
        }
        
    }
}