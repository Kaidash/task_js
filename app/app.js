
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
    console.log(flattened);
    [].forEach.call(flattened, function (el) {
        var a_values;
        var b_values;

        for(var i=1;i<flattened.length;i++){
              Object.keys(el).map(function(key) {
                  //this each all elements with this
                  console.log(el[key]);
                  // [].forEach.call(flattened.splice(i,i+1), function (elem) {
                  [].forEach.call(flattened.splice(i,i+1), function (elem) {

                      Object.keys(elem).map(function(k) {
                              //this each all elements with this
                              console.log('///////////////////');
                              console.log(elem[k]);
                          })


                  });
              })


        }
    });


}
