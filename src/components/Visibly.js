import React from 'react'
import CITC from './Citc'
import moment from 'moment'

function Visibly() {
    return (
        <div>
            Visibly Project
            {`Today's Date and Time : ${moment().format('MMMM Do YYYY, h:mm:ss a')}`}
            <CITC/>
        </div>
    )
}

export default Visibly
