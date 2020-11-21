const http = new EasyHTTP;

// get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err,response) {
// if(err) {
//     console.log(err)
// } else {
// console.log(response);
// }
// });


// create Data
// const data = {
//     title: 'custom post from my PC using PUT Method',
//     body: 'This is a custom post from my personal computer with PUT Method'
// };


// create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
// if(err) {
//     console.log(err)
// } else {
//     console.log(post);
// }
// });


// create data for 'PUT' method
// const data = {
//     title: 'for PUT method',
//     body: 'this is cutom data to be updated with put method'
// };


// //update post
// http.put('https://jsonplaceholder.typicode.com/posts/3', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });


// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/3', function(err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
})