import { helper } from '@ember/component/helper';

function isEdgeIndex([arrayLength, currentIndex, direction]) {

  if(direction === 'up')
    return arrayLength !== currentIndex;

  if(direction === 'down'){
    return currentIndex !== 1;
  }
}

export default helper(isEdgeIndex);
