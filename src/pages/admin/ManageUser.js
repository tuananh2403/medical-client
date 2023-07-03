import React, { useCallback, useEffect, useState } from "react";
import { apiGetUsers } from "../../apis/user";
import moment from "moment";
import InputField from "../../components/inputField";
const ManageUser = () => {
  const [users, setUsers] = useState(null);
  const [q, setQ] = useState("");

  const fetchUsers = async () => {
    const response = await apiGetUsers();
    if (response.success) setUsers(response.users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="h-[75px] flex justify-between items-center text-3xl font-bold px-4 border-b">
        <span>ManageUser</span>
      </h1>
      <div className="flex  justify-end py-4">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Tên
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Số Điện Thoại
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Quyền
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Ngày Tạo
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Trạng Thái
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Hành Động
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((el, idx) => (
                    <tr
                      className="border-b dark:border-neutral-500"
                      key={el._id}
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {idx + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{`${el.firstname} ${el.lastname}`}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {el.email}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {el.mobile}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{el.role}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {moment(el.createdAt).format("DD/MM/YYYY")}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {el.isBlocked ? "active" : "active"}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button className="py-2 px-4 bg-blue-500">Edit</button>
                        <button className="py-2 px-4 bg-red-500">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
