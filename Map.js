import React,{Component} from "react";
import Vowel from "./Vowel";

class Map extends Component{

    constructor(props){
        super(props);

        this.state = {
            isLoggedIn: true
        }
    }


    render(){

        if(this.state.isLoggedIn){
            return (<div>Welcome Mujassam</div> );
        } else {
            return(
                <div>
                    Welcome Guest
                </div>
            );
        }
    }
}

export default Map;