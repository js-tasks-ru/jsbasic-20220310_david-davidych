function makeFriendsList(friends) {
  const ul = document.createElement('ul');

  ul.innerHTML = friends.map(friends => `
      <li>${friends.firstName} ${friends.lastName}</li>
  `).join('');

  return ul;
  
}
