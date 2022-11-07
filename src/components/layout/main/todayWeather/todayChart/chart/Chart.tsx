
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {CHART_CIRCLE,CHART_BG} from "../../../../../../constants/color";
import ChartData from "../../../../../../daummy/chartData";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);


export const options = {
    responsive: true,

    plugins: {
        legend: {
            display: false,
            position: 'top' as const,

        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',

        },
        xAxis: {
            visible: false,
        }
    },
    scales:{
     y:{
         display:false,
         min:0,
         color:"red",
         borderColor: 'red',
         tickColor: 'red'
     },
     x:{

     }




    }
};

const labels = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];

export const data = {

    labels,
    datasets: [
        {
            data:[10,14,12,15,24,26,30],
            borderColor: "rgba(207,207,205,0.5)",
            backgroundColor:  (context:any) => { //그라디언트사용하기
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, "rgba(207,207,205,0.3)");
                gradient.addColorStop(1, "rgba(191,219,254,0.5)");
                return gradient;
            },
            fill:true,
            pointRadius:5,


        },

    ],
};


function Chart(){
    return(
        <div className="line">
          <Line options={options} data={data} width={10} height={3} />
        </div>
    )
}
export default  Chart;