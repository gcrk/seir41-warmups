const forecast = {
  monday: {
    temperature: 20,
    rainfall: 12
  },
  tuesday: {
    temperature: 25,
    rainfall: 6
  },
  wednesday: {
    temperature: 27,
    rainfall: 24
  },
  thursday: {
    temperature: 32,
    rainfall: 65
  },
  friday: {
    temperature: 18,
    rainfall: 2
  },
  saturday: {
    temperature: 26,
    rainfall: 0
  },
  sunday: {
    temperature: 27,
    rainfall: 14
  }
};

const beachPlanner = function (temp, rain, data) {
  const weather = Object.values(data);
  const days = Object.keys(data);
  const bestDay = []

  for ( let i = 0;  i < weather.length; i ++ ) {
    if ( weather[i].temperature >= temp && weather[i].rainfall <= rain ){
      bestDay.push(days[i])
    }
  }
  if (bestDay.length === 0 ) {
    console.log("Sorry but you should stay at home this week")
  } else {
    console.log("You can go to the beach", bestDay)
  }
}

beachPlanner(24, 8, forecast)
beachPlanner(25, 0, forecast)
beachPlanner(28, 0, forecast)



// BONUS : Better way to iterate in an object


const beachPlanner2 = function (temp, rain, data) {
  const bestDay = [];
  for ( const day in data ) {
    if (data[day].temperature >= temp && data[day].rainfall <= rain ) {
      bestDay.push(day)
    }
  }
  if (bestDay.length === 0 ) {
    console.log("Sorry but you should stay at home this week")
  } else {
    console.log("You can go to the beach", bestDay)
  }
}
beachPlanner2(24, 8, forecast)
beachPlanner2(25, 0, forecast)
beachPlanner2(28, 0, forecast)
