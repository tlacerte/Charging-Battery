import React, {useState, useEffect} from 'react'
import Battery from '../Battery/Battery'

function BatteryHookContainer(props){
    const [batteryData, setBatteryData] = useState({
        level: .55,
        charging: true
    });

    useEffect(() => {
        console.log('useEffect was called')
    })
    
    return (
        <>
            <Battery 
                level={batteryData.level} 
                charging={batteryData.charging}
            />
            <button 
                onClick={() => setBatteryData({
                    level: batteryData.level + .01, 
                    charging: false})}>
                Update Level
            </button>
        </>
    )
}

export default BatteryHookContainer