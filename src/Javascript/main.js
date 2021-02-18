import printToDom from './Helpers/printToDom';
import pageInit from '.././Javascript/Helpers/pageInit';
import profileString from '../Javascript/Helpers/Data/profileString';

const init = () => {
  printToDom("#profile-card", profileString);
  pageInit();
};

init();
