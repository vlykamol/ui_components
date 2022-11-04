import React, { useEffect, useState } from "react";

export default function Table() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setUsers(data.results))
      .catch((err) => console.log("err", err));
  }, []);

  const sort = () => {
    setUsers((users) => {
      return users.sort((a, b) => {
        return a.email.toLowerCase() < b.email.toLowerCase() ? -1 : 1
      })
    })
  }
  return (
    <div>
      <table className="w-full table-auto">
      <thead>
            <tr  onClick={() => sort()}>
              <td className="p-2 even:bg-lime-400 odd:bg-lime-500">First Name </td>
              <td className="p-2 even:bg-lime-400 odd:bg-lime-500">gender </td>
              <td className="p-2 even:bg-lime-400 odd:bg-lime-500">email </td>
              <td className="p-2 even:bg-lime-400 odd:bg-lime-500">phone </td>
              <td className="p-2 even:bg-lime-400 odd:bg-lime-500">Nationality </td>
              <td className="p-2 even:bg-lime-400 odd:bg-lime-500">Date of birth </td>
            </tr>
          </thead>
        <tbody >
          {users.map((user, key) => {
            return (
              <tr className="even:bg-slate-200" key={key}>
                <td className="p-1 odd:bg-slate-300/30">{user.name.first}</td>
                <td className="p-1 odd:bg-slate-300/30">{user.gender}</td>
                <td className="p-1 odd:bg-slate-300/30">{user.email}</td>
                <td className="p-1 odd:bg-slate-300/30">{user.phone}</td>
                <td className="p-1 odd:bg-slate-300/30">{user.nat}</td>
                <td className="p-1 odd:bg-slate-300/30">{user.dob.date.split('T')[0]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
