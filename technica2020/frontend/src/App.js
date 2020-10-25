import './App.css';
import OverviewGraphic from './OverviewGraphic';
import DetailedGraphics from './DetailedGraphics';
import React, { useState } from 'react';



function App() {

  let [data, setData] = useState({});
  let [category, setCategory] = useState('school');
  let [activity, setActivity] = useState('');
  let [hours, setHours] = useState('');
  let [update, setUpdate] = useState(0);

  const changeCategory = (event) => {
    const newCat = event.currentTarget.value;
    setCategory(newCat)

  }
  const changeActivity = (event) => {
    const newAct = event.currentTarget.value;
    setActivity(newAct)

  }
  const changeHours = (event) => {
    const newHours = Number(event.currentTarget.value);
    setHours(newHours)
  }


  const storeDatainJSON = (event) => {
    const section = data[category]
    const newSection = { ...section }
    newSection[activity] = hours

    let newdata = data
    newdata[category] = newSection

    setData(newdata)
    setUpdate(update + 1)
    setActivity("")
    setHours('')
  }


  return (
    <div style={{ parent: { overflow: "visible", display: 'inline-block', } }} >
      <div >
        <h2> Enter your activities here (submit after each one)</h2>

        <label>
          Category:{" "}
          <select value={category} onChange={changeCategory}>
            <option value="school">School</option>
            <option value="work">Work</option>
            <option value="social">Social</option>
            <option value="exercise">Exercise</option>
            <option value="sleep">Sleep</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Activity:{" "}
          <input
            name="activity"
            type="string"
            placeholder="activity"
            value={activity}
            onChange={changeActivity} />
        </label>
        <br />
        <label>
          Hours per Week:{" "}
          <input
            name="hours"
            type="number"
            placeholder="hours"
            value={hours}
            onChange={changeHours} />
        </label>
        <input type="submit" value="Submit" onClick={storeDatainJSON} />
      </div>

      <OverviewGraphic datain={data}> </OverviewGraphic>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <h2 >---------------------------------------Detailed Overview---------------------------------------</h2>
      </div>

      <div>
        <DetailedGraphics datain={data}> </DetailedGraphics>

      </div>

    </div>
  );
}

export default App;
