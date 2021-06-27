console.log("Hey SEIR-41!");

 // create array
 // Move Sunday to the start of the array

 const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'];

 daysOfTheWeek.pop();
 daysOfTheWeek.unshift('Sunday');
 daysOfTheWeek.sort();

 console.log(daysOfTheWeek);

 //create second array for daysOfTheWeek
 //nest arrays
 //remove weekends
 //sort the remaining array

 const daysOfTheWeek2 = [['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday'], ['Saturday', 'Sunday']];


 daysOfTheWeek2.pop();
 daysOfTheWeek2[0].sort();

 console.log(daysOfTheWeek2);
