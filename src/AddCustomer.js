import React, { Component } from "react";

class AddCustomer extends Component {
      cnameRef = React.createRef();
      addressRef = React.createRef();
      ageRef = React.createRef();
    
      constructor(props){
          super(props);
          const initialStateObj={cname:'',address:'', age:0, formStatus:''};
          this.state=initialStateObj;
      }
    
      submitHandler(event){
          event.preventDefault();
          const newStateObj={...this.state,formStatus:'Form successfully submitted'};
          
          let stateFun=(prevState) =>{
            const newStateObj={...prevState,formStatus:'Form successfully submitted'};     
            return newStateObj;
          };
    
          this.setState(stateFun);
             
      }
    
      setCname(){
        const cnameField=this.cnameRef.current;
        const cnameVal=cnameField.value;   
        const newStateObj=  {...this.state, cname:cnameVal};
       this.setState(newStateObj);
    
      }

      setAddress(){
        const addressField=this.addressRef.current;
        const addressVal=addressField.value;   
        const newStateObj=  {...this.state, cname:addressVal};
       this.setState(newStateObj);
    
      }
    
      setAge(){
        const ageNameField=this.ageRef.current;
        const ageVal=ageNameField.value;    
        const newStateObj={...this.state, age :ageVal};
        this.setState(newStateObj);
    
      }
      
      render() {
    
         return  (
         
        <div>
          <form onSubmit={(event)=>this.submitHandler(event) }>
            <label>Customer name</label>
            <input name="cname" type="text" ref={this.cnameRef} onChange={()=>this.setCname()} />
    
            <br />

            <label>Address</label>
            <input name="address" type="text" ref={this.addressRef} onChange={()=>this.setAddress()} />
    
            <br />
    
            <label> age</label>
            <input name="age" type="number" ref={this.ageRef} onChange={()=>this.setAge()} />
    
            <br/>
    
            <button >Submit Form</button>
    
    
          </form>
    
          <h2>form is Submitted Successfully</h2>
    
           <h3>{this.state.formStatus}</h3>
          
           Customer name is {this.state.cname} address is {this.state.address} age is {this.state.age}
    
        </div>
          );
       
      }
    }
    
    export default AddCustomer;
    