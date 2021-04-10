import logo from './logo.svg';
import './App.css';
import AddCustomer from './AddCustomer1';
import DisplayCustomer from './DisplayCustomer';



function App() {
  let customer1 = {id:1,name:"mounika" , age:21};
  let customer2 = {id:2,name:"madhuri" , age:19};

  let customers =[customer1,customer2];

  return (

    <div>  
    
    <DisplayCustomer/>
    </div>

    
  );
}

export default App;
