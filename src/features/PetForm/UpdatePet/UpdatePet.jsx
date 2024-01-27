// REACT & LIBRARIES
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

// STYLES
import "./UpdatePet.scss";

// UI COMPONENTS
import {
  Input,
  InputSelect,
  InputFile,
  InputTextArea,
  Button,
  ErrorInput,
  Spinner,
} from "../../../ui";

// UTILITIES
import {
  cats,
  dogs,
  sizes,
  genders,
  microchips,
  petTypes,
  inputFormat,
} from "../../../utils";

// HOOKS
import { useUpdatePet, useGetUserPet } from "../../../hooks";

function UpdatePet() {
  const { userPet, isPending } = useGetUserPet();
  const { updatePet, isPending: isPending2 } = useUpdatePet();
  const navigate = useNavigate();

  // REACT-HOOK-FORM
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
    watch,
    control,
  } = useForm();

  const petTypeOptions = petTypes.map(petType => ({
    value: petType,
    label: petType,
  }));
  const catOptions = cats.map(cat => ({ value: cat, label: cat }));
  const dogOptions = dogs.map(dog => ({ value: dog, label: dog }));
  const sizeOptions = sizes.map(size => ({ value: size, label: size }));
  const genderOptions = genders.map(gender => ({
    value: gender,
    label: gender,
  }));
  const microchipOptions = microchips.map(microchip => ({
    value: microchip,
    label: microchip,
  }));

  const today = new Date().toISOString().split("T")[0];

  const selectedPetType = watch("petType");

  const onSubmit = data => {
    data.petName = inputFormat(data.petName);
    data.color = inputFormat(data.color);
    data.location = inputFormat(data.location);
    data.description = inputFormat(data.description);
    data.message = inputFormat(data.message);

    updatePet({ newPet: { ...data }, petId: id });
  };

  const handleReset = () => navigate(-1);

  useEffect(() => {
    if (userPet) reset(userPet);
  }, [userPet, reset]);

  if (isPending || isPending2 || !userPet) return <Spinner />;

  let {
    id,
    petName,
    petType,
    breed,
    color,
    size,
    gender,
    location,
    microchipped,
    date,
    message,
    description,
    status,
  } = userPet;

  return (
    <div className="updatePet spacing-t spacing-b">
      <div className="container">
        <div className="updatePet-header">
          <h2 className="updatePet-header-main">EDIT PET</h2>
        </div>

        <form className="updatePet-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="updatePet-body-left">
            {/* pet name */}
            <div className="updatePet-body-left-name">
              <div className="updatePet-body-input">
                <label htmlFor="petName" className="label">
                  Pet Name <ErrorInput>{errors?.petName?.message}</ErrorInput>
                </label>
                <br />
                <Input
                  id="petName"
                  required="Please provide a pet name"
                  register={register}
                  defaultValue={petName}
                  disabled={isPending || isPending2}
                />
              </div>
            </div>

            {/* breed & type */}
            <div className="updatePet-body-left-class">
              <div className="updatePet-body-input">
                <label htmlFor="petType" className="label">
                  Pet Type <ErrorInput>{errors?.petType?.message}</ErrorInput>
                </label>
                <br />
                <Controller
                  defaultValue={petType}
                  name="petType"
                  disabled={isPending || isPending2}
                  control={control}
                  rules={{ required: "Please select a pet type" }}
                  render={({ field }) => (
                    <InputSelect
                      id="petType"
                      options={[
                        { value: "", label: "Select one" },
                        ...petTypeOptions,
                      ]}
                      {...field}
                    />
                  )}
                />
              </div>

              <div className="updatePet-body-input">
                <label htmlFor="breed" className="label">
                  Breed <ErrorInput>{errors?.breed?.message}</ErrorInput>
                </label>
                <br />
                <Controller
                  defaultValue={breed}
                  name="breed"
                  disabled={isPending || isPending2}
                  control={control}
                  rules={{ required: "Please select a breed" }}
                  render={({ field }) => (
                    <InputSelect
                      id="breed"
                      options={[
                        { value: "", label: "Select one" },
                        ...(selectedPetType === "Dog"
                          ? dogOptions
                          : catOptions), // Render dog options if "Pet Type" is Dog, otherwise cat options
                      ]}
                      {...field}
                    />
                  )}
                />
              </div>
            </div>

            {/* image */}
            <div className="updatePet-body-left-image">
              <div className="updatePet-body-input">
                <label htmlFor="images" className="label">
                  Upload an Image
                  <ErrorInput>{errors?.images?.message}</ErrorInput>
                </label>
                <br />
                <div className="updatePet-body-fileUpload">
                  <InputFile
                    register={register}
                    accept="image/*"
                    multiple={true}
                    id="images"
                    disabled={isPending || isPending2}
                  />
                </div>
              </div>
            </div>

            {/* status */}
            <div className="updatePet-body-left-status">
              <div className="updatePet-body-input">
                <label htmlFor="status" className="label">
                  Status <ErrorInput>{errors?.status?.message}</ErrorInput>
                </label>
                <br />
                <Controller
                  defaultValue={status}
                  disabled={isPending || isPending2}
                  name="status"
                  control={control}
                  rules={{ required: "Please select a pet status" }}
                  render={({ field }) => (
                    <InputSelect
                      id="status"
                      options={[
                        { value: "", label: "Select one" },
                        { value: "Lost", label: "Lost" },
                        { value: "Found", label: "Found" },
                      ]}
                      {...field}
                    />
                  )}
                />
              </div>
            </div>

            {/* color */}
            <div className="updatePet-body-left-color">
              <div className="updatePet-body-input">
                <label htmlFor="color" className="label">
                  Color <ErrorInput>{errors?.color?.message}</ErrorInput>
                </label>
                <br />
                <Input
                  defaultValue={color}
                  register={register}
                  id="color"
                  required="Please provide a color"
                  disabled={isPending || isPending2}
                />
              </div>
            </div>

            {/* sizer */}
            <div className="updatePet-body-left-other">
              <div className="updatePet-body-input">
                <label htmlFor="size" className="label">
                  Size <ErrorInput>{errors?.size?.message}</ErrorInput>
                </label>
                <br />
                <Controller
                  disabled={isPending || isPending2}
                  defaultValue={size}
                  name="size"
                  control={control}
                  rules={{ required: "Please select a size" }}
                  render={({ field }) => (
                    <InputSelect
                      id="size"
                      options={[
                        { value: "", label: "Select one" },
                        ...sizeOptions,
                      ]}
                      {...field}
                    />
                  )}
                />
              </div>

              {/* gender */}
              <div className="updatePet-body-input">
                <label htmlFor="gender" className="label">
                  Gender <ErrorInput>{errors?.gender?.message}</ErrorInput>
                </label>
                <br />
                <Controller
                  defaultValue={gender}
                  disabled={isPending || isPending2}
                  name="gender"
                  control={control}
                  rules={{ required: "Please select a gender" }}
                  render={({ field }) => (
                    <InputSelect
                      id="gender"
                      options={[
                        { value: "", label: "Select one" },
                        ...genderOptions,
                      ]}
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className="updatePet-body-right">
            {/* micro & date */}
            <div className="updatePet-body-right-other">
              <div className="updatePet-body-input">
                <label htmlFor="microchipped" className="label">
                  Microchipped
                  <ErrorInput>{errors?.microchipped?.message}</ErrorInput>
                </label>
                <br />
                <Controller
                  defaultValue={microchipped}
                  disabled={isPending || isPending2}
                  name="microchipped"
                  control={control}
                  rules={{ required: "Please select a microchip" }}
                  render={({ field }) => (
                    <InputSelect
                      id="microchipped"
                      options={[
                        { value: "", label: "Select one" },
                        ...microchipOptions,
                      ]}
                      {...field}
                    />
                  )}
                />
              </div>

              <div className="updatePet-body-input">
                <label htmlFor="date" className="label">
                  Date last seen
                  <ErrorInput>{errors?.date?.message}</ErrorInput>
                </label>
                <br />
                <Input
                  defaultValue={date}
                  disabled={isPending || isPending2}
                  type="date"
                  register={register}
                  id="date"
                  required="This field is required"
                  max={today}
                />
              </div>
            </div>

            {/* location */}
            <div className="updatePet-body-right-location">
              <div className="updatePet-body-input">
                <label htmlFor="location" className="label">
                  Location Last Seen (Please provide a detailed address)
                  <ErrorInput>{errors?.location?.message}</ErrorInput>
                </label>
                <br />
                <Input
                  defaultValue={location}
                  disabled={isPending || isPending2}
                  register={register}
                  id="location"
                  required="This field is required"
                />
              </div>
            </div>

            {/* description */}
            <div className="updatePet-body-right-desc">
              <div className="updatePet-body-input">
                <label htmlFor="description" className="label">
                  Description
                  <ErrorInput>{errors?.description?.message}</ErrorInput>
                </label>
                <br />
                <InputTextArea
                  defaultValue={description}
                  disabled={isPending || isPending2}
                  name="description"
                  id="description"
                  required="This field is required"
                  register={register}
                />
              </div>
            </div>

            {/* message */}
            <div className="updatePet-body-right-msg">
              <div className="updatePet-body-input">
                <label htmlFor="message" className="label">
                  Message <ErrorInput>{errors?.message?.message}</ErrorInput>
                </label>
                <br />
                <InputTextArea
                  defaultValue={message}
                  disabled={isPending || isPending2}
                  name="message"
                  id="message"
                  required="This field is required"
                  register={register}
                />
              </div>
            </div>
          </div>

          <div className="updatePet-footer-btn btns">
            <Button
              disabled={isPending || isPending2}
              variation="secondary"
              size="width"
              onClick={handleReset}
            >
              CANCEL
            </Button>
            <br />
            <Button
              disabled={isPending || isPending2}
              type="submit"
              variation="primary"
              icon={true}
              size="width"
            >
              SAVE & POST
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdatePet;
