"use server";
import { getFilteredBakatData } from "@/app/lib/data";

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
                key={`${bakat.email_user}-${bakat.nis}`}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center border-b pb-4">
                  <div className="w-full">
                    <div className="mb-2 flex items-center justify-between space-x-4 ">
                      <div>
                        <p className="first-letter:uppercase">
                          {bakat.nama_user}
                        </p>

                        <p className="text-[12px] text-gray-500">
                          {bakat.kelas_user}
                        </p>
                        <p className="text-[12px] text-gray-500">
                          bergabung sejak {bakat.tgl_daftar}
                        </p>
                        <p className="text-[12px] text-gray-500">
                          dari {bakat.asal_user}
                        </p>
                      </div>
                      <div>
                        <a
                          // href={ba`https://www.instagram.com/bimbel_lb3r`}
                          href={
                            bakat.instagram.length > 0
                              ? `https://www.instagram.com/${bakat.instagram}`
                              : "https://www.instagram.com/bimbel_lb3r"
                          }
                          className=" hover:text-gray-50 "
                        >
                          <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
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
