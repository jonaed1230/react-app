import React, { Component } from 'react';
var faker = require('faker');

class App extends Component {
  constructor(props) {
    super(props);
    // load some data
    this.state={
      planets: {
        moon: [{ name: 'Jonaed', count: 0}, { name: 'Ashik', count: 0}],
        sun: [{ name: 'Mission', count: 0}, { name: 'Bayjid', count: 0}]
      }
    };
    this.updateCount = this.updateCount.bind(this);
    var noakhali = [];
    for (var i=0; i <= 1000; i++) {
      var name = faker.name.findName();
      var count = 0;
      noakhali.push({name, count});
    };
    this.state.planets.noakhali = noakhali;
  };
  componentDidMount() {
    console.log('App Re renders');
  }
  
  componentWillUpdate() {
    console.log('App is rendering');
  }
  componentDidUpdate() {
    console.log('App Rendering finished');
  }
  updateCount(planet, personName){
    // take a copy of state
    const newPlanets = this.state.planets;
    // find that planet and person and increase it's count
    const Planet = newPlanets[planet];
    
    for (let i = 0; i< Planet.length; i++) {
      const Name = personName;
      if (Planet[i].name === Name) {
        Planet[i].count++;
        break;
      };
    };
    
    // setstate to newPlanets state
    this.setState({planets: newPlanets});
    
  }
  render() {
    const { planets } = this.state;
    return (
      <div className="App" index={planets}>
        {Object.keys(planets).map(planet => (
          <div key={planet}>
            {planet}
            <ul>
              {planets[planet].map(person => (
                <li key={person.name}>

                  <button onClick={()=>this.updateCount(planet, person.name)}>{person.name}, {person.count}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
