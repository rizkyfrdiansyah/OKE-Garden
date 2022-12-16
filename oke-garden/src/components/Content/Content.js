import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import { useEffect, useState } from "react";
import tamanImage from "../../assets/images/taman.jpg";
import taman2Image from "../../assets/images/taman2.jpg";
import taman3Image from "../../assets/images/taman3.jpg";

export default function Calender() {
  const [date, setdata] = useState(new Date());
  const [room, setroom] = useState("");
  const [name, setname] = useState("");
  const [time, settime] = useState("");
  const [description, setdescription] = useState("");
  const [dateTime, setDatetime] = useState("");
  var gapi = window.gapi;
  var CLIENT_ID = "94346182727-9np4rgmgr2i4iq8vft3h527ein7cosqg.apps.googleusercontent.com";
  var API_KEY = "AIzaSyA2ynyIIS__xCDklZgWEoZcDZMsCml9ruQ";
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const handleClick = () => {
    console.log("123");
    if (room === "" || name === "" || description === "" || time === "" || date === "") {
      alert("Enter all the  fields");
    } else {
      gapi.load("client:auth2", () => {
        console.log("loaded client");

        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        });

        gapi.client.load("calendar", "v3", () => console.log("bam!"));

        gapi.auth2
          .getAuthInstance()
          .signIn()
          .then(() => {
            var event = {
              summary: "Affle Meeting Room",
              location: "India, Gurgaon",
              description: "",
              start: {
                dateTime: `${dateTime}`,
                timeZone: "Asia/Kolkata",
              },
              end: {
                dateTime: `${dateTime}`,
                timeZone: "Asia/Kolkata",
              },
              recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
              attendees: [{ email: "lpage@example.com" }, { email: "sbrin@example.com" }],
              reminders: {
                useDefault: false,
                overrides: [
                  { method: "email", minutes: 24 * 60 },
                  { method: "popup", minutes: 10 },
                ],
              },
            };

            var request = gapi.client.calendar.events.insert({
              calendarId: "primary",
              resource: event,
            });

            request.execute((event) => {
              console.log(event);
              window.open(event.htmlLink);
            });

            gapi.client.calendar.events
              .list({
                calendarId: "primary",
                timeMin: new Date().toISOString(),
                showDeleted: false,
                singleEvents: true,
                maxResults: 10,
                orderBy: "startTime",
              })
              .then((response) => {
                const events = response.result.items;
                console.log("EVENTS: ", events);
              });
          });
      });
    }
  };
  useEffect(() => {
    if (date.value) {
      setDatetime(date.value.toISOString());
    }
  }, [date]);
  return (
    <>
      <div>
        <div className="pt-[50px]">
          <h1 className="font-bold text-gray-600 text-3xl flex justify-center">Konsultasi Taman</h1>
          <p className="pt-4">klik dibawah ini untuk memilih tanggal & waktu yang tersedia untuk memanggil konsultan kami</p>
        </div>

        <div className="calendar pt-[50px] pl-[50px]">
          <CalendarComponent onChange={setdata} value={date} />
        </div>

        <p className="pt-8 flex justify-center font-bold text-2xl">{date.value && date.value.toDateString()}</p>

        <h2 className="font-semibold">Pilih Waktu Konsultasi :</h2>

        <div className="btns">
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>10:00</button>
          </div>
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>10:30</button>
          </div>
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>11:00</button>
          </div>
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>11:30</button>
          </div>
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>12:00</button>
          </div>
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>12:30</button>
          </div>
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>01:00</button>
          </div>
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>01:30</button>
          </div>
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>02:00</button>
          </div>
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>02:30</button>
          </div>
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>03:00</button>
          </div>
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>03:30</button>
          </div>
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>04:00</button>
          </div>
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>04:30</button>
          </div>
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>05:00</button>
          </div>
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>05:30</button>
          </div>
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>06:00</button>
          </div>
          <div className="grid-button">
            <button onClick={(e) => settime(e.target.textContent)}>06:30</button>
          </div>
        </div>
        <div className="grid-button7 pr-4">
          <button onClick={(e) => settime(e.target.textContent)}>07:00</button>
        </div>
        <br />
        <br />
        <footer>
          <button id="calendar" onClick={handleClick}>
            Janjian Bertemu
          </button>
        </footer>

        <div className="pt-[100px]">
          <h1 className="flex justify-start font-bold text-3xl pl-[150px] text-gray-600">Informasi Data Diri</h1>
        </div>
        <div className="flex justify-center pt-8 pr-[320px]">
          <form className="w-full max-w-4xl">
            <div className="flex flex-wrap -mx-3 mb-6 ">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2 normal-case" htmlFor="grid-first-name">
                  Nama Lengkap
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200"
                  id="grid-first-name"
                  type="text"
                  placeholder="Yudha Wahyu"
                />
                <p className="text-red-500 text-xs italic">Harap isi kolom ini.</p>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2 normal-case" htmlFor="grid-first-name">
                  No HP
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200"
                  id="grid-first-name"
                  type="int"
                  placeholder="+62 852 2324 4747"
                />
                <p className="text-red-500 text-xs italic">Harap isi kolom ini.</p>
              </div>
              <div className="pl-4 pt-4">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">
                  Alamat
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="block p-2.5 w-[700px] text-sm text-black-900 bg-white-50 rounded-lg border-2 border-green-700 focus:ring-green-700 focus:border-white-500 dark:bg-white-700 dark:border-green-700 dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-700 dark:focus:border-green-700"
                  placeholder="Jl. Serangkai 1 Perum, Bumi Jaya blok A No. 12 Kelurahan samping, Kecamatan Baru, Kota Tanjungpinang, Kepulauan Riau 29125, Indonesia"
                  defaultValue={""}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="pt-[100px]">
          <h1 className="flex justify-start font-bold text-3xl pl-[150px] text-gray-600">Informasi Konsultasi Taman</h1>
          <h1 className="flex justify-start font-bold text-lg pl-[150px] text-gray-600 pt-[20px]">Lahan Taman</h1>
          <p className="flex justify-start  pl-[150px] pt-[5px]">Pilih jumlah lahan taman yang akan dibuat.</p>
        </div>
        <div className="flex justify-center pt-4 pr-[700px]">
          <button
            type="button"
            class="text-green-700 hover:text-white border-2 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-700 dark:text-green-700 dark:hover:text-white dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            1 Lahan Taman
          </button>
          <button
            type="button"
            class="text-green-700 hover:text-white border-2 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-700 dark:text-green-700 dark:hover:text-white dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            2 Lahan Taman
          </button>
          <button
            type="button"
            class="text-green-700 hover:text-white border-2 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-700 dark:text-green-700 dark:hover:text-white dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Lebih dari 2 Lahan Taman
          </button>
        </div>
        <div className="pt-[15px]">
          <h1 className="flex justify-start font-bold text-lg pl-[150px] text-gray-600 pt-[20px]">Tema Taman</h1>
          <p className="flex justify-start  pl-[150px] pt-[5px]">Pilih tema yang akan dibuat.</p>
        </div>
        <div className="flex justify-center pr-[450px] pt-4">
          <div id="toast-simple" className="flex items-center p-4 space-x-4 w-full max-w-3xl text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-yellow space-x dark:bg-yellow-100" role="alert">
            <div className="pl-4 text-sm font-normal text-black">
              <b>Catatan :</b> Jika anda belum memiliki inspirasi tema taman maka anda bisa melewati tahapan ini, konsultan kami akan memberikan rekomendasi terbaik untuk taman anda.
            </div>
          </div>
        </div>

        <div className="pt-[40px] flex justify-center gap-8 ">
          <div className="max-w-sm bg-white border border-green-600 rounded-lg shadow-md dark:bg-white dark:border-green-600 drop-shadow">
            <a href="#">
              <img className="rounded-t-lg" src={tamanImage} alt="taman" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-600">Taman Minimalis</h5>
              </a>
              <p className="mb-3 font-normal text-black-700 dark:text-black-400 flex justify-start">Taman yang indah dilahan yang sempit dengan berkonsep minimalis.</p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-50 bg-green-700 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
              >
                Pilih
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-green-600 rounded-lg shadow-md dark:bg-white dark:border-green-600 drop-shadow">
            <a href="#">
              <img className="rounded-t-lg" src={taman2Image} alt="taman" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-600">Taman Kering</h5>
              </a>
              <p className="mb-3 font-normal text-black-700 dark:text-black-400 flex justify-start">Taman yang dirancang untuk menghasilkan suasana alam didalam dan diluar rumah.</p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-50 bg-green-700 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
              >
                Pilih
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-green-600 rounded-lg shadow-md dark:bg-white dark:border-green-600 drop-shadow">
            <a href="#">
              <img className="rounded-t-lg" src={taman3Image} alt="taman" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-600">Taman Tropis</h5>
              </a>
              <p className="mb-3 font-normal text-black-700 dark:text-black-400 flex justify-start">Taman yang paling sesuai dengan iklim di Indonesia.</p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-50 bg-green-700 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
              >
                Pilih
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h1 className="flex justify-start font-bold text-lg pl-[150px] text-gray-600 pt-[50px]">Estimasi Ukuran Taman</h1>
        </div>

        <div className="flex justify-start pt-4 gap-10 pl-[140px]">
          <button
            type="button"
            class="text-green-700 hover:text-white border-2 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-700 dark:text-green-700 dark:hover:text-white dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            10m2
          </button>
          <button
            type="button"
            class="text-green-700 hover:text-white border-2 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-700 dark:text-green-700 dark:hover:text-white dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            11-20m2
          </button>
          <button
            type="button"
            class="text-green-700 hover:text-white border-2 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-700 dark:text-green-700 dark:hover:text-white dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            21-30m2
          </button>
          <button
            type="button"
            class="text-green-700 hover:text-white border-2 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-700 dark:text-green-700 dark:hover:text-white dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            31-40m2
          </button>
          <button
            type="button"
            class="text-green-700 hover:text-white border-2 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-700 dark:text-green-700 dark:hover:text-white dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            41-50m2
          </button>
          <button
            type="button"
            class="text-green-700 hover:text-white border-2 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-700 dark:text-green-700 dark:hover:text-white dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            51-60m2
          </button>
          <button
            type="button"
            class="text-green-700 hover:text-white border-2 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-700 dark:text-green-700 dark:hover:text-white dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            100m2
          </button>
        </div>
        <div className="flex justify-end pt-[150px] pr-[150px]">
          <button
            type="button"
            className="focus:outline-none text-green-700 bg-gray-50 hover:bg-gray-50 focus:ring-4 focus:ring-gray-50 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-50 dark:hover:bg-gray-50 dark:focus:ring-gray-50 drop-shadow-md"
          >
            Batal
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-800 hover:bg-green-800 focus:ring-4 focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-800 dark:hover:bg-green-800 dark:focus:ring-green-800 drop-shadow-md"
          >
            OKE
          </button>
        </div>
      </div>
    </>
  );
}
