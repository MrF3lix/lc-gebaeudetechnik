import React from 'react'

export default function Home() {
  return (
    <>
      <section className="w-full flex justify-center py-16 px-8">
        <div className="flex flex-col gap-4 text-center max-w-[550px]">
          <h1 className="text-4xl"><br /><span className="font-bold">Hinweis</span></h1>
          <p className="text-lg">
          wir möchten Sie darauf hinweisen, dass diese Seite momentan noch im Aufbau ist. Wir arbeiten mit Hochdruck daran, sie zu vervollständigen und Ihnen ein optimales Erlebnis bieten zu können. Bitte haben Sie noch etwas Geduld und schauen Sie bald wieder vorbei, um die neuesten Updates und Inhalte zu entdecken. Vielen Dank für Ihr Verständnis!
          <br />
          <br />
          Ihr L&C Gebäudetechnik Team
          </p>

          {/* <LinkButton href="mailto:info@lc-gebaeudetechnik.ch" className="self-center mt-2">
            Jetzt Offerte Einholen
          </LinkButton> */}
        </div>
      </section>
      
    </>
  );
}
