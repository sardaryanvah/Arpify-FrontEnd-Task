import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";

export const First = () => {
  const url = "http://intern-2022.arpify.com/init";
  const [array, setArray] = useState([]);
  const [array1, setArray1] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lastName: "Sardaryan",
        firstName: "Vahe",
        gender: "male",
        birthDay: "2004-09-22",
      }),
    };
    fetch(url, requestOptions)
      .then((resp) => resp.json())
      .then((resp) => {
        resp.shift();
        setArray(resp);
        setArray1([...Object.keys(resp[0])]);
      });
  }, []);
  return (
    <div>
      <Link to="/2nd">
        <button className="btn">To 2nd Page</button>
      </Link>
      <table>
        <tbody>
          <tr>
            {array1.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
          {array.map((obj, index) => (
            <tr key={index}>
              {Object.values(obj).map((val, index) =>
                Object.values(obj)[0] === "Vahe" &&
                Object.values(obj)[1] === "Sardaryan" &&
                Object.values(obj)[2] === "2004-09-22" &&
                Object.values(obj)[3] === "male" ? (
                  <td key={index} style={{ backgroundColor: "red" }}>
                    {val}
                  </td>
                ) : (
                  <td key={index}>{val}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const Second = () => {
  const url = "http://intern-2022.arpify.com/form";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [gender, setGender] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const photoInput = document.querySelector("#photo");
    const pdfInput = document.querySelector("#pdf");
    const formData = new FormData();
    formData.append("photo", photoInput.files[0], photoInput.files[0].name);
    formData.append("pdfFile", pdfInput.files[0], pdfInput.files[0].name);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("birthDay", birthDay);
    formData.append("gender", gender);
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch(url, requestOptions).then((resp) => resp.json());
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <input
        value={birthDay}
        onChange={(e) => setBirthDay(e.target.value)}
        placeholder="birthDay"
        type="date"
        name="date"
        required
      />
      <input
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder="gender"
        type="text"
        name="text"
        required
      />
      <input type="file" name="photo" id="photo" accept=".jpg,.jpeg, png" />
      <input type="file" id="pdf" name="pdfFile" accept=".pdf" />
      <input type="submit" />
    </form>
  );
};
