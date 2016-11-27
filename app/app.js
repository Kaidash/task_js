
'use strict';
    const posts=[
        {
        post:'About me',
        idAuthor:'01',
        comments:['001','002']

    },
    {
        post:'About me01',
        idAuthor:'02',
        comments:['001','002']

    },{
        post:'About me02',
        idAuthor:'03',
        comments:['001','002']

    }];
const comments=[
    {
        namePost:'About me',
        author:'Nikita',
        text:'Cool!!',
        status:true

    },
    {
        namePost:'About me',
        author:'John',
        text:'Yes',
        status:true

    },
    {
        namePost:'About me02',
        author:'Liza',
        text:'Lol!!!!',
        status:true

    }];
const users=[
    {
        id:'01',
        name:'Nikita',
        avatar:'http://localhost/img/img1.jpg'

    },
    {
        id:'02',
        name:'John',
        avatar:'http://localhost/img/img2.jpg'

    },
    {
        id:'03',
        name:'Liza',
        avatar:'http://localhost/img/img3.jpg'

    }];
button.addEventListener("click", CollectionPosts);
function CollectionPosts() {
    //string convertation
    var x = document.getElementsByClassName("info");
    var arr=[];
    [].forEach.call(x, function (el) {
        arr.push(eval(el.value))
    });
    // console.log(arr);
    var flattened=arr.reduce(function (a,b) {
        return a.concat(b)
    });
    // console.log(flattened)
    var postsALl=flattened.reduce(function (previousValue, currentValue, index, flattened){
        console.log(previousValue);
        console.log(currentValue);
    });
}





// function handler2(x) {
//     var postsAll = new CollectionPosts(x);
//
// }