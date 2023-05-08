import { ref, remove } from "firebase/database";
import { ReactElement } from "react";
import { db } from "../../firebase";
import { useAppDispatch } from "../../hooks/useStore";
import { fetchOrders } from "../../store/actions/ordersActions";

export const DeleteModal = ({
  id,
  open,
  close,
  title,
  photo,
}: {
  id: number;
  open: boolean;
  close: (arg: boolean) => void;
  title: string;
  photo: string;
}): ReactElement => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    remove(ref(db, `/orders/${id}`)).then(() => {
      dispatch(fetchOrders());
      close(false);
    });
  };

  return (
    <>
      {open ? (
        <div className="modal__overlay">
          <div className="modal">
            <div className="modal__close" onClick={() => close(false)}>
              X
            </div>
            <h3 className="modal__title">Do you want to delete this come ?</h3>
            <div className="modal__body">
              <div className="modal__body--image">
                <img src={photo} alt={title} />
              </div>
              <div className="modal__body--name">
                <span className="item-name__main">{title}</span>
              </div>
            </div>
            <div className="modal__actions">
              <button
                className="modal__actions--reject"
                onClick={() => close(false)}
              >
                Скасувати
              </button>
              <button className="modal__actions--aprove" onClick={handleDelete}>
                Удалить
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
