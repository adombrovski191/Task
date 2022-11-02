

var meetings = [];
var rooms = {};
var count = 1; 

for (let i = 0; i < 10; i++){
    var meetingStartDate = getRandomIntInclusive(0,24);
    var meetingEndDate = meetingStartDate +  getRandomIntInclusive(1,5);
    var meeting = {"startDate": meetingStartDate, "endDate": meetingEndDate};
    meetings.push(meeting);
}
meetings = meetings.sort(compare);

console.log("Meetings:")
console.log(meetings);

for (let i = 0; i < meetings.length; i++){
    if(i === 0){
        rooms["Room"+ count] = [];
        rooms["Room"+ count].push(meetings[i]);
        count = count + 1;
    }else if(meetings[i].startDate === meetings[i-1].startDate){
        if(!rooms["Room"+ count]){
            rooms["Room"+ count] = [];
            rooms["Room"+ count].push(meetings[i]);
            count = count + 1;
        }else{
            rooms["Room"+ count].push(meetings[i]);
        }
    }else {
        var some = 0;
        for (var el in rooms){
            if(rooms[el][rooms[el].length - 1].endDate <= meetings[i].startDate && some === 0){
                rooms[el].push(meetings[i]);
                some = 1;
            }
        }
        if(some === 0){
            if(!rooms["Room"+ count]){
                rooms["Room"+ count] = [];
                rooms["Room"+ count].push(meetings[i]);
                count = count + 1;
            }else{
                rooms["Room"+ count].push(meetings[i]);
            }
        }
    }
}


console.log("Rooms:")
console.log(rooms)
console.log(`Total rooms needed: ${count-1}`)




function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function compare( a, b ) {
    if ( a.startDate < b.startDate ){
      return -1;
    }
    if ( a.startDate > b.startDate ){
      return 1;
    }
    if(a.startDate === b.startDate){
        if ( a.endDate < b.endDate ){
          return -1;
      }
      if ( a.endDate > b.endDate ){
          return 1;
      }
    }
    return 0;
  }

