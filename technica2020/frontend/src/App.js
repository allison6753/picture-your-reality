// import logo from './logo.svg';
import './App.css';
import OverviewGraphic from './OverviewGraphic';
// import UserInput from './UserInput'
// import { VictoryContainer } from 'victory';
import React, { useState } from 'react';
import { VictoryPie } from 'victory';



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

// let data = {
// "school": {},
// "social": {},
// "work": {},
// "exercise": {},
// "other": {}
// }


function App() {

  let [data, setData] = useState({});
  let [category, setCategory] = useState('school');
  let [activity, setActivity] = useState('');
  let [hours, setHours] = useState('');
  let [update, setUpdate] = useState(0);

  const changeCategory = (event) => {
    const newCat = event.currentTarget.value;
    setCategory(newCat)
    // console.log("change category")

  }
  const changeActivity = (event) => {
    const newAct = event.currentTarget.value;
    setActivity(newAct)
    // console.log("change activity")

  }
  const changeHours = (event) => {
    const newHours = Number(event.currentTarget.value);
    setHours(newHours)
    // console.log("change hours")
  }

  const changeUpdate = (event) => {
    setUpdate(update+1)
    // console.log("change hours")
  }


  const storeDatainJSON = (event) => {
    //not sure how this works, need to check later
    const section = data[category]
    const newSection = { ...section }
    newSection[activity] = hours

    let newdata = data
    newdata[category] = newSection 
    // for (const [cat, activities] of Object.entries(data)) {
    //   for( const [act, hour] of Object.entries(activities))
    //     newdata[cat][act] = hour
    //     console.log(`${cat}: ${activities}`);
    // }
    // newdata[category] = {}
    // newdata[category][activity] = hours


    // for (let cat in data) {
    //   for (let act in data[cat]) {
    //     newdata[cat][act] = data[cat][act]
    //   }
    // }
    // newdata[category][activity] = hours


    // setData(0)
    setData(newdata)
    setUpdate(update+1)
    // data[category][activity] = hours

    console.log("this is hours: " + newSection[activity])
    console.log("this is our section: " + JSON.stringify(newSection))

    console.log("this is our newSection: " + JSON.stringify(newSection))

    console.log("this is our data: " + JSON.stringify(data))


  }




  return (
    <div>
      <div>Enter your activities here (submit after each one)</div>


      <label>
        Category:
        <select value={category} onChange={changeCategory}>
          <option value="school">School</option>
          <option value="work">Work</option>
          <option value="social">Social</option>
          <option value="exercise">Exercise</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Activity:
            <input
          name="activity"
          type="string"
          placeholder="activity"
          value={activity}
          onChange={changeActivity} />
      </label>
      <br />
      <label>
        Hours per Week:
            <input
          name="hours"
          type="number"
          placeholder="hours"
          value={hours}
          onChange={changeHours} />
      </label>
      <input type="submit" value="Submit" onClick={storeDatainJSON} />

      <br />
      <br />


      <OverviewGraphic datain={data}> </OverviewGraphic>
      {/* <OverviewGraphic datain={data}> </OverviewGraphic> */}


      {/* <div>

        <VictoryPie //height={500} width = {500}
          data={formatData(data)}
          labels={({ datum }) => `${datum.x} hours: ${datum.y}`}
          height={200}
        />
      </div> */}

    </div>
  );
}

export default App;
