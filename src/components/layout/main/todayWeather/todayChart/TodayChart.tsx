import './today-chart.scss';
import Chart from "./chart/Chart";
import Text from "./text/Text";



function TodayChart(){
    return(
        <div className='todayChart'>
            <Text />
            <Chart />
        </div>
    )
}
export default TodayChart;