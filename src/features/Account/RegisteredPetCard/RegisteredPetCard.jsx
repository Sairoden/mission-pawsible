// REACT & LIBRARIES
import { useNavigate, Link } from "react-router-dom";

// STYLES
import "./RegisteredPetCard.scss";

// UI COMPONENTS
import { Modal, Spinner } from "../../../ui";

// HOOKS
import { useUpdatePetStatus, useDeletePet } from "../../../hooks";

function RegisteredPetCard({ id, title, gender, date, image, isVerified }) {
  // HOOKS
  const { updatePetStatus, isPending } = useUpdatePetStatus();
  const { deletePet, isPending: isPending2 } = useDeletePet();

  const navigate = useNavigate();

  if (isPending || isPending2) return <Spinner />;

  return (
    <div>
      <div className="register-middle-container">
        <div className="ribbon-container">
          {!isVerified && <div className="ribbon">Pending</div>}
        </div>
        <Link
          to={`/pet/${id}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
        >
          <div className="middle-img-container">
            <img src={image} alt="shitsupic" className="register-img" />
          </div>
        </Link>
        <div>
          <div className="register-h3">
            <h3 className="register-h3-text">{title}</h3>
          </div>
          <div className="register-span-container">
            <span className="span-text">Gender: {gender}</span>
            <span className="span-text">Last seen: {date}</span>
          </div>
          <div className="register-button-container">
            <button
              className="update-btn"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "instant" });
                navigate(`/editPet/${id}`);
              }}
              disabled={isPending || isPending2}
            >
              UPDATE
            </button>

            <Modal>
              <Modal.Open opens="verify">
                <button
                  disabled={isPending || isPending2}
                  className="listing-btn"
                >
                  CLOSE
                </button>
              </Modal.Open>

              <Modal.Window name="verify">
                <Modal.ConfirmModal
                  disabled={isPending || isPending2}
                  handleReunite={() => updatePetStatus(id)}
                  isVerified={isVerified}
                  handleRemove={() => deletePet(id)}
                />
              </Modal.Window>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisteredPetCard;
