import css from './Styles/ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contactList__item}>
            {name}: {number}
            <button
              type="button"
              onClick={() => {
                onDeleteContact(id);
              }}
              className={css.contactList__btn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
