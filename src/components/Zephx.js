import React from 'react'
import CITC from './Citc'
import {LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'

function Zephx() {
    const localizer = momentLocalizer(moment)

        const data = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      ];

      const myEventsList = [
        {
          id: 0,
          title: 'Meeting',
          start: moment({ hours: 8 }).toDate(),
          end: moment({ hours: 10 }).toDate(),
        },
        {
          id: 1,
          title: 'Lunch',
          start: moment({ hours: 12 }).toDate(),
          end: moment({ hours: 13 }).toDate()
        },
        {
          id: 2,
          title: 'Coding',
          start: moment({ hours: 14 }).toDate(),
          end: moment({ hours: 17 }).toDate(),
        },
      ];

    return (
        <div>
            Zephx Project
            <CITC />
            <div className="linechart">{<LineChart
                width={400} 
                height={400}
                data={data}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                <XAxis dataKey="name" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
            </LineChart>}</div>
            <div>
                <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                />
            </div>
        </div>
    )
}

export default Zephx
