
'use strict';
button.addEventListener("click", CollectionPosts);
function CollectionPosts() {
    //string convertation
    var x = document.getElementsByClassName("info");
    var arr=[];
    [].forEach.call(x, function (el) {
        arr.push(eval(el.value))
    });
    //array all objects
    var flattened=arr.reduce(function (a,b) {
        return a.concat(b)
    });

    for(var i=0;i<flattened.length;i++){

        Object.keys(flattened[i]).map(function(key) {
            //this each all elements with this
            console.log('---------------------------');
            console.log(flattened[i][key]);
            console.log('---------------------------');

            function condition(value, index, array) {
                var result;
                if (index == i) {
                    result = false;
                }
                else{
                    result=true;
                }
                return result;
            };
            var arrayAfterFilter=flattened.filter(condition);


            [].forEach.call(arrayAfterFilter, function (elem) {

                Object.keys(elem).map(function(k) {
                    //this each all elements with this
                    console.log(elem[k])
                })


            });

        })
    }



}
