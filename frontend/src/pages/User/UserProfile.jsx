import { Avatar, Badge, Button, Table, TableBody, TableCell, TableRow } from "flowbite-react";

export const UserProfile = ({ user }) => {
  const userData = JSON.parse(localStorage.getItem("userInfo"))

  return (
    <div className="bg-gray-100 min-h-screen w-full dark:bg-gray-900 pb-10">
    
      <div className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-5xl mx-auto">
          <div className="h-48 bg-gradient-to-r from-blue-500 to-teal-400 rounded-b-lg"></div>

          <div className="px-4 pb-6">
            <div className="relative flex flex-col md:flex-row items-center md:items-end -mt-16 md:space-x-5">
              <div className="relative">
                <Avatar
                  rounded
                  size="xl"
                  className="ring-4 ring-white dark:ring-gray-800"
                />
              </div>
              <div className="mt-4 md:mt-0 text-center md:text-left flex-1">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {userData.name}
                </h1>
                <div className="flex justify-center md:justify-start mt-1">
                  <Badge color={userData.role === "admin" ? "failure" : "info"}>
                    {userData.role}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-auto p-5 mt-6">
        <div className="w-full space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Intro</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex flex-col border-b pb-2">
                <span className="text-xs text-gray-500 uppercase">Email</span>
                <span className="font-medium">{userData.email}</span>
              </div>
              <div className="flex flex-col border-b pb-2">
                <span className="text-xs text-gray-500 uppercase">Role Permission</span>
                <span className="font-medium text-blue-600">{userData.role}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase">Status</span>
                <span className="font-medium text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};