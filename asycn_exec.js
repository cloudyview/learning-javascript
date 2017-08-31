//个人健康管理，每天要练习，查询过往一周锻炼情况

//构建查询函数，采用回调方式

function checkExecInfo(execInfo1) {
    console.log('starting check my info')
    
   
    //构建被查询数据数组
    var execInfoList = ['跑步 0米' , '跑步 1000米' , '跑步 2000米' , '跑步 3000米' , '跑步 4000米' , '跑步 5000米' , '跑步 6000米' ];

    execInfo1(execInfoList);

}

function execInfo( execInfoList) {
        for (i = 0 ; i < 7 ; i++ ) {
            j = i + 1;
            if (j == 6 ) {
                console.log('星期天' + '锻炼情况是：' + execInfoList[i]);
            } else {
                console.log('星期' + j + '锻炼情况是：' + execInfoList[i]);
            }

        }
        
}

checkExecInfo(execInfo);