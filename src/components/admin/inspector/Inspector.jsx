import React, { useContext, useState } from 'react'
import Sidebar from './Sidebar'
import { Context } from '../../../Context'

const Inspector = () => {
    const { attendence } = useContext(Context);
  return (
    <div className="inspector">
        <Sidebar/>

        <div className="forins">
            {/* {
                attendence.map((el) => {
                    console.log(el);
                    return(
                        <div className="inspector-card">
                            <p>{el.name}</p>
                        </div>
                    )
                })
            } */}
        </div>
    </div>
  )
}

export default Inspector