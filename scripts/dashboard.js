const testingList = [{
  name: 'Thi giữa kỳ',
  dueDate: '2024-04-22'
}, {
  name: 'Thi cuối kỳ',
  dueDate: '2024-06-22'
}];

renderTestingList();

function renderTestingList() {
  let testingListHTML = '';

  for (let i = 0; i < testingList.length; i++) {
    const testingObject = testingList[i];
    const { name, dueDate } = testingObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        TestingList.splice(${i}, 1);
        renderTestingList();
      " class="delete-testing-button">Delete</button> 
    `;
    testingListHTML += html;
  }

  document.querySelector('.js-testing-list')
    .innerHTML = testingListHTML;
}

function addTesting() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  testingList.push({
    name,
    dueDate
  });

  inputElement.value = '';

  renderTestingList();
}

const userList = [{
  firstName: 'Nguyễn',
  lastName: 'Dương',
  isClass: 'E21CQCN01-B',
  nameTesting: 'Thi cuối kì',
  score: '4.5',
  DOB: '2003-06-09'
}, {
  firstName: 'Nguyễn',
  lastName: 'Đức',
  isClass: 'E21CQCN01-B',
  nameTesting: 'Thi cuối kì',
  score: '1.5',
  DOB: '2003-05-15'
}];

renderUserList();

function renderUserList() {
  let userListHTML = '';

  for (let i = 0; i < userList.length; i++) {
    const userObject = userList[i];
    const { firstName, lastName, isClass, nameTesting, score, DOB } = userObject;
    const html = `
      <div>${firstName}</div>
      <div>${lastName}</div>
      <div>${isClass}</div>
      <div>${nameTesting}</div>
      <div>${score}</div>
      <div>${DOB}</div>
      <button onclick="
        userList.splice(${i}, 1);
        renderUserList();
      " class="delete-user-button">Delete</button> 
    `;
    userListHTML += html;
  }

  document.querySelector('.js-user-list')
    .innerHTML = userListHTML;
}

function addUser() {
  const inputElement1 = document.querySelector('.js-name-input');
  const firstName = inputElement1.value;

  const inputElement2 = document.querySelector('.js-name-input');
  const lastName = inputElement2.value;

  const inputElement3 = document.querySelector('.js-name-input');
  const isClass = inputElement3.value;

  const inputElement4 = document.querySelector('.js-name-input');
  const nameTesting = inputElement4.value;

  const inputElement5 = document.querySelector('.js-name-input');
  const score = inputElement5.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dob = dateInputElement.value;

  userList.push({
    firstName,
    lastName,
    isClass,
    nameTesting,
    score,
    dob
  });

  inputElement1.value = '';
  inputElement2.value = '';
  inputElement3.value = '';
  inputElement4.value = '';
  inputElement5.value = '';
  dateInputElement.value = '';

  renderUserList();
}