import Component from '@glimmer/component';

import { tracked } from '@glimmer/tracking';

export default class LiftComponent extends Component {

  @tracked liftIndex = this.args.liftNumber;
  @tracked floorLevel = this.args.liftFloor;
}
