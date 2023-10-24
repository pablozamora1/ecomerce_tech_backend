import { useEffect, useState } from "react";
import FetchingDeDatos from "./fetchingDeDatos";

const FetchingDeDatosContainer = () => {
  const [users, setUsers] = useState([]);
  console.log(users);


  useEffect(() => {
    const promiseData = fetch("https://jsonplaceholder.typicode.com/users");
    promiseData
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log("este es el error", err));
  },[]);

  return <FetchingDeDatos users={users}/>;
};

export default FetchingDeDatosContainer;
