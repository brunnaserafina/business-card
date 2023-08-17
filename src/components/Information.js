import { useEffect, useState } from "react";
import { format } from "date-fns";
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

        setName(`${result.name.first} ${result.name.last}`);
        setEmail(result.email);
        setBirthday(format(new Date(result.dob.date), "dd/MM/yyyy"));
        setAddress(
          `${result.location.street.number} ${result.location.street.name}`
        );
        setPhone(result.phone);
        setPassword(result.login.password);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <p>
        {isInfo === "user" ? "Hi, My" : "My"}
        {isInfo === "user" && " name "}
        {isInfo === "email" && " email address "}
        {isInfo === "birthday" && " birthday "}
        {isInfo === "location" && " address "}
        {isInfo === "phone" && " phone number "}
        {isInfo === "password" && " password "}
        is
      </p>

      <h1>
        {isInfo === "user" && name}
        {isInfo === "email" && email}
        {isInfo === "birthday" && birthday}
        {isInfo === "location" && address}
        {isInfo === "phone" && phone}
        {isInfo === "password" && password}
      </h1>
    </div>
  );
}
