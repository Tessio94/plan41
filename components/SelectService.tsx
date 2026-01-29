"use client";

import React, { useEffect } from "react";
import { useProjectInfo } from "@/context/ProjectContext";
import Image from "next/image";
import { IoCloseCircle, IoExit } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import Link from "next/link";

const SelectService = () => {
  const { service, setService } = useProjectInfo();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setService(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setService]);

  if (!service) return;

  return (
    <>
      {service === "s1" && (
        <div
          className="bg-background/10 fixed inset-0 z-1000 flex items-center justify-center py-[5%] backdrop-blur-xs"
          onClick={() => setService(null)}
        >
          <div
            className="flex h-full w-full max-w-[90%] flex-col rounded-2xl bg-[url(/frame-1.png)] max-[450px]:max-w-[95%] sm:max-w-[80%] xl:max-w-[60%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex shrink-0 flex-col items-start justify-center gap-5 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-end sm:pr-16">
              <Image
                src="/ikone/startup.svg"
                alt="vizija ikona"
                width={60}
                height={60}
              />
              <h3 className="text-2xl text-slate-100">
                Poslovni planovi za poticaje HZZ-a
              </h3>
              <button
                className="absolute top-10 right-5 cursor-pointer sm:top-1/2"
                onClick={() => setService(null)}
              >
                <IoCloseCircle className="h-10 w-10 -translate-y-1/2 text-slate-100 transition-all duration-300 hover:opacity-50" />
              </button>
            </div>
            <div className="flex grow flex-col gap-5 overflow-x-hidden overflow-y-auto px-5 py-5">
              <p className="text-xl text-slate-100">
                Pomoći ću vam u izradi poslovnih planova za potpore Hrvatskog
                zavoda za zapošljavanje (HZZ) namijenjene samozapošljavanju.
                Pomažem vam oblikovati poslovnu ideju u jasnu i izvedivu
                strukturu, pripremiti svu potrebnu dokumentaciju i argumentirano
                obrazložiti održivost vašeg projekta — sve kako bi vaš zahtjev
                imao najbolje šanse za odobrenje.
              </p>
              <h5 className="text-2xl text-slate-100">
                Dodatne informacije vezane uz tu uslugu
              </h5>
              <p className="text-xl text-slate-100">
                Hrvatski zavod za zapošljavanje (HZZ) i u 2026. godini
                dodjeljuje potpore za samozapošljavanje osobama koje žele
                pokrenuti vlastiti posao u sljedećim organizacijskim oblicima –
                obrt, trgovačko društvo, samostalna djelatnost i ustanova.
              </p>
              <ul className="ml-5 list-disc text-slate-100">
                <li>
                  <p className="text-xl text-slate-100">
                    Tko se može prijaviti i ostvariti pravo na poticaje?
                  </p>
                </li>
              </ul>
              <p className="text-xl text-slate-100">
                Prijaviti se mogu nezaposlene osobe prijavljene u evidenciju
                HZZ-a uz nekoliko dodatnih uvjeta:
              </p>
              <ul className="flex flex-col gap-2 text-slate-100">
                <li className="flex flex-row items-start gap-2">
                  <GiCheckMark className="mt-1 shrink-0 text-sm text-slate-100" />
                  <p className="text-xl text-slate-100">
                    Ukoliko niste ranije koristili potporu za
                    samozapošljavanje (bez obzira na godinu)
                  </p>
                </li>
                <li className="flex flex-row items-start gap-2">
                  <GiCheckMark className="mt-1 shrink-0 text-sm text-slate-100" />
                  <p className="text-xl text-slate-100">
                    U zadnjih 24 mjeseca niste bili poduzetnik
                  </p>
                </li>
                <li className="flex flex-row items-start gap-2">
                  <GiCheckMark className="mt-1 shrink-0 text-sm text-slate-100" />
                  <p className="text-xl text-slate-100">
                    Nemate blokirane privatne račune
                  </p>
                </li>
                <li className="flex flex-row items-start gap-2">
                  <GiCheckMark className="mt-1 shrink-0 text-sm text-slate-100" />
                  <p className="text-xl text-slate-100">
                    Posljednji radni odnos u istoj ili sličnoj djelatnosti nije
                    prestao osobno uvjetovanim otkazom; osim ukoliko ste od
                    otkaza nezaposleni dulje od 12 mjeseci
                  </p>
                </li>
              </ul>
              <ul className="ml-5 text-slate-100">
                <li className="list-disc">
                  <p className="text-xl text-slate-100">
                    Koji je rok za predaju zahtjeva?
                  </p>
                </li>
              </ul>
              <p className="ml-5 text-xl text-slate-100">
                Zahtjevi za dodjelu potpore zaprimaju se najkasnije do
                30.09.2026. godine, odnosno do utroška osiguranih sredstava.
              </p>
              <ul className="ml-5 text-slate-100">
                <li className="list-disc">
                  <p className="text-xl text-slate-100">
                    Koliki su iznosi potpore u 2026. godini?
                  </p>
                </li>
              </ul>
              <p className="text-xl text-slate-100">
                Za poslovne subjekte organizacijskog oblika{" "}
                <span className="font-bold">
                  obrt s paušalnim oporezivanjem
                </span>{" "}
                visina subvencije potpore iznosi do 7.000 €, dok za poslovne
                subjekte drugih organizacijskih oblika visina potpore može biti
                max 20.000 €.
              </p>
              <p className="text-xl text-slate-100">Potpora se sastoji od:</p>
              <ul className="ml-5 flex flex-col gap-2 text-slate-100">
                <li className="list-disc">
                  <p className="text-xl text-slate-100">
                    fiksnog iznosa (iznos potpore za koji se ne traži dokaz o
                    utrošku sredstava): 5.000 €
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-xl text-slate-100">
                    varijabilnog iznosa (namjenskog dijela potpore): ovisno o
                    djelatnosti i obliku, uz pravdanje troškovnikom, naknadnim
                    pravdanjem računima i fotodokumentacijom.
                  </p>
                </li>
              </ul>
              <p className="text-xl text-slate-100">
                Ukoliko trebate pomoć u bilo kojem dijelu procesa ili samo
                konzultaciju Plan 41 može vam ponuditi:
              </p>
              <ul className="ml-5 flex flex-col gap-2 text-slate-100">
                <li className="list-decimal">
                  <p className="text-xl text-slate-100">
                    Individualnu konzultaciju za bolju pripremu zahtjeva –
                    100,00 €
                  </p>
                </li>
                <li className="list-decimal">
                  <p className="text-xl text-slate-100">
                    Izradu poslovnog plana za samozapošljavanje – od 400,00 €,
                    ovisno o traženoj potpori
                  </p>
                </li>
                <li className="list-decimal">
                  <p className="text-xl text-slate-100">
                    Revizija gotovog poslovnog plana i savjeti za unaprjeđenje
                     – 100,00 €
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {service === "s2" && (
        <div
          className="bg-background/10 fixed inset-0 z-1000 flex items-center justify-center py-[5%] backdrop-blur-xs"
          onClick={() => setService(null)}
        >
          <div
            className="flex h-full w-full max-w-[90%] flex-col rounded-2xl bg-[url(/frame-1.png)] max-[450px]:max-w-[95%] sm:max-w-[80%] xl:max-w-[60%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex shrink-0 flex-col items-start justify-center gap-5 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-end sm:pr-16">
              <Image
                src="/ikone/insurance.svg"
                alt="vizija ikona"
                width={60}
                height={60}
              />
              <h3 className="text-2xl text-slate-100">
                Pomoć u osiguranju financiranja
              </h3>
              <button
                className="absolute top-10 right-5 cursor-pointer sm:top-1/2"
                onClick={() => setService(null)}
              >
                <IoCloseCircle className="h-10 w-10 -translate-y-1/2 text-slate-100 transition-all duration-300 hover:opacity-50" />
              </button>
            </div>
            <div className="flex grow flex-col gap-5 overflow-x-hidden overflow-y-auto px-5 py-5">
              <p className="text-xl text-slate-100">
                Ukoliko prilikom pokretanja projekta ili širenja poslovanja ne
                raspolažete vlastitim kapitalom u zadovoljavajućem iznosu ili su
                vam potrebna obrtna sredstva, na raspolaganju su vam mogući
                vanjski izvori financiranja:
              </p>

              <ul className="ml-5 flex list-disc flex-col gap-3 text-slate-100">
                <li>
                  <p className="text-xl text-slate-100">
                    Krediti poslovnih banaka – uz kvalitetan poslovni plan koji
                    ćemo zajedno prezentirati poslovnim bankama i odabrati
                    optimalan model financiranja
                  </p>
                </li>
                <li>
                  <p className="text-xl text-slate-100">
                    Razvojna agencija HAMAG-BICRO na raspolaganju nudi jamstvene
                    programe i zajmove i za{" "}
                    <span className="font-bold">fizičke osobe</span> koji tek
                    imaju namjeru pokrenuti poslovanje
                  </p>
                </li>
                <li>
                  <p className="text-xl text-slate-100">
                    HBOR je Hrvatska banka za obnovu i razvitak koja u svojem
                    programu potiče poduzetnike početnike
                  </p>
                </li>
                <li>
                  <p className="text-xl text-slate-100">
                    Poduzetnički starter – program Erste banke za financiranje
                    poduzetnika početnika u suradnji sa Europskim investicijskim
                    fondom (EIF)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {service === "s3" && (
        <div
          className="bg-background/10 fixed inset-0 z-1000 flex items-center justify-center py-[5%] backdrop-blur-xs"
          onClick={() => setService(null)}
        >
          <div className="w-fu max-[450px]:max-w-[95%]ll flex h-full max-w-[90%] flex-col rounded-2xl bg-[url(/frame-1.png)] sm:max-w-[80%] xl:max-w-[60%]">
            <div className="relative flex shrink-0 flex-col items-start justify-center gap-5 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-end sm:pr-16">
              <Image
                src="/ikone/mentorship.svg"
                alt="vizija ikona"
                width={60}
                height={60}
              />
              <h3 className="text-2xl text-slate-100">Mentorski program</h3>
              <button
                className="absolute top-10 right-5 cursor-pointer sm:top-1/2"
                onClick={() => setService(null)}
              >
                <IoCloseCircle className="h-10 w-10 -translate-y-1/2 text-slate-100 transition-all duration-300 hover:opacity-50" />
              </button>
            </div>
            <div className="flex grow flex-col gap-5 overflow-x-hidden overflow-y-auto px-5 py-5">
              <p className="text-xl font-bold text-slate-100">
                Poduzetništvo nije solo disciplina — ali je osobno putovanje.
              </p>
              <p className="text-xl text-slate-100">
                Kroz povjerljiv mentorski rad 1 na 1 sagledat ćemo zajedno vaše
                potrebe, razraditi ideju ili razvijati odnos povjerenja sa
                ciljem osnaživanja.
              </p>
              <p className="text-xl font-bold text-slate-100">
                Zašto mentorstvo a ne edukacija?
              </p>

              <p className="text-xl text-slate-100">
                Prednost mentorskog programa je prvenstveno u individualnom
                pristupu, slobodnom iznošenju ideja, ali i odabiru termina ili
                tempa koji vama odgovara, stila koji vi najbolje prihvaćate.
              </p>
              <p className="text-xl text-slate-100">
                Konzultacije su besplatne.
              </p>
              <p className="text-xl text-slate-100">
                Pojedinačan mentorski program u trajanju do 90 min 180,00 €
              </p>
              <Link
                href="/mentorstvo"
                className="bg-theme3 text-theme1 hover:text-theme3 hover:border-theme3 hover:bg-theme1 mx-auto inline-block w-fit rounded-2xl border-2 border-transparent px-5 py-3 text-xl font-semibold transition-all duration-300"
              >
                Pogledaj više
              </Link>
            </div>
          </div>
        </div>
      )}
      {service === "s4" && (
        <div
          className="bg-background/10 fixed inset-0 z-1000 flex items-center justify-center py-[5%] backdrop-blur-xs"
          onClick={() => setService(null)}
        >
          <div className="w-fu max-[450px]:max-w-[95%]ll flex h-full max-w-[90%] flex-col rounded-2xl bg-[url(/frame-1.png)] sm:max-w-[80%] xl:max-w-[60%]">
            <div className="relative flex shrink-0 flex-col items-start justify-center gap-5 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-end sm:pr-16">
              <Image
                src="/ikone/financing.svg"
                alt="vizija ikona"
                width={60}
                height={60}
              />
              <h3 className="text-2xl text-slate-100">
                Pomoć u osiguranju najpovoljnijeg načina financiranja
              </h3>
              <button
                className="absolute top-10 right-5 cursor-pointer sm:top-1/2"
                onClick={() => setService(null)}
              >
                <IoCloseCircle className="h-10 w-10 -translate-y-1/2 text-slate-100 transition-all duration-300 hover:opacity-50" />
              </button>
            </div>
            <div className="flex grow flex-col gap-5 overflow-x-hidden overflow-y-auto px-5 py-5">
              <ul className="ml-5 flex list-disc flex-col gap-5 text-slate-100">
                <li>
                  <p className="text-xl text-slate-100">
                    Provodim pripremu za zajmove poslovnih banaka, HAMAG-BICRO-a
                    te kreditne programe HBOR-a, uključujući izradu financijskih
                    projekcija, usklađenje s uvjetima programa i komunikaciju s
                    institucijama do konačne odluke o odobrenju sredstava
                  </p>
                </li>
                <li>
                  <p className="text-xl text-slate-100">
                    <strong>Financijsko restrukturiranje</strong> - kako bi se
                    prevladale financijske poteškoće, unaprijedilo poslovanje i
                    smanjili rizici nelikvidnosti, ključno je pravovremeno
                    donijeti ispravne odluke temeljene na kvalitetnoj analizi.
                    Model restrukturiranja bilančnih pozicija i/ili usklađenja
                    kapitala predstavlja alat za stabilizaciju financijske
                    strukture poduzeća, osiguranje održive likvidnosti te
                    pripremu poslovanja za daljnji rast i financiranje
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {service === "s5" && (
        <div
          className="bg-background/10 fixed inset-0 z-1000 flex items-center justify-center py-[5%] backdrop-blur-xs"
          onClick={() => setService(null)}
        >
          <div
            className="flex h-full w-full max-w-[90%] flex-col rounded-2xl bg-[url(/frame-1.png)] max-[450px]:max-w-[95%] sm:max-w-[80%] xl:max-w-[60%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex shrink-0 flex-col items-start justify-center gap-5 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-end sm:pr-16">
              <Image
                src="/ikone/documents.svg"
                alt="vizija ikona"
                width={60}
                height={60}
              />
              <h3 className="text-2xl text-slate-100">
                Izrada poslovnih planova i financijskih elaborata
              </h3>
              <button
                className="absolute top-10 right-5 cursor-pointer sm:top-1/2"
                onClick={() => setService(null)}
              >
                <IoCloseCircle className="h-10 w-10 -translate-y-1/2 text-slate-100 transition-all duration-300 hover:opacity-50" />
              </button>
            </div>
            <div className="flex grow flex-col gap-5 overflow-x-hidden overflow-y-auto px-5 py-5">
              <ul className="ml-5 list-disc text-slate-100">
                <li>
                  <p className="text-xl text-slate-100">
                    Izrađujem poslovne planove, investicijske studije i analize
                    isplativosti koje služe kao temelj za donošenje odluka,
                    apliciranje na kredite ili jamstvene programe HAMAG-BICRO
                  </p>
                </li>
              </ul>
              <p className="text-xl text-slate-100">
                <span className="font-bold">Cijena usluge</span>: ovisi o
                kompleksnosti zahtjeva, dok je cijena ocjene prihvatljivosti
                projekta - koja uključuje analizu poslovanja i financijskih
                izvještaja - 200,00 €. U slučaju prihvaćanja ponude Plan 41
                navedena cijena uključuje se u ukupnu cijenu.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectService;
