import { useForm } from "react-hook-form";
import "../App.css";

export const Second = () => {
  const url = "http://intern-2022.arpify.com/form";
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("photo", data.photo[0]);
    formData.append("pdfFile", data.pdf[0]);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("birthDay", data.birthDay);
    formData.append("gender", data.gender);
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    console.log(data, formData);
    const res = await fetch(url, requestOptions)
    .then((res) => res.json())
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Form</h1>
      <input
        {...register("firstName")}
        placeholder="First name"
        type="text"
        required
      />
      <input
        {...register("lastName")}
        placeholder="Last name"
        type="text"
        required
      />
      <input
        {...register("birthDay")}
        placeholder="birthDay"
        type="date"
        required
      />
      <input
        {...register("gender")}
        placeholder="gender"
        type="text"
        required
      />
      <input {...register("photo")} type="file" accept=".jpg,.jpeg, png" />
      <input {...register("pdf")} type="file" accept=".pdf" />
      <input type="submit" />
    </form>
  );
};
