import './App.css';
import { useSelector ,useDispatch} from 'react-redux';
import {bindActionCreators} from "redux"
import { actionCreators } from './state/index';


function App() {

  const account = useSelector((state)=>state.account)
  const dispatch = useDispatch()

  const {depositMoney,withdrawMoney}= bindActionCreators(actionCreators,dispatch)
 // console.log("🚀 ~ file: App.js ~ line 13 ~ App ~ AC", AC)

 

  // console.log(account);

return (
    <div>
      <h1>{account}</h1>
   <button onClick={()=>depositMoney(1000)}>Deposit</button>
   <button onClick={()=>withdrawMoney(500)}>withdraw</button>
    </div>
   
  );
}

export default App;
 