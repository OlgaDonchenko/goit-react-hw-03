import css from "./Contact.module.css";
import { IoCall, IoPersonSharp, IoTrashOutline } from "react-icons/io5";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <h3>
          <IoPersonSharp size="25" />
          {name}
        </h3>
        <p>
          <IoCall size="25" />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        <IoTrashOutline size="25" className={css.icon} />
        Delete
      </button>
    </div>
  );
}
