/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) => {
  const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId);

  // Validate that variables exist
  if (headerToggle && navbarId) {
    toggleBtn.addEventListener('click', () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle('show-menu');
      // change icon
      toggleBtn.classList.toggle('bx-x');
    });
  }
};
showMenu('header-toggle', 'navbar');

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link');

function colorLink() {
  linkColor.forEach((l) => l.classList.remove('active'));
  this.classList.add('active');
}

linkColor.forEach((l) => l.addEventListener('click', colorLink));

//========================================================================================================================================================

const namesArray = [
  'John',
  'Bob',
  'Jack',
  'Olivia',
  'Olga',
  'William',
  'Simon',
];
document.write(`Оригінальній масив: ${namesArray}`);

inclusionSort(namesArray);

document.write(`Відсортований масив: ${namesArray}`);

const findIndexOlga = findIndex_binarySearch(namesArray, 'Olga');

document.write(`Індекс: ${findIndexOlga}`);

//========================================================================================================================================================

function findIndex_binarySearch(arr, searchElement) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] === searchElement) return middle;
    if (arr[middle] < searchElement) start = middle + 1;
    if (arr[middle] > searchElement) end = middle - 1;
  }
  return -1;
}

//========================================================================================================================================================

function inclusionSort(array) {
  let currentElement, i;
  for (let k = 1; k < array.length; k++) {
    currentElement = array[k];
    i = k - 1;
    while (i >= 0 && array[i] > currentElement) {
      array[i + 1] = array[i];
      i = i - 1;
    }
    array[i + 1] = currentElement;
  }
  return array;
}
