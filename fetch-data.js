async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');\
    try {
        const response = await fetch(apiUrl);
        const users = response.json();
        dataContainer.innerHTML = '';

        const userList = document.createElement('ul');
        users.array.forEach(user => {
            const listItem = document.createElement('li')
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.' 
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData)