"use server";
import { getFilteredBakatData } from "@/app/lib/data";
import Link from "next/link";

export default async function BakatTable({ query, currentPage }) {
  // const gambarAnakku = await gambarAnak();
  const bakats = await getFilteredBakatData(query, currentPage);
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {bakats?.map((bakat) => (
              <div
                key={bakat.email_user}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <div>
                        <p className="first-letter:uppercase">
                          {bakat.nama_user}
                        </p>

                        <p className="text-[8px] text-gray-500">
                          {bakat.kelas_user}
                        </p>
                      </div>
                    </div>
                    {/* <p className="text-sm text-gray-500 uppercase">
                      {bakat.bakat}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nama
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Kelas
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {bakats?.map((bakat) => (
                <tr
                  key={bakat.email_user}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p className="first-letter:uppercase">
                        {bakat.nama_user}
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {bakat.kelas_user}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
