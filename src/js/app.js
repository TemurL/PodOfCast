import * as TLFunc from './modules/functions.js'
import { commentsSlider } from './modules/commentsSlider.js';
import { headerBackdrop } from './modules/headerBackdrop.js';
import { mobMenu } from './modules/mobMenu.js';
import { articleCardSetTags } from './modules/articleCardSetTags.js';
import { episodesTabSerch } from './modules/episodesTabSerch.js';

TLFunc.isWebp()

mobMenu();
headerBackdrop();
commentsSlider();
articleCardSetTags();
episodesTabSerch();
