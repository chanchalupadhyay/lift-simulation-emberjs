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
    let liftToBeMovedIndex = 0;
    if (direction === "up") {
      liftToBeMovedIndex = this.liftFloors.findIndex(
        (ele) => ele < currentFloorIndex - 1
      );
    } else {
      liftToBeMovedIndex = this.liftFloors.findIndex(
        (ele) => ele > currentFloorIndex - 1
      );
    }

    if (liftToBeMovedIndex === -1) {
      liftToBeMovedIndex = 0;
    }

    while (this.liftFloors[liftToBeMovedIndex] !== currentFloorIndex) {
      this.liftFloors.set(
        liftToBeMovedIndex,
        this.liftFloors[liftToBeMovedIndex] > currentFloorIndex
          ? this.liftFloors[liftToBeMovedIndex] - 1
          : this.liftFloors[liftToBeMovedIndex] + 1
      );
      this.liftFloors.arrayContentDidChange(liftToBeMovedIndex, 0, 0);
    }
  }
}
