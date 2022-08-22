
import react from "react";

class HornedBeast extends react.Component         {
    render(){
        return(
            <div>
                <h2>The Blue Whale</h2>
                <img src={this.props.link} alt={this.props.alt} title={this.props.title}/>                
                <p>{this.props.desc}</p>
            </div>
        );
    
    
            
    
            
    }
    
    }
    export default HornedBeast;