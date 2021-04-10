import React, {Component} from "react";
import AddCustomer1 from "./AddCustomer1";

class DisplayCustomer extends Component {

        constructor(props) {
            super(props);
            this.state = { customers: [] };
        }
    
        addCustomer=(cus)=> {

            this.setState({customers:[...this.state.customers, cus]});    
        }
    
        render() {
            return (
                <div>
    
                    <AddCustomer1 addHandler={this.addCustomer} />
    
                    <ul>
                        {this.state.customers.map(cus => <li> {cus.cname} {cus.address} {cus.age}</li>)}
                    </ul>
    
                </div>
            );
    
        }
    
    }
    
    export default DisplayCustomer;