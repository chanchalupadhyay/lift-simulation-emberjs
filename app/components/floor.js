import Component from "@glimmer/component";

export default class FloorComponent extends Component {
  constructor() {
    super(...arguments);
    console.log(this.args);
  }
}
