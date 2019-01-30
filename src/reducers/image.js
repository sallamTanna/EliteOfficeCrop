import  {CHANGE_IMAGE} from '../constants/actionTypes';
const INIIAL_STATE = '';

const imageReducer = (state=INIIAL_STATE, action) =>{
  switch(action.type){
    case CHANGE_IMAGE: return applyChangeImageName(state, action)
    default: return state;
  }
}

const applyChangeImageName = (state, action) => {
  console.log('this is the action.name inside image.js file', action.name);
  return state=action.name;
  // return state='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTVf63Vm3XgOncMVSOy0-jSxdMT8KVJIc8WiWaevuWiPGe0Pm';
}

export default imageReducer;
