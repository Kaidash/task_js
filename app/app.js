
'use strict';
button.addEventListener("click", CollectionPosts);
function CollectionPosts() {
    //string convertation
    var x = document.getElementsByClassName("info");
    var arr=[];
    [].forEach.call(x, function (el) {
        arr.push(eval(el.value))
    });

    var flattened=arr.reduce(function (a,b) {
        return a.concat(b)
    });

    [].forEach.call(flattened, function (el) {
        var a_values;
        var b_values;

        for(var i=1;i<flattened.length;i++){
             a_values = Object.keys(el).map(function(key){
                return el[key];
            });
            b_values = Object.keys(flattened[i]).map(function(key){
                return flattened[i][key];
            });
        }

        for (var a_key in a_values) {
           

            if (a_values[a_key]==b_values[a_key]) {
                console.log(a_values[a_key])
            }
        }

    });


}
