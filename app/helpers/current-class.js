import { helper } from '@ember/component/helper';

export default helper(function currentClass([liftIndex, floorLevel]/*, hash*/) {
  // console.log(params);
  return 'top: calc(100% - 90px - '+ (floorLevel -1) * 110+'px); left: calc(200px + '+(liftIndex + 1) * 350+'px);';
});
