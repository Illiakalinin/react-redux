export const loadUsers = currentPage =>
  fetch(`https://randomuser.me/api?seed=pe&page=${currentPage}&results=3`).then(
    response => response.json()
  );
