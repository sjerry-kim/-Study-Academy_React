import './App.css';
import StateEffectHookComp from './components/StateEffectHookComp';
import ReducerComp from './components/ReducerComp';
import UseMemoComp from './components/UseMemoComp';
import CallbackComp from './components/CallbackComp';
import RefComp from './components/RefComp';
import ContextCompAll from './components/ContextCompAll';
import ContextParentComp1 from './components/CentextParentComp1';


function App() {
  return (
    <div className="App">
      <StateEffectHookComp />
      <ReducerComp />
      <UseMemoComp />
      <CallbackComp />
      <RefComp />
      <ContextCompAll />
      <ContextParentComp1 />
    </div>
  );
}

export default App;
