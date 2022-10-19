import logo from './logo.svg';
import MapComp from './components/MapComp';
import MapCompTest from './components/MapCompTest';
import LifeCycleComp from './components/LifeCycleComp';
import ClassNameComp from './components/ClassNameComp';

function App() {
  return (
    <div className="App">
      <MapComp />
      <MapCompTest />
      <LifeCycleComp />
      <ClassNameComp/>
    </div>
  );
}

export default App;
