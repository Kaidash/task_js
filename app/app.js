
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
                  console.log('-------------');
                  console.log(el[key]);
                  console.log('-------------');
                  [].forEach.call(flattened, function (el) {

                          Object.keys(el).map(function(key) {
                              //this each all elements with this
                              console.log(el[key]);
                          })


                  });
              })


        }
        // console.log(a_values);
        // console.log(b_values);
        for (var a_key in a_values) {
           

            if (a_values[a_key]==b_values[a_key]) {
                // console.log(a_values[a_key])
            }
        }

    });


}
