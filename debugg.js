const deleteUser = (key) => {
  fetch(`https://your-project-id.firebaseio.com/users/${key}.json`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      return response.json();
    })
    .then(() => {
      console.log("User deleted successfully");

      // Remove the corresponding row from the table
      const row = document.getElementById(`user-${key}`);
      if (row) row.remove();
    })
    .catch(error => console.error("Error deleting user:", error));
};
