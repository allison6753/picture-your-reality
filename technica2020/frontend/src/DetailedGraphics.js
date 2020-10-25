import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

export default function OverviewGraphic(datain) {

    const formatData = (datain) => {

        let dataArr = []
        let newdata = datain['datain']

        let total = 0
        for (let cat in newdata) {
            for (let set in newdata[cat]) {
                const hours = newdata[cat][set]
                total += hours
                dataArr.push({x: set, y: hours})
            }

        }

        console.log("total hours!!!! " + total)

        const timeleft = 24 * 7 - total
        let n = "hours left \n (" + Math.round(timeleft / 7) + "  per day)\n "

        dataArr.push({ x: n, y: 24 * 7 - total })

        console.log(dataArr)
        return dataArr
    }

    const pieData = formatData(datain)

    return (
        
        <div>
            
                <VictoryPie 
                    data={pieData}
                    labels={({ datum }) => `${datum.x}: ${datum.y} hr`}
                    // labels={() => null}
                    width={600}
                    colorScale="qualitative"
                    labelPlacement="parallel"
                    labelComponent={<VictoryLabel renderInPortal/>}
                    padding={100}
                />

        </div>

    )
}