//间接回调案例
//构建查询函数，插入resultInfo（）作为回调函数，数据回传的手段

function checkFlightingInfo(resultInfo) {
    console.log('开始查询航班信息');
    
    //构建查询信息

    var flightingInfo = {
        start: '8-23 , 0800',
        end: '8-23 , 0900',
        howLong: '1 hour',
        startCity: 'Guangzhou',
        endCity: 'Beijing',
    };

    resultInfo(flightingInfo.start , flightingInfo.end);
};

//构建回调函数本身，所以回传方式，是由回调函数自己来设计的

function resultInfo(start , end ) {
    console.log('hello');
    var flightingInfo = {
        start1: start,
        end1: end,
    }
    return;
};


//执行查询

checkFlightingInfo(resultInfo);

console.log('起飞时间：' + flightingInfo.start1);
console.log('降落时间: ' + flightingInfo.end1);

