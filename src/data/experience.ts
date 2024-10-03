import React from "react";
import ntnu from '../assets/ntnu.png';
import VektorLogo from "../assets/vektor-logo-circle.svg";
import NordicLogo from "../assets/nordicSemiconductor.png";
import Hybrida from "../assets/hybrida.png";

export const data = {
  experience: [
  {
    title: "Bachelor i Informatikk",
    location: "Trondheim, Norge",
    date: "2021 - 2024",
    description: "Jeg har en bachelorgrad i Informatikk fra NTNU i Trondheim, der jeg har fått muligheten til å fordype meg i blant annet programvareutvikling, algoritmer, datastrukturer, databaser og kunstig intelligens. Dette er noe jeg syntes har vært utrolig spennende og jeg ser fram til å jobbe videre med dette!",
    icon: React.createElement("img", { src: ntnu, style: { width: "80%", height: "80%" }}),
    link: "https://www.ntnu.no/studier/bit"
  },
  {
    title: "Utvikler hos Vektorprogrammets IT team",
    location: "Trondheim, Norge",
    date: "2023 - Dags dato",
    description: "På grunn av min interesse for programvareutvikling, engasjerte jeg meg i studentvervet Vektorprogrammet som utvikler. Her fikk jeg muligheten til å bidra til utviklingen av den nye nettsiden for vervet, samt jobbe med flere andre spennende prosjekter. Dette har vært et utrolig sosialt verv, som har gitt meg verdifull erfaring med samarbeid i team og utvikling av konkrete løsninger.",
    icon: React.createElement("img", { src: VektorLogo, style: { width: "80%", height: "80%" }}),
    link: "https://vektorprogrammet.no/team/Trondheim/IT"
  },
  {
    title: "Nestleder hos Vektorprogrammets IT team",
    location: "Trondheim, Norge",
    date: "2024",
    description: "Videre fikk jeg rollen som nestleder i Vektorprogrammets IT-team. I denne stillingen hadde jeg ansvar for å lede møter, delegere oppgaver og sørge for at alle i teamet følte seg sett og hadde god oversikt over sine arbeidsoppgaver. Dette ga meg verdifull erfaring med ledelse, kommunikasjon og teamarbeid.",
    icon: React.createElement("img", { src: VektorLogo, style: { width: "80%", height: "80%" }}),
    link: "https://vektorprogrammet.no/team/Trondheim/IT"
  },
  {
    title: "Bacheloroppgave hos Nordic Semiconductor",
    location: "Trondheim, Norge",
    date: "2024",
    description: "Jeg skrev bacheloroppgaven min hos Nordic Semiconductor, hvor jeg var en del av firmware-teamet. Sammen med to andre utviklet jeg firmware for en Thingy:91-enhet. Vi benyttet oss av samples og SDK-er, som Nordic nRF Connect SDK, som var levert av kunden vår Nordic Semiconductor. Som er basert på programmeringsspråket C og Zephyr OS. Gjennom dette prosjektet fikk jeg verdifull erfaring med å jobbe tett med en reell kunde, samt praktisk innsikt i firmware-utvikling.",
    icon: React.createElement("img", { src: NordicLogo, style: { width: "80%", height: "80%" }}),
    link: "https://www.nordicsemi.com/About-us"
  },
  {
    title: "Leder hos Vektorprogrammets IT team",
    location: "Trondheim, Norge",
    date: "2024 - Dags dato",
    description: "I slutten av mai 2024 ble jeg valgt til rollen som leder for IT-teamet i Vektorprogrammet. Som leder fikk jeg hovedansvaret for å lede teamet, noe som, i tillegg til oppgavene jeg hadde som nestleder, inkluderte drift av den aktive nettsiden for Vektorprogrammet og å fungere som kontaktperson for de andre teamene i Trondheim, Ås og Bergen. I løpet av denne perioden har jeg lært å lage konkrete planer for nettsidens videreutvikling, samt å løse problemer knyttet til feil på den aktive nettsiden. Jeg har også erfart hvor viktig det er å stole på teammedlemmenes ferdigheter ved å delegere arbeid til dem.",
    icon: React.createElement("img", { src: VektorLogo, style: { width: "80%", height: "80%" }}),
    link: "https://vektorprogrammet.no/team/Trondheim/IT"
  },
  {
    title: "Master i Ingeniørvitenskap og IKT",
    location: "Trondheim, Norge",
    date: "2024 - Dags dato",
    description: "Etter å ha fullført Bachelorgraden min i Informatikk, begynte jeg i 3. klasse av sivilingeniørgraden i Ingeniørvitenskap og IKT ved NTNU. Jeg valgte denne retningen for å få en bredere forståelse innen ingeniørfag, samtidig som jeg ønsket å holde fokus på IT. Jeg planlegger å bli ferdig i 2027.",
    icon: React.createElement("img", { src: ntnu, style: { width: "80%", height: "80%" }}),
    link: "https://www.ntnu.no/studier/mting"
  },
  {
    title: "Medlem i Turringen",
    location: "Trondheim, Norge",
    date: "2024 - Dags dato",
    description: "Det er viktig for meg å integrere meg i studiemiljøet for Ingeniørvitenskap og IKT, og derfor engasjerte jeg meg i komiteen Turringen. Turringen er en av linjeforeningen Hybrida's mange komiteer, og går ut på å arrangere aktive og sosiale aktiviteter for studentene. Jeg håper å kunne bidra til et godt sosialt miljø, samtidig som jeg får et avbrekk fra studiene og blir bedre kjent med mine medstudenter.",
    icon: React.createElement("img", { src: Hybrida, style: { width: "80%", height: "80%" }}),
    link: "https://hybrida.no/komite#innhold"
  }
]};