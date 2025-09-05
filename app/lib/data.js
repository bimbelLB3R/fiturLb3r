import { GoogleSpreadsheet } from "google-spreadsheet";

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID_FITUR;
const SHEET_ID1 = process.env.NEXT_PUBLIC_SHEET_ID_FITUR_DATASISWA;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export async function getDataSheet() {
  try {
    // Autentikasi dengan kredensial
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });

    // Load informasi lembar kerja
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID1]; // Misalnya, mengambil lembar kerja pertama
    const rows = await sheet.getRows(); // Mendapatkan semua baris dari lembar kerja
    // const dataFromSheet = rows.map((item) => item.tanggal);
    // console.log(dataFromSheet);
    const nama = rows.map((item) => item.nama_user ?? "");
const kelas = rows.map((item) => item.kelas_user ?? "");
return { nama, kelas };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data from sheet.");
  }
}

// bakat
const ITEMS_PER_PAGE = 6;

export async function getFilteredBakatData(query, currentPage) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    console.log("=== START getFilteredBakatData ===");
    console.log("query =", query);
    console.log("currentPage =", currentPage);
    console.log("offset =", offset);
    console.log("SPREADSHEET_ID =", SPREADSHEET_ID);
    console.log("SHEET_ID1 =", SHEET_ID1);

    // Autentikasi
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });
    console.log("✅ Auth success");

    await doc.loadInfo();
    console.log("✅ Spreadsheet title:", doc.title);

    const sheet = doc.sheetsById[SHEET_ID1];
    if (!sheet) {
      throw new Error(`Sheet dengan ID ${SHEET_ID1} tidak ditemukan`);
    }
    console.log("✅ Sheet title:", sheet.title);

    const rows = await sheet.getRows();
    console.log("✅ Rows fetched:", rows.length);
    if (rows.length > 0) {
      console.log("Row sample:", rows[0]);
      console.log("Row keys:", Object.keys(rows[0]));
    }

    let filteredRows = rows;

    if (query) {
      const lowerQuery = query.toLowerCase();
      filteredRows = rows.filter(
        (item) =>
          (item.nama_user || "").toLowerCase().includes(lowerQuery) ||
          (item.asal_user || "").toLowerCase().includes(lowerQuery) ||
          (item.kelas_user || "").toLowerCase().includes(lowerQuery)
      );
      console.log("✅ Filtered rows (query):", filteredRows.length);
    }

    filteredRows = filteredRows
      .sort((a, b) => Number(b.nis) - Number(a.nis))
      .slice(offset, offset + ITEMS_PER_PAGE);

    console.log("✅ Final rows returned:", filteredRows.length);

    return filteredRows;
  } catch (error) {
    console.error("❌ Database Error detail:", error);
    throw new Error("Failed to fetch data from bakat.");
  }
}


export async function getBakatData(query) {
  try {
    // Autentikasi dengan kredensial
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });

    // Load informasi lembar kerja
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID1]; // Misalnya, mengambil lembar kerja pertama
    const rows = await sheet.getRows(); // Mendapatkan semua baris dari lembar kerja
    // const dataFromSheet = rows.map((item) => item.tgl_daftar);
    // console.log(dataFromSheet);
    const queryHrfKecil = query.toLowerCase();
    // console.log(queryHrfKecil);
    const bakat = rows.filter((item) =>
  item.nama_user?.toLowerCase().includes(queryHrfKecil) ||
  item.kelas_user?.includes(queryHrfKecil) ||
  item.asal_user?.includes(queryHrfKecil)
);

    // console.log(bakat);
    const totalPages = Math.ceil(Number(bakat.length) / ITEMS_PER_PAGE);
    // console.log(totalPages);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data from bakat.");
  }
}

export async function getAllBakat() {
  try {
    // Autentikasi dengan kredensial
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });

    // Load informasi lembar kerja
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID3]; // Misalnya, mengambil lembar kerja pertama
    const rows = await sheet.getRows(); // Mendapatkan semua baris dari lembar kerja
    // const dataFromSheet = rows.map((item) => item.tanggal);
    // console.log(dataFromSheet);
    const allBakats = rows.filter((item) => item);
    return allBakats;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data from Allbakat.");
  }
}
