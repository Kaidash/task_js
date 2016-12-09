
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

    [].forEach.call(flattened, function (el) {
        for(var i=1;i<flattened.length;i++){
              Object.keys(el).map(function(key) {
                  //this each all elements with this
                  console.log(el[key]);
                  console.log('------------');

                  [].forEach.call(flattened, function (elem) {
                            for(var p in elem){
                                if(el[key]=elem[p]){
                                    console.log(el[key])
                                }
                            }
                  });
              })
        }
    });
}
