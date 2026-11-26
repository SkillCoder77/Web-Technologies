const now = new Date();

document.querySelector('#today').textContent = `Today: ${now.toLocaleString()}`;
document.querySelector('#greeting').textContent =
  now.getHours() < 12 ? 'Good morning!' : 'Good afternoon!';
document.querySelector('#lucky-number').textContent =
  `Your lucky number today: ${Math.floor(Math.random() * 10)}`;
document.querySelector('#last-modified').textContent =
  `Page last modified: ${document.lastModified}`;
