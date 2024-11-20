import s from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li className={s.contactItem}>
      <p>
        <FaUser />
        {name}
        <br />
        <FaPhoneAlt />
        {number}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;
