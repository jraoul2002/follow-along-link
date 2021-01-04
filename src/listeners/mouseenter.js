'use strict';

import { highlightLink } from '../handlers/highlightlink.js';
const triggers = document.querySelectorAll('a');
/**
 * @name change separator
 * calls handler that changes the mirror-art's separator
 */
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
