console.log('Hello from car-gallery site');
/* What goes within parentheses is an object or an array acc. to https://www.w3schools.com/jsref/met_console_log.asp, and it can be identified by a variable: 
console.log(img);
OR
console.log(bigImageUrl);
BUT ALSO: 
console.log(clicked);
*/

let myThumbs=document.querySelectorAll('.imgTile');

/* Assignment: replace the big image in the column to the right with the thumbnail picture on which the visitor clicked. */
myThumbs.forEach((img) => {
  img.addEventListener('click', function (e) {
    console.log(e.target.src);
    let thumbUrl=e.target.src;
    let bigImageUrl=document.getElementById('big').src;
    e.target.src=bigImageUrl;
    document.getElementById('big').src=thumbUrl;
  }); /* with or without ; ? Weird that the teacher's version does not have it, and it still works. */
});

/* 
Alternatively:
myThumbs.forEach((img) => {
  img.addEventListener('click', function (e) {
    console.log(e.target.src);
    let thumbsURL=e.target.src;
    let bigImageUrl=document.getElementById('big').src;
    e.target.src=bigImageUrl;
    document.getElementById('big').src=thumbsUrl;
  });
});
OR (unfinished copy of what was on the board):
thumbs.forEach((thumb) => {
  thumb.addEventListener('click', function (e) {
    let tempSrc=bigImage.src;
  })
})

*/



 