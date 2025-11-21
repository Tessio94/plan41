"use client";

import React, { useState } from "react";

import {
  IoLocationSharp,
  IoLogoInstagram,
  IoMail,
  IoPhonePortraitSharp,
} from "react-icons/io5";
// import { Toaster, toast } from "sonner";

const KontaktForma = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onFormSubmitted = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch("/api/send-email", {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({
          name,
          lastName,
          phone,
          email,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        if (res.status === 400) {
          const data = await res.json();
          const stringErr = data.error
            .flat()
            .map((err: string) => `• ${err}`)
            .join("<br>");
          throw new Error(stringErr);
        }

        throw new Error("Pogreška prilikom slanja zahtjeva!");
      }

      const result = await res.json();
      console.log("data", result);

      setName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setSuccess(true);
      setLoading(false);
      // toast.success(result.message);
    } catch (err) {
      if (err instanceof Error) {
        setSuccess(false);
        setLoading(false);
        // toast.error(<div dangerouslySetInnerHTML={{ __html: err.message }} />);
      }
    }
  };

  return (
    <>
      {/* <Toaster
				toastOptions={{
					style: {
						color: success ? "#22c55e" : "#ef4444",
						border: success ? "2px solid #22c55e" : "2px solid #ef4444",
					},
				}}
			/> */}

      <div className="shadow-theme1/60 order-1 h-full rounded-2xl bg-[url(/frame-1.png)] bg-cover bg-no-repeat p-5 shadow-lg sm:rounded-4xl sm:p-10 lg:order-2 lg:h-fit lg:w-[750px]">
        <h2 className="font-playfair after:bg-theme3 before:bg-theme3 relative mb-15 text-4xl font-bold text-slate-100 before:absolute before:top-[calc(105%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:content-['']">
          Pošaljite upit
        </h2>
        <form
          className="flex w-full flex-col gap-7 lg:gap-10"
          onSubmit={onFormSubmitted}
        >
          <div className="flex w-full items-center gap-4">
            <div className="flex basis-1/2 flex-col items-start">
              <label
                htmlFor="name"
                className="font-inter text-theme3 pb-1 pl-3 font-semibold"
              >
                Ime
              </label>
              <input
                className="border-theme3 w-full rounded-xl border-2 bg-white px-3 py-2"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex basis-1/2 flex-col items-start">
              <label
                htmlFor="lastname"
                className="font-inter text-theme3 pb-1 pl-3 font-semibold"
              >
                Prezime
              </label>
              <input
                className="border-theme3 w-full rounded-xl border-2 bg-white px-3 py-2"
                type="text"
                id="lastname"
                name="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <label
              htmlFor="phone"
              className="font-inter text-theme3 pb-1 pl-3 font-semibold"
            >
              Broj mobitela
            </label>
            <input
              className="border-theme3 w-full rounded-xl border-2 bg-white px-3 py-2"
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col items-start">
            <label
              htmlFor="email"
              className="font-inter text-theme3 pb-1 pl-3 font-semibold"
            >
              Email
            </label>
            <input
              className="border-theme3 w-full rounded-xl border-2 bg-white px-3 py-2"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col items-start">
            <label
              htmlFor="message"
              className="font-inter text-theme3 pb-1 pl-3 font-semibold"
            >
              Poruka
            </label>
            <textarea
              className="border-theme3 w-full rounded-xl border-2 bg-white px-3 py-2"
              id="message"
              name="message"
              rows={4}
              cols={50}
              placeholder="Napišite vaš zahtjev ovdje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            className="hover:bg-theme2 active:bg-theme1 focus:bg-theme1 text-theme3 border-theme3 bg-theme1 hover:shadow-theme3/40 mx-auto flex min-h-[68px] w-fit min-w-[247px] cursor-pointer flex-row items-center justify-center rounded-xl border-2 text-2xl font-bold transition-all duration-500 hover:shadow-lg focus:shadow-lg active:shadow-lg"
            type="submit"
          >
            {loading ? (
              <svg
                className="size-6 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Pošalji"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default KontaktForma;
