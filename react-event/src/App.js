import './App.css';
import EventChangeComp from './components/EventChangeComp';
import EventChangeFuncComp from './components/EventChangeFuncComp';
import EventRefComp from './components/EventRefComp';
import EventRefCompTest from './components/EventRefCompTest';
import EventTest from './components/EventTest';
import StroyBox from './components/StoryBox';


function App() {
  return (
    <div className="App">
      <EventChangeComp />
      <EventChangeFuncComp />
      <EventRefComp />
      <EventRefCompTest />
      <EventTest />
      <StroyBox />
    </div>
  );
}

export default App;
