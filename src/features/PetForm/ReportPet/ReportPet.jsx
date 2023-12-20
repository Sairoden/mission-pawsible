// REACT & LIBRARIES
import { useForm } from "react-hook-form";

// STYLES
import "./ReportPet.scss";

// UI COMPONENTS
import {
  Input,
  InputSelect,
  InputFile,
  InputTextArea,
  Button,
} from "../../../ui";

function ReportPet() {
  // REACT-HOOK-FORM
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  return (
    <div>
      <div className="reportpet_container">
        <div className="reportpet-header">
          <h1>REPORT PET</h1>
        </div>
        <div className="reportpet-middle-container">
          <div className="reportpet-left-container">
            <form className="left-form1">
              <label>PET NAME</label>
              <Input width="95%" id="name" register={register} />
            </form>
            <form className="left-form2">
              <div>
                <label>First name:</label>
                <br />
                <Input width="19vw" id="name" register={register} />
              </div>
              <div>
                <label>Last name:</label>
                <br />
                <Input width="18.9vw" id="name" register={register} />
              </div>
            </form>
            <form className="left-form3">
              <label>Upload an Image</label>
              <InputFile />
            </form>
            <form className="left-form4">
              <label>Pet Status</label>
              <div className="form4-content">
                <div>
                  <input type="radio" />
                  <label>LOST PET</label>
                </div>
                <div>
                  <input type="radio" />
                  <label>FOUND PET</label>
                </div>
              </div>
            </form>
            <form className="left-form5">
              <label>COLOR</label>
              <Input width="95%" id="name" register={register} />
              <label></label>
            </form>
            <form className="left-form6">
              <div className="left-form6-content">
                <label>SIZE</label>
                <InputSelect width="19vw" />
              </div>
              <div className="left-form6-content">
                <label>GENDER</label>
                <InputSelect width="18.9vw" />
              </div>
            </form>
          </div>
          <div className="reportper-right-container">
            <form className="right-form1">
              <div>
                <label>MICROCHIPPED</label>
                <br />
                <InputSelect width="18vw" />
              </div>
              <div>
                <label>DATE LAST SEEN</label>
                <br />
                <Input width="18vw" id="name" register={register} />
              </div>
            </form>
            <form className="right-form2">
              <label>
                Location Last Seen (Please provide a detailed address)
              </label>
              <Input width="42vw" id="name" register={register} />
            </form>
            <form className="right-form3">
              <label>Description</label>
              <InputTextArea rows={10} cols={40} />
            </form>
            <form className="right-form4">
              <label>Message</label>
              <InputTextArea rows={10} cols={40} />
            </form>
          </div>
        </div>
        <div className="reportpet-footer-btn">
          <Button variation="secondary">CANCEL</Button>
          <Button type="submit" variation="primary" icon={true}>
            SAVE & POST
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ReportPet;
