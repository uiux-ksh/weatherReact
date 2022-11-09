import './chart.scss';
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
import {CHART_CIRCLE,} from "../../../../../../constants/color";
import ChartData from "../../../../../../daummy/chartData";
import ChartDataLabels from 'chartjs-plugin-datalabels'
export var defaults: {};

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ChartDataLabels,

);


export const options = {

    responsive: true,
    plugins: {
        datalabels: {
            color: '#1E3A8A',
        },
        legend: {
            display: false,

        },
        title: {
            display: false,
            text: '오늘의 날씨',
            fontSize: 25,

        },



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
         display:false,
         grid:{
             display:false,
             drawBorder: false,
         },

     }
    },
};

const labels = ['아침9시','아침11시','오후1시','오후3시','오후5시','오후7시','오후9시','오후11시','새벽1시','새벽3시','새벽5시','아침7시'];
const ChartDatas = ChartData.map((list)=> list.data);
export const data = {

    labels,
    datasets: [
        {
            data:ChartDatas[0],
            borderColor: "#BFDBFE",
            backgroundColor:  (context:any) => { //그라디언트사용하기
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0.5, "rgba(191,219,254,0.3)");
                gradient.addColorStop(1, "rgba(237,237,235,0.3)");
                return gradient;
            },
            fill:true,
            pointRadius: 12,
            pointHoverRadius: 17,



        },

    ],
};


function Chart(){
    return(
        <div className="line">
          <Line options={options} data={data}  width={10} height={3} />
        </div>
    )
}
export default  Chart;