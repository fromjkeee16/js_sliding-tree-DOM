'use strict';

const root = document.querySelector('.tree');

createExpandableTree(root);

function createExpandableTree(element) {
  for (const child of element.children) {
    const innerUl = child.querySelector('ul');

    if (!innerUl) {
      return;
    }

    const textNode = findTextNode(child);
    let title;

    if (textNode) {
      title = document.createElement('span');
      title.textContent = textNode.textContent.trim();
      textNode.replaceWith(title);
    }

    title.addEventListener('click', () => {
      innerUl.style.display = innerUl.style.display === 'none' ? '' : 'none';
    });
    createExpandableTree(innerUl);
  }
}

function findTextNode(element) {
  for (const child of element.childNodes) {
    if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) {
      return child;
    }
  }

  return null;
}
