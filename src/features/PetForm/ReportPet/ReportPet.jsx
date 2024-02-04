// REACT & LIBRARIES
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

// STYLES
import "./ReportPet.scss";
import toast from "react-hot-toast";

// UI COMPONENTS
import {
  Input,
  InputSelect,
  InputFile,
  InputTextArea,
  Button,
  ErrorInput,
  Spinner,
  Map,
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
import { useCreatePet, useUrlPosition } from "../../../hooks";

function ReportPet() {
  const { createPet, isPending } = useCreatePet();

  // REACT-HOOK-FORM
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    getValues,
  } = useForm();

  // MAPS
  const [lat, lng] = useUrlPosition();
  const [location, setLocation] = useState("");
  const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json";

  // OPTIONS
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

    createPet(data);
  };

  const handleReset = () => reset();

  useEffect(() => {
    if (!lat && !lng) return;

    const fetchLocation = async () => {
      try {
        const { data } = await axios(
          `${BASE_URL}?latlng=${lat},${lng}&key=${
            import.meta.env.VITE_GOOGLE_KEY
          }`
        );

        setLocation(data.results[0].formatted_address);
      } catch (err) {
        toast.error("Failed to fetch location");
      }
    };

    fetchLocation();
  }, [lat, lng]);

  if (isPending) return <Spinner />;

  return (
    <div className="reportPet spacing-t spacing-b">
      <div className="container">
        <div className="reportPet-header">
          <h2 className="reportPet-header-main">REPORT PET</h2>
        </div>

        <form className="reportPet-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="reportPet-body-left">
            {/* pet name */}
            <div className="reportPet-body-left-name">
              <div className="reportPet-body-input">
                <label htmlFor="petName" className="label">
                  Pet Name <ErrorInput>{errors?.petName?.message}</ErrorInput>
                </label>
                <br />
                <Input
                  id="petName"
                  required="Please provide a pet name"
                  register={register}
                  disabled={isPending}
                />
              </div>
            </div>

            {/* breed & type */}
            <div className="reportPet-body-left-class">
              <div className="reportPet-body-input">
                <label htmlFor="petType" className="label">
                  Pet Type <ErrorInput>{errors?.petType?.message}</ErrorInput>
                </label>
                <br />
                <Controller
                  name="petType"
                  disabled={isPending}
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

              <div className="reportPet-body-input">
                <label htmlFor="breed" className="label">
                  Breed <ErrorInput>{errors?.breed?.message}</ErrorInput>
                </label>
                <br />
                <Controller
                  name="breed"
                  disabled={isPending}
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
            <div className="reportPet-body-left-image">
              <div className="reportPet-body-input">
                <label htmlFor="images" className="label">
                  Upload an Image
                  <ErrorInput>{errors?.images?.message}</ErrorInput>
                </label>
                <br />
                <div className="reportPet-body-fileUpload">
                  <InputFile
                    register={register}
                    accept="image/*"
                    multiple={true}
                    required="Please provide an image"
                    id="images"
                    disabled={isPending}
                  />
                </div>
              </div>
            </div>

            {/* status */}
            <div className="reportPet-body-left-status">
              <div className="reportPet-body-input">
                <label htmlFor="status" className="label">
                  Status <ErrorInput>{errors?.status?.message}</ErrorInput>
                </label>
                <br />
                <Controller
                  name="status"
                  disabled={isPending}
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
            <div className="reportPet-body-left-color">
              <div className="reportPet-body-input">
                <label htmlFor="color" className="label">
                  Color <ErrorInput>{errors?.color?.message}</ErrorInput>
                </label>
                <br />
                <Input
                  register={register}
                  id="color"
                  required="Please provide a color"
                  disabled={isPending}
                />
              </div>
            </div>

            {/* sizer */}
            <div className="reportPet-body-left-other">
              <div className="reportPet-body-input">
                <label htmlFor="size" className="label">
                  Size <ErrorInput>{errors?.size?.message}</ErrorInput>
                </label>
                <br />
                <Controller
                  name="size"
                  disabled={isPending}
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
              <div className="reportPet-body-input">
                <label htmlFor="gender" className="label">
                  Gender <ErrorInput>{errors?.gender?.message}</ErrorInput>
                </label>
                <br />
                <Controller
                  name="gender"
                  disabled={isPending}
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

            {/* description */}
            <div className="reportPet-body-left-desc">
              <div className="reportPet-body-input">
                <label htmlFor="description" className="label">
                  Description
                  <ErrorInput>{errors?.description?.message}</ErrorInput>
                </label>
                <br />
                <InputTextArea
                  disabled={isPending}
                  name="description"
                  id="description"
                  required="This field is required"
                  register={register}
                />
              </div>
            </div>

            {/* message */}
            <div className="reportPet-body-left-msg">
              <div className="reportPet-body-input">
                <label htmlFor="message" className="label">
                  Message <ErrorInput>{errors?.message?.message}</ErrorInput>
                </label>
                <br />
                <InputTextArea
                  disabled={isPending}
                  name="message"
                  id="message"
                  required="This field is required"
                  register={register}
                />
              </div>
            </div>
          </div>

          <div className="reportPet-body-right">
            {/* micro & date */}
            <div className="reportPet-body-right-other">
              <div className="reportPet-body-input">
                <label htmlFor="microchipped" className="label">
                  Microchipped
                  <ErrorInput>{errors?.microchipped?.message}</ErrorInput>
                </label>
                <br />
                <Controller
                  name="microchipped"
                  disabled={isPending}
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

              <div className="reportPet-body-input">
                <label htmlFor="date" className="label">
                  Date Last Seen
                  <ErrorInput>{errors?.date?.message}</ErrorInput>
                </label>
                <br />
                <Input
                  disabled={isPending}
                  type="date"
                  register={register}
                  id="date"
                  required="This field is required"
                  max={today}
                />
              </div>
            </div>

            {/* location */}
            <div className="reportPet-body-right-location">
              <div className="reportPet-body-input">
                <label htmlFor="location" className="label">
                  Location Last Seen
                  <ErrorInput>{errors?.location?.message}</ErrorInput>
                </label>
                <br />
                <Input
                  disabled={isPending}
                  register={register}
                  id="location"
                  required="This field is required"
                  location={location}
                  setValue={setValue}
                  placeholder={location}
                  getValues={getValues}
                />
              </div>

              <br />
              <br />

              <Map
                center={[lat, lng]}
                location={location}
                zoom={16}
                petForm={true}
              />
            </div>
          </div>

          <div className="reportpet-footer-btn btns">
            <Button
              disabled={isPending}
              variation="secondary"
              size="width"
              onClick={handleReset}
            >
              CANCEL
            </Button>
            <br />
            <Button
              disabled={isPending}
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

export default ReportPet;
