import React from 'react';
// import ReactDOM from 'react-dom';
// import * as V from 'victory';

import { VictoryPie, VictoryLabel, VictoryChart, VictoryAxis, VictoryContainer, VictoryLegend } from 'victory';

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



    const formatData = (datain) => {

        let dataArr = []

        console.log("data-in is " + datain)

        let newdata = datain['datain']

        let total = 0
        for (let cat in newdata) {
            console.log("cat " + cat)
            let hours = 0
            for (let set in newdata[cat]) {
                hours += newdata[cat][set]
            }

            total += hours


            dataArr.push({ x: cat, y: hours })
        }

        console.log("total hours!!!! " + total)

        const timeleft = 24 * 7 - total
        let n = "hours left \n (" + Math.round(timeleft / 7) + "  per day)\n total"

        dataArr.push({ x: n, y: 24 * 7 - total })

        console.log(dataArr)
        return dataArr
    }

    const pieData = formatData(datain)
    // const componentDidUpdate (prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.props.userID !== prevProps.userID) {
    //       this.fetchData(this.props.userID);
    //     }
    //   }
    // useEffect(() => {
    //     //document.title = `You clicked ${count} times`;
    //   });
    return (
        // <VictoryContainer width="50%" height="50%">

        // <VictoryChart  domainPadding={20} >

        <div>
            {/* <VictoryChart >

                <VictoryLegend x={125} y={50}
                    title="Legend"
                    centerTitle
                    orientation="horizontal"
                    gutter={20}
                    style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
                    // data={[
                    //     { name: "One", symbol: { fill: "tomato", type: "star" } },
                    //     { name: , symbol: { fill: "orange" } },
                    //     { name: "", symbol: { fill: "gold" } }
                    // ]}
                    data={pieData.map(({ x, y }) => ({ name: x, symbol: { fill: 'blue' } }))}
                />
                <VictoryPie //height={500} width = {500}
                    data={formatData(pieData)}
                    labels={({ datum }) => `${datum.x} hours: ${datum.y}`}
                    height={200}
                    colorScale="qualitative"
                />
            </VictoryChart> */}

            <VictoryChart
               
                standalone={true}
            >
                <VictoryLegend
                    borderComponent={<g />}
                    borderPadding={0}
                    title="Legend"
                    centerTitle
                    orientation="vertical"
                    gutter={0}
                    colorScale="qualitative"
                    padding={70}

                    data={pieData.map(({ x, y }) => ({ name: `${x} hours: ${y}`}))}
                                        //labels={({ datum }) => `${datum.x} hours: ${datum.y}`}

                />
                <VictoryAxis style={{
                    axis: { stroke: "transparent" },
                    ticks: { stroke: "transparent" },
                    tickLabels: { fill: "transparent" }
                }} />
                <VictoryPie 
                    data={pieData}
                    //labels={({ datum }) => `${datum.x} hours: ${datum.y}`}
                    labels={() => null}
                    height={200}
                    colorScale="qualitative"
                />
            </VictoryChart>



        </div>


    )
}