// REACT & LIBRARIES
import { useForm } from "react-hook-form";

// STYLES
import "./ReportPet.scss";

// UI COMPONENTS
import { Input, InputSelect, InputFile, InputTextArea } from "../../../ui";

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
      <Input width="22vw" id="name" register={register} />
      <InputSelect width="22vw" />
      <InputFile />
      <InputTextArea rows={10} cols={50} />
    </div>
  );
}

export default ReportPet;
