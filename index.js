const { listContacts, getContactById, removeContact, addContact } = require('./src/contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      console.table(await listContacts());
      break;

    case 'get':
      console.log(await getContactById(id));
      break;

    case 'add':
      console.log(await addContact(name, email, phone));
      break;

    case 'remove':
      console.log(await removeContact(id));
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction({
  action: process.argv[2],
  id: process.argv[3],
  name: process.argv[3],
  email: process.argv[5],
  phone: process.argv[6],
});
