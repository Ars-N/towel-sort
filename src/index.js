
// You should implement your task here.

module.exports = (arr)=> {return arr?arr.map((el,i)=>{return i%2?el.reverse():el}).flat():[]}

