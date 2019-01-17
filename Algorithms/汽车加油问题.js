// 该问题转化为每次剩余油量总能到达下一个加油站
// 贪心选择的策略为，尽可能地减少加油的次数前提下，保证油量总能到达下一个加油站

function Refueling(carMaxMile,gasStationCount,distance){
  let alreadyGo=0;  //已行驶里程
  let Refuel=0;     //加油次数
  distance.forEach((el,index) => {
    alreadyGo+=el;    
    if(alreadyGo+distance[index+1]>carMaxMile){      
      Refuel++;    
      alreadyGo=0; //每次加油后，置已行驶里程为0      
    }    
  });
  return Refuel;
}


const carMaxMile=7 ;
const gasStationCount=7;
let distance=[1,2,3,4,5,1,6,6];

let c=Refueling(carMaxMile,gasStationCount,distance);
console.log(c);