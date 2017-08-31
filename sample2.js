//模拟构建2个待查询对象，一个是天气的，一个是航班时间的

var wetherInfo = ['sunny' , 'sunny' , 'sunny' , 'sunny' , 'sunny' , 'sunny' , 'sunny' , 'sunny' , 'sunny' , 'sunny' , 'sunny' , 'sunny' ];

var flightInfo = {
    startHour: '9',
    endHour: 11,
    startCity: 'Guangzhou',
    endCity: 'Beijing',
}

function checkFlightSchedule(timeCallBack) {
    console.log('开始查询起飞时间');
    
    timeCallBack(flightInfo.startHour);
}

function checkWetherInfo(weatherCallBack) {
    console.log('开始查询天气');
    var hourscheck = toString(flightInfo.startHour); 
    weatherCallBack(wetherInfo[hourscheck]);
}

function timeCallBack(time) {
    console.log(time);
}

function weatherCallBack(weather) {
    console.log(weather);
}

function startWork() {
    checkFlightSchedule(timeCallBack);
    checkWetherInfo(weatherCallBack);
}

startWork();


