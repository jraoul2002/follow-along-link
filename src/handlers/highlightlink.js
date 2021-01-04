'use strict';
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

/**
 * creates a mirror-image rendering of the user input and displays the growing artwork
 * @param {Event} event - triggered whenever a user releases a key in the input area
 */
export function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

}