import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GameBoardComponent extends Component {

  @tracked board = [
    {
      floorLevel: 1,
      currentLift:1,
      hasLift: false,
      nearestLiftFloor: 2
    },
    {
      floorLevel: 2,
      currentLift: 1,
      hasLift: true,
      nearestLiftFloor: 2
    },
    {
      floorLevel: 3,
      currentLift: -1,
      hasLift: false,
      nearestLiftFloor: 2
    },
    {
      floorLevel: 4,
      currentLift: 2,
      hasLift: true,
      nearestLiftFloor: 4
    },
    {
      floorLevel: 5,
      currentLift: -1,
      hasLift: false,
      nearestLiftFloor: 4
    }
  ]

  @action
  buttonPressed(direction, currentIndex) {
    const listOfLiftFloors = this.board.filter(ele => ele.hasLift).map(ele => ele.floorLevel);
    const nearestLift = this.board[currentIndex -1].nearestLiftFloor;
    
    // const
    // this.board.map((ele, index) => {
    //   if(index + 1 === nearestLift) {

    //   }
    // })
    console.log(listOfLiftFloors);
  }

}
