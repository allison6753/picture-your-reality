import logo from './logo.svg';
import './App.css';
import OverviewGraphic from './OverviewGraphic';
import Input from './Input';

import { VictoryContainer } from 'victory';


const dummyData = {
  "school": {
    "algo": 8,
    "graphics": 15,
    "design": 6,
    "econ": 6,
    "webdev": 3,
    "ml": 2,
    "ta": 5
  },

  "social": {
    "sorority": 7,
    "cultural club": 3,
    "SWE": 1
  },

  "work": {
    "Juni Learning": 6,
    "Starbucks": 5
  },

  "exercise": {
    "gym": 3,
    "frisbee": 4
  }
}
// const data = JSON.parse(dummyData)

function App() {
  return (
    <div>
      <div>Hello</div>

      {/* <Input> </Input> */}
      <OverviewGraphic datain={dummyData}> </OverviewGraphic>

    </div>
  );
}

export default App;
