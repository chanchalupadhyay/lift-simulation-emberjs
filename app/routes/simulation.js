import Route from '@ember/routing/route';

export default class SimulationRoute extends Route {
  model() {
    return ([
      {
        floorLevel: 1,
        currentLift:-1,
        hasLift: false
      },
      {
        floorLevel: 2,
        currentLift: 1,
        hasLift: true
      },
      {
        floorLevel: 3,
        currentLift: -1,
        hasLift: false
      }
    ])
  }
}
