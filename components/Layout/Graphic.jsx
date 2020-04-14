import React, { useState, useEffect} from 'react';
import {
    XYPlot,
    XAxis, 
    YAxis, 
    HorizontalGridLines, 
    LineMarkSeries, 
    makeWidthFlexible
} from 'react-vis';

const Graphic = ({currentCountry}) => {

    const FlexibleXYPlot = makeWidthFlexible(XYPlot)

    const [timeLine, saveTimeLine] = useState([])

    useEffect(() => {
    
        const requestAPI = async () => {
        
          const api = `https://api.thevirustracker.com/free-api?countryTimeline=${currentCountry}`
    
          const result = await fetch(api)
          const data = await result.json()

          let i = 1;
          const tmp = []
    
          const time = Object.entries(data.timelineitems[0])
          
          time.forEach((item, index) => {

            if(item[1].total_cases)
                tmp.push({
                    x: index,
                    y: item[1].total_cases
                })
          });

          saveTimeLine(tmp)

        }
        
        requestAPI()
    
    }, [currentCountry])    

    return ( 
        <>
            <h1>Total de casos</h1>

                <FlexibleXYPlot
                    height = {400}
                >
                    <HorizontalGridLines />
                    <LineMarkSeries
                        data={timeLine}
                    />
                    <XAxis title = "Días"/>
                    <YAxis title = "Número de casos"/>
                </FlexibleXYPlot>
        </>
    );
}
 
export default Graphic;