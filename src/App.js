import { useDispatch, useSelector } from 'react-redux';
import { changeLastDrumPadTouched } from './reducers/drum';
import DrumMachine from './components/DrumMachine'
import './App.scss';

function App() {
  const lastPadTouched = useSelector((state) => state.drum.lastPadTouched)
  const dispatch = useDispatch()

  function handleBtnOnClick() {
    dispatch(changeLastDrumPadTouched(lastPadTouched + 1))
  }

  return (
    <div className="App">
      <h1>Drum Machine</h1>
      <DrumMachine />
    </div>
  );
}

export default App;
