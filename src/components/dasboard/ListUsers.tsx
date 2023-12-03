import Rating from "../Rating";
import Image from "next/image";

export default function ListUsers() {
  return (
    <>
      <div className="container max-w-7xl bg-white shadow-lg rounded-2xl dark:bg-gray-800 mt-4 px-4 mx-auto sm:px-8">
        <div className="py-4">
          <div className="px-4  -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block dark:bg-gray-800 min-w-full overflow-hidden rounded-lg ">
              <table className="min-w-full  leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white dark:bg-gray-800 dark:text-white border-b border-gray-200"
                    >
                      Nome
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b dark:bg-gray-800 dark:text-white border-gray-200"
                    >
                      Avaliações
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase dark:bg-gray-800 dark:text-white bg-white border-b border-gray-200"
                    >
                      T.M de Atendimento
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase dark:bg-gray-800 dark:text-white bg-white border-b border-gray-200"
                    >
                      status (atual)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-800 dark:text-white">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Image
                            width={40}
                            height={40}
                            alt="profil"
                            src="/perfil.png"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            Jean marc
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-800 dark:text-white">
                      <div className="text-gray-900 dark:bg-gray-800 dark:text-white whitespace-no-wrap">
                        <Rating />
                      </div>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-800 dark:text-white">
                      <p className="text-gray-900 dark:bg-gray-800 dark:text-white whitespace-no-wrap">
                        00h 00m
                      </p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-800 dark:text-white">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                        ></span>
                        <span className="relative">active</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
