"use client";
import { useState ,useEffect } from "react";
import axios from "axios";

export default function RootLayout({ children }) {
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [users,setUsers] = useState();
  useEffect(()=>{
    const fetchUsers = async ()=>{
      await axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setUsers(res.data)).catch((err)=>console.log(err))
    }
    fetchUsers();
  },[])
  console.log(users)

  return (
    <html lang="en">
      <body>
        <header className="bg-white">
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCatOpen(!isCatOpen)}
                  className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
                  aria-expanded={isCatOpen}
                >
                  Cat
                  <svg
                    className="size-5 flex-none text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isCatOpen && (
                  <div className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {users.map((user)=>(
                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                        <div className="flex-auto">
                          <a
                            href={`/categories/`+user.id}
                            className="block font-semibold text-gray-900"
                          >
                            {user.id} - {user.username}
                            <span className="absolute inset-0"></span>
                          </a>
                        </div>
                      </div>
                      ))}
                      
                    </div>
                  </div>
                )}
              </div>

              <a
                href="http://localhost:3000/categories"
                className="text-sm/6 font-semibold text-gray-900"
              >
                Categories
              </a>
              <a
                href="http://localhost:3000/posts"
                className="text-sm/6 font-semibold text-gray-900"
              >
                Posts
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm/6 font-semibold text-gray-900"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
        </header>

        {children}

        

        <footer className="bg-white dark:bg-gray-900">
  <div className="mx-auto w-full max-w-screen-xl">
    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="#" className="hover:underline">About</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">Careers</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">Brand Center</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">Blog</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="#" className="hover:underline">Discord Server</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">Twitter</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">Facebook</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">Contact Us</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">Licensing</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="#" className="hover:underline">iOS</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">Android</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">Windows</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">MacOS</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.</span>
      <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
            <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
          </svg>
          <span className="sr-only">Facebook page</span>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
            <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
          </svg>
          <span className="sr-only">Discord community</span>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
            <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 13.29 14.4c6.35-.537 10.77-6.263 10.77-12.508 0-.191 0-.381-.021-.57A7.788 7.788 0 0 0 20 1.892Z" clipRule="evenodd"/>
          </svg>
          <span className="sr-only">Twitter page</span>
        </a>
      </div>
    </div>
  </div>
</footer>


      </body>
    </html>
  );
}
