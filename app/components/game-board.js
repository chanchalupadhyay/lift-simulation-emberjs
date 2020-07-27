import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class GameBoardComponent extends Component {
  @tracked floorDetails = [
    {
      floorLevel: 5,
      floorName: '5th Floor',
    },
    {
      floorLevel: 4,
      floorName: '4th Floor',
    },
    {
      floorLevel: 3,
      floorName: '2nd Floor',
    },
    {
      floorLevel: 2,
      floorName: '1st Floor',
    },
    {
      floorLevel: 1,
      floorName: 'Ground Floor',
    }
  ];

  @tracked liftFloors = [1, 3];

  @action
  buttonPressed(direction, currentFloorIndex) {

    let nearestLiftIndex = 0;
    let distanceOfLift = Number.MAX_SAFE_INTEGER;
    for(let itr = 0; itr < this.liftFloors.length; itr += 1) {
      if(distanceOfLift > Math.abs(this.liftFloors.get(itr) - currentFloorIndex) && distanceOfLift !== -1){
        distanceOfLift = Math.abs(this.liftFloors.get(itr) - currentFloorIndex);
        nearestLiftIndex= itr;
      }
    }

    while (this.liftFloors[nearestLiftIndex] !== currentFloorIndex) {
      this.liftFloors.set(
        nearestLiftIndex,
        this.liftFloors[nearestLiftIndex] > currentFloorIndex
          ? this.liftFloors[nearestLiftIndex] - 1
          : this.liftFloors[nearestLiftIndex] + 1
      );
      this.liftFloors.arrayContentDidChange(nearestLiftIndex, 0, 0);

    }
  }
}
