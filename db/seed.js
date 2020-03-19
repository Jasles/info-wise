
let City = require('../models/Cities.js')
let State = require('../models/State.js')
let Event = require('../models/Event.js')




let newCities=[   
    {
        name: 'Alpharetta'
    
    },
    {
         name: 'Atlanta'
    
    },
    {
        name: 'Athens'
   
    },
    {
        name: 'Augusta'

    },
    {
        name: 'Crawfordville'
    
    },
    {
        name: 'Jacksonville'
    
    },
    {
        name: 'Miami'
    
    },
    {
        name: 'Naples'
    
    },
    {
        name: 'Austin'
    
    },   
    {
        name: 'Dallas'
    },
    {
        name: 'Fort Worth'
    
    },
    {
        name: 'Houston'
    
    },
  
    {
        name: 'San Antonio'
    
    },
    {
        name: 'Waco'
    
    },


]
  
let newStates=[
    {
        name: 'Gerorgia'
    },
    {
        name: 'Florida'
    },
    {
        name: 'Texas'
    },
]

let newEvents=[
  {
    name: 'Tornado',
    comment:' 3/19/2020',
    image: 'download.jpg',
    time: '8:02 AM',
    city: 'Alpharetta'
    
  },
  {
    name: 'Heavy Storm',
    comment:' 3/16/2020',
    image: String,
    time: '10:32 PM',
    city: 'Alpharetta'
    
  },
  {
    name: 'Tree Down',
    comment:' 12/2/2020',
    image: String,
    time: '10:02 AM',
    city: 'Alpharetta'
    
  },
  {
    name: 'Flash Flood',
    comment:' 9/08/2020',
    image: String,
    time: '12:08 AM',
    city: 'Alpharetta'
    
  }
]


let stateObjects;
let cityObjects;
let eventObjects;

City.deleteMany().then(() => {
   return State.deleteMany();
}).then(() =>{
    return Event.deleteMany()


}). then(() => {
    return State.create(newStates);
  }).then(states => {
    stateObjects = states;
    return City.create(newCities);
  }).then(cities => {
      cityObjects= cities

      return Event.create(newEvents);
  }).then(events => {
      eventObjects = events;

    cityObjects[0].state = stateObjects[0];
    return cityObjects[0].save();
  })
  .then(()=> {cityObjects[1].state = stateObjects[0];
  return cityObjects[1].save();
})
.then(()=> {cityObjects[2].state = stateObjects[0];
    return cityObjects[2].save();
  })
  .then(()=> {cityObjects[3].state = stateObjects[0];
    return cityObjects[3].save();
  })
  .then(()=> {cityObjects[4].state = stateObjects[1];
    return cityObjects[4].save();
  })
  .then(()=> {cityObjects[5].state = stateObjects[1];
    return cityObjects[5].save();
  })
  .then(()=> {cityObjects[6].state = stateObjects[1];
    return cityObjects[6].save();
  })
  .then(()=> {cityObjects[7].state = stateObjects[1];
    return cityObjects[7].save();
  })
  .then(()=> {cityObjects[8].state = stateObjects[1];
    return cityObjects[8].save();
  })
  .then(()=> {cityObjects[9].state = stateObjects[2];
    return cityObjects[9].save();
  })
  .then(()=> {cityObjects[10].state = stateObjects[2];
    return cityObjects[10].save();
  })
  .then(()=> {cityObjects[11].state = stateObjects[2];
    return cityObjects[11].save();
  })
  .then(()=> {cityObjects[12].state = stateObjects[2];
    return cityObjects[12].save();
  }).then(()=> {cityObjects[13].state = stateObjects[2];
    return cityObjects[13].save();
  })
  .then(()=> {eventObjects[0].state = cityObjects[0];
  return eventObjects[0].save();  
  })


.then(() => {
  console.log('Database seeded');
});


