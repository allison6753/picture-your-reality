import React from 'react';
import ReactDOM from 'react-dom';
import * as V from 'victory';

import { VictoryPie, VictoryChart, VictoryAxis, VictoryContainer } from 'victory';

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

const dummyData2 = [
    { x: "school", y: 40 },
    { x: "social", y: 10 },
    { x: "work", y: 11 },
    { x: "exercise", y: 7 },
]



export default function OverviewGraphic(datain) {

    //parse datain to a form that the graph will accept
    
    //console.log("datain",datain)

    const d2 = {
        "school": {
            "class1": 2,
            "class2": 3
        },
        "work": {
            "juni": 4
        }
    }

    let dataArr = []

    console.log("d2 is " + datain)

    let newdata = datain['datain']

    let total = 0
    for (let cat in newdata) {
        console.log("cat " + cat)
        let hours = 0
        for (let set in newdata[cat]) {
            hours += newdata[cat][set]
        }
        total+=hours

        dataArr.push({ x: cat, y: hours })
    }

    const timeleft = 24*7 - total
    let n = "hours left \n (" + Math.round(timeleft/7) + "  per day)\n total"
    
    dataArr.push({x: n, y: 24*7 - total})

    console.log(dataArr)


    return (
        // <VictoryContainer width="50%" height="50%">

        // <VictoryChart  domainPadding={20} >

        <div>
            
            <VictoryPie //height={500} width = {500}
                data={dataArr}
                labels={({ datum }) => `${datum.x} hours: ${datum.y}`}
                height={200}
            />
        </div>


        // </VictoryChart>
        // </VictoryContainer>
    )
}