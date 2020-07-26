import { helper } from '@ember/component/helper';

function isEdgeIndex([arrayLength, currentIndex, direction]) {

  if(direction === 'up')
    return arrayLength - 1 !== currentIndex;

  if(direction === 'down'){
    return currentIndex !== 0;
  }
}

export default helper(isEdgeIndex);
