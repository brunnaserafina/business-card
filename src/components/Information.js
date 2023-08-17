import { useEffect, useState } from "react";
import getInfo from "../services/api";

export default function Information({ isInfo }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getInfo()
      .then((response) => {
        const result = response.data.results[0];
        setName(
          `${result.name.title} ${result.name.first} ${result.name.last}`
        );
        setEmail(result.email);
        setBirthday(result.dob.date);
        setAddress(`${result.location.poscode} ${result.location.city} Ct`);
        setPhone(result.phone);
        setPassword(result.login.password);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isInfo === "user" && (
        <>
          <p>My name is</p>
          <h1>{name}</h1>
        </>
      )}

      {isInfo === "email" && (
        <>
          <p>My email address is</p>
          <h1>{email}</h1>
        </>
      )}

      {isInfo === "birthday" && (
        <>
          <p>My birthday is</p>
          <h1>{birthday}</h1>
        </>
      )}

      {isInfo === "location" && (
        <>
          <p>My address is</p>
          <h1>{address}</h1>
        </>
      )}

      {isInfo === "phone" && (
        <>
          <p>My phone number is</p>
          <h1>{phone}</h1>
        </>
      )}

      {isInfo === "password" && (
        <>
          <p>My password is</p>
          <h1>{password}</h1>
        </>
      )}
    </>
  );
}
