module.exports = function longestConsecutiveLength(array) {
  if (array.length==0) return 0;

  var arrOfLength=[];
  let set=new Set(array); 
  let max,min; 

  max=min=array[0];

for (let x of set){
     if (set.has(min-1) && !set.has(max+1)){
          set.delete(min); 
          min--;
     } 

     if (!set.has(min-1)&&set.has(max+1)){
          set.delete(max);
          max++; 
      } 

      if (set.has(min-1)&&set.has(max+1)){
        set.delete(min);
        set.delete(max);
        min--;
        max++;
      }

      if (!set.has(min-1)&&!set.has(max+1)){
        arrOfLength.push(max-min+1);
        set.delete(min);
        set.delete(max);
        min=max=set.values().next().value;
      }
    } 
  return Math.max(...arrOfLength);
}