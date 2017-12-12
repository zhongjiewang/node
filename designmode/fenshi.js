// 黄阳晔

function timeChunk (ary, fn, count, time) {
    var obj, t;
    var len = ary.length;

    function start () {
        for (var i = 0; i < Math.min(count || 1, ary.length); i++) {
            var obj = ary.shift();
            fn(obj);
        }
    };

    return function () {
        t = setInterval(function(){
            if (ary.length === 0) {  //如果全部节点都已被创建好
                console.log('all crawler finished');
                return clearInterval(t);
            }
            start();
        }, time);
    };
}


var arr = [];
for (var i = 0; i < 100; i++) {
    arr.push(i);
}

setTimeout(function(){
    for (var i = 100; i < 200; i++) {
        arr.push(i);
    }
},5000)

function doSomething () {
    console.log([].shift.call(arguments));
}

var requestRun = timeChunk(arr, doSomething, 10, 1000);

requestRun();

