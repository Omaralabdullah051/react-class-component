
import './App.css';
import Clock1 from './components/PresentationalComponent/Function';
import Clock2 from './components/PresentationalComponent/Class';
import Clock3 from './components/StatefulComponent/StatefulClass';
import Clock4 from './components/StatefulComponent/StatefulFunction';
import Clock5 from './components2/PresentationalComponent/Function';
import Clock6 from './components2/PresentationalComponent/Class';
import Clock7 from './components2/StatefulComponent/Class';
import Clock8 from './components2/StatefulComponent/Function';
import Clock10 from './components2/StatefulComponent/storeValues';
function App() {
  return (
    <div className="App">
      <Clock1 locale="bn-BD"></Clock1>
      <Clock2 locale="bn-BD"></Clock2>
      <Clock3 locale="bn-BD"></Clock3>
      <Clock4 locale="bn-BD"></Clock4>
      <Clock5 locale="en-US"></Clock5>
      <Clock6 locale="en-US"></Clock6>
      <Clock7 locale="en-US"></Clock7>
      <Clock8 locale="en-US"></Clock8>
      <Clock10 locale="en-US"></Clock10>
    </div>
  );
}

export default App;
