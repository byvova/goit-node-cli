const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

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

const args = process.argv.slice(2);
const [action, id, name, email, phone] = args;

invokeAction({ action, id, name, email, phone });
