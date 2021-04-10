import React, { Component } from "react";

class AddCustomer1 extends Component {


    cnameRef = React.createRef();
    addressRef = React.createRef();
    ageRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = { cname: '', address:'', age: 0, formStatus: '' };
    }


    submitHandler(event) {
        event.preventDefault();  
        this.setState({ ...this.state, formStatus: 'Customer Form details Sent' });
        let cus={cname:this.state.cname,address:this.state.address, age: this.state.age };
        this.props.addHandler(cus);
        
    }

    setCustomerName() {
        let cnameVal = this.cnameRef.current.value;
        this.setState({ ...this.state, cname: cnameVal })
    }

    setAddress() {
        let addressVal = this.addressRef.current.value;
        this.setState({ ...this.state, address: addressVal })
    }

    setAge() {
        let ageVal = this.ageRef.current.value;
        this.setState({ ...this.state, age: ageVal });
    }

    render() {

        return (

            <div>

                <form onSubmit={(event) => this.submitHandler(event)}>
                    <label>Customer Name</label>
                    <input name="cname" type="text" ref={this.cnameRef} onChange={() => this.setCustomerName()} />

                    <br />
                    <label>Address</label>
                    <input name="address" type="text" ref={this.addressRef} onChange={() => this.setAddress()} />

                    <br />
                    <label>Age</label>
                    <input name="age" type="number" ref={this.ageRef} onChange={() => this.setAge()} />
                    <br />
                    <button > Submit </button>

                </form>

                <h3>{this.state.formStatus} </h3>

                 Customer Name is  {this.state.cname} address is {this.state.address} age is {this.state.age}
           
            </div>

        );

    }

}


export default AddCustomer1;