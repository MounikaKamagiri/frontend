
import {Component} from 'react';

class WelcomeClass extends Component{

    render(){
        let {msg,children}=this.props;
        return(
            <div>
              {msg} 
              {children}
            </div>
        );
    }
}


export default WelcomeClass;
