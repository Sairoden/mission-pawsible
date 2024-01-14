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
    <div className="reportPet spacing-t spacing-b">
      <div className="container">
        <div className="reportPet-header">
          <h2 className="reportPet-header-main">REPORT PET</h2>
        </div>
        <form className= "reportPet-body" action="">
            <div className="reportPet-body-left">
              {/* pet name */}
              <div className="reportPet-body-left-name">

                <div className="reportPet-body-input">
                  <label htmlFor="text" className="label"> Pet Name </label>
                  <br />
                  <Input id="name" register={register} />
                </div>

            </div>
              {/* breed & type */}
              <div className="reportPet-body-left-class">

              <div className="reportPet-body-input">
                  <label htmlFor="text" className="label"> Pet Type </label>
                  <br />
                  <InputSelect id="name" register={register} />
                </div>

                <div className="reportPet-body-input">
                  <label htmlFor="text" className="label"> Breed </label>
                  <br />
                  <Input id="name" register={register} />
                </div>

            </div>
              {/* image */}
              <div className="reportPet-body-left-image">

                <div className="reportPet-body-input">
                  <label htmlFor="text" className="label"> Upload an Image </label>
                  <br />
                  <div className="reportPet-body-fileUpload">
                    <InputFile />
                  </div>
                </div>
                
              </div>
              {/* status */}
              <div className="reportPet-body-left-status">
                <div className="reportPet-body-input">
                  <label htmlFor="text" className="label"> Pet Status </label>
                  <br />
                  <div className="reportPet-body-left-radio">

                    <div className="reportPet-body-radio-input">
                      <input type="radio" />
                      <label htmlFor="text" className="label"> Lost Pet </label>
                    </div>

                    <div className="reportPet-body-radio-input">
                      <input type="radio" />
                      <label htmlFor="text" className="label"> Found Pet </label>
                    </div>

                  </div>
                </div>
                

              </div>
              {/* color */}
              <div className="reportPet-body-left-color">

              <div className="reportPet-body-input">
                  <label htmlFor="text" className="label"> Color </label>
                  <br />
                  <Input size="medium" id="name" register={register} />
              </div>
                
              </div>
              {/* other */}
              <div className="reportPet-body-left-other">

                  <div className="reportPet-body-input">
                    <label htmlFor="text" className="label"> Size </label>
                    <br />
                    <InputSelect />
                  </div>

                  <div className="reportPet-body-input">
                    <label htmlFor="text" className="label"> Gender </label>
                    <br />
                    <InputSelect />
                  </div>

              </div>
          </div>

          <div className="reportPet-body-right">
              {/* micro & date */}
            <div className="reportPet-body-right-other">
              <div className="reportPet-body-input">
                <label htmlFor="text" className="label"> Microchipped </label>
                <br />
                <InputSelect />
              </div>
              <div className="reportPet-body-input">
                <label htmlFor="text" className="label"> Date last seen </label>
                <br />
                <Input
                  type="date"
                  id="name"
                  register={register}
                />
              </div>
            </div>
            {/* location */}
            <div className="reportPet-body-right-location">
              <div className="reportPet-body-input">
                <label htmlFor="text" className="label"> Location Last Seen (Please provide a detailed address) </label>
                <br />
                <Input id="name" register={register} size="medium" />
              </div>
            </div>
            {/* description */}
            <div className="reportPet-body-right-desc">
              <div className="reportPet-body-input">
                <label htmlFor="text" className="label"> Description </label>
                <br />
                <InputTextArea />
              </div>
            </div>
            {/* message */}
            <div className="reportPet-body-right-msg">
              <div className="reportPet-body-input">
                <label htmlFor="text" className="label"> Message </label>
                <br />
                <InputTextArea />
              </div>
            </div>
          </div>
          {/* </div> */}
        </form>

        <div className="reportpet-footer-btn btns">
            <Button type="cancel" variation="secondary" size="small">
              CANCEL
            </Button>
            <Button type="submit" variation="primary" icon={true} size="small">
              SAVE & POST
            </Button>
        </div>
      </div>
    </div>
    
 );
}

export default ReportPet;
