import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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

  