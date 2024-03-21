let contacts = [];

function addContact() {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name !== '' && email !== '') {
        contacts.push({ name, email });
        displayContacts();
        nameInput.value = '';
        emailInput.value = '';
    }
}

function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}

function editContact(index, newName, newEmail) {
    if (newName.trim() !== '' && newEmail.trim() !== '') {
        contacts[index].name = newName;
        contacts[index].email = newEmail;
        displayContacts();
    }
}

function displayContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.textContent = `${contact.name} - ${contact.email}`;
        
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteContact(index));

        // Create edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            const newName = prompt('Enter new name:', contact.name);
            const newEmail = prompt('Enter new email:', contact.email);
            editContact(index, newName, newEmail);
        });
        
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        contactList.appendChild(li);
    });
}

// Initial display of contacts
displayContacts();
