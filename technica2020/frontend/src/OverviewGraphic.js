import React, { useState } from 'react';
import { VictoryPie, VictoryLabel, VictoryChart, VictoryAxis, VictoryLegend } from 'victory';


export default function OverviewGraphic(datain) {


    const formatDataGeneral = (datain) => {

        let dataArr = []
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
        const timeleft = 24 * 7 - total
        let n = "hours left \n (" + Math.round(timeleft / 7) + "  per day)\n "

        dataArr.push({ x: n, y: 24 * 7 - total })

        return dataArr
    }

    const formatDataSpecific = (datain, cat) => {

        if (cat === null) {
            return [{ x: "click on a category!", y: 168 }]
        }


        let dataArr = []
        let newdata = datain['datain']

        console.log("newdata:" + newdata)

        for (let set in newdata[cat]) {
            const hours = newdata[cat][set]
            dataArr.push({ x: set, y: hours })
        }

        console.log(dataArr)
        return dataArr
    }

    const pieData = formatDataGeneral(datain)
    const [breakdown, setBreakdown] = useState([{ x: "click on a category!", y: 168 }]);
    const [catName, setCatName] = useState("None");

    return (


        <div style={{
            display: 'flex',
            alignItems: 'center',

        }}>

            <div width={1000}>
                
                <h2 style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>---------------------------------------General Overview---------------------------------------</h2>
                <VictoryChart
                    padding={50}
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

                        data={pieData.map(({ x, y }) => ({ name: `${x} hours: ${y}` }))}
                    //labels={({ datum }) => `${datum.x} hours: ${datum.y}`}

                    />
                    <VictoryAxis style={{
                        axis: { stroke: "transparent" },
                        ticks: { stroke: "transparent" },
                        tickLabels: { fill: "transparent" }
                    }} />
                    <VictoryPie
                        data={pieData}
                        // labels={({ datum }) => `${datum.x} hours: ${datum.y}`}
                        labels={() => null}
                        height={200}
                        colorScale="qualitative"
                        labelComponent={<VictoryLabel renderInPortal />}

                        events={[{
                            target: "data",
                            eventHandlers: {
                                onClick: (evt, clickedProps) => {
                                    const clickedIndex = clickedProps.index;
                                    console.log("index:" + clickedIndex)
                                    const x = pieData[clickedIndex].x
                                    console.log("x is: " + x)
                                    setBreakdown(formatDataSpecific(datain, x))
                                    console.log("data is now:" + JSON.stringify(formatDataSpecific(datain, x)))
                                    setCatName(x)
                                }
                            }
                        }]}
                    />

                </VictoryChart>
            </div>

            <div display="flex">
                <h3 style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>Breakdown: {catName}</h3>
                <VictoryPie
                    data={breakdown}
                    labels={({ datum }) => `${datum.x}: ${datum.y} hr`}
                    // labels={() => null}
                    colorScale="blue"
                    labelPlacement="parallel"
                    padding={100}
                />
            </div>

        </div>

    )
}