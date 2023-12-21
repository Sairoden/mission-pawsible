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
        <form action="">
          <div className="reportpet-middle-container">
            <div className="reportpet-left-container">
              <div className="left-form1">
                <label htmlFor="text">Pet Name</label>
                <Input width="95%" id="name" register={register} />
              </div>
              <div className="left-form2">
                <div>
                  <label htmlFor="text">First name</label>
                  <br />
                  <Input width="19vw" id="name" register={register} />
                </div>
                <div>
                  <label htmlFor="text">Last name</label>
                  <br />
                  <Input width="18.9vw" id="name" register={register} />
                </div>
              </div>
              <div className="left-form3">
                <label htmlFor="text">Upload an Image</label>
                <InputFile />
              </div>
              <div className="left-form4">
                <label htmlFor="text">Pet Status</label>
                <div className="form4-content">
                  <div className="form4-radio-input">
                    <input type="radio" />
                    <label htmlFor="text">Lost Pet</label>
                  </div>
                  <div className="form4-radio-input">
                    <input type="radio" />
                    <label htmlFor="text">Found Pet</label>
                  </div>
                </div>
              </div>
              <div className="left-form5">
                <label htmlFor="text">Color</label>
                <Input width="95%" id="name" register={register} />
                <label></label>
              </div>
              <div className="left-form6">
                <div className="left-form6-content">
                  <label htmlFor="text">Size</label>
                  <InputSelect width="19vw" />
                </div>
                <div className="left-form6-content">
                  <label htmlFor="text">Gender</label>
                  <InputSelect width="18.9vw" />
                </div>
              </div>
            </div>
            <div className="reportper-right-container">
              <div className="right-form1">
                <div>
                  <label htmlFor="text">Microchipped</label>
                  <br />
                  <InputSelect width="18vw" />
                </div>
                <div>
                  <label htmlFor="text">Date last seen</label>
                  <br />
                  <Input
                    type="date"
                    width="18vw"
                    id="name"
                    register={register}
                  />
                </div>
              </div>
              <div className="right-form2">
                <label htmlFor="text">
                  Location Last Seen (Please provide a detailed address)
                </label>
                <Input width="42vw" id="name" register={register} />
              </div>
              <div className="right-form3">
                <label htmlFor="text">Description</label>
                <InputTextArea rows={10} cols={40} />
              </div>
              <div className="right-form4">
                <label htmlFor="text">Message</label>
                <InputTextArea rows={10} cols={40} />
              </div>
            </div>
          </div>
          <div className="reportpet-footer-btn">
            <Button type="cancel" variation="secondary">
              CANCEL
            </Button>
            <Button type="submit" variation="primary" icon={true}>
              SAVE & POST
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReportPet;
