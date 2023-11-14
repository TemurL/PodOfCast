import * as TLFunc from './modules/functions.js'
import { commentsSlider } from './modules/commentsSlider.js';
import { headerBackdrop } from './modules/headerBackdrop.js';
import { mobMenu } from './modules/mobMenu.js';
import { commentsHeightSet } from './modules/commentsHeightSet.js';

TLFunc.isWebp()

mobMenu();
headerBackdrop();
commentsSlider();
commentsHeightSet();
