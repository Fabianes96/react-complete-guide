import './Chart.css'
import { ChartBar } from './ChartBar';
export const Chart = ({ dataPoints }) => {
    const dataPointsValues = dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointsValues)
    return (
        <div className="chart">
            {
                dataPoints.map((dataPoint) => {
                    return(
                        <ChartBar 
                            key={dataPoint.label}
                            label={dataPoint.label} 
                            value={dataPoint.value} 
                            maxValue={totalMaximum} 
                        />
                    )
                })
            }
        </div>
    )
};
