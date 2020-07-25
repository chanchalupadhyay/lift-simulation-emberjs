import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';


export default class HomeComponent extends Component {

  @service router;


  @tracked isHomePage = this.router.currentRouteName === 'simulation'
  model() {
    return {
      isHomePage: 'test',
      text: 'textvalue'
    };
  }

}
