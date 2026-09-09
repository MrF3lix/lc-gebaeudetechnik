import { Button, LinkButton } from "@/components/Button";
import { FireIcon, HomeModernIcon, RocketLaunchIcon, SunIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { WrenchIcon } from "@heroicons/react/24/outline";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { Feature } from "@/components/home/features"
import { Person } from "@/components/home/person"
import { Project } from "@/components/home/project"
import { getFeatures, getProjects, getSettings, getTeamMembers, pbFileUrl } from "@/lib/pocketbase"

const FEATURE_ICONS: Record<string, ReactElement> = {
  fire: <FireIcon className="w-6 h-6" />,
  wrench: <WrenchIcon className="w-6 h-6" />,
  "home-modern": <HomeModernIcon className="w-6 h-6" />,
  sun: <SunIcon className="w-6 h-6" />,
};

export default async function Home() {
  const [settings, features, projects, teamMembers] = await Promise.all([
    getSettings(),
    getFeatures(),
    getProjects(),
    getTeamMembers(),
  ]);

  return (
    <>
      <section className="w-full flex justify-center py-16 px-8">
        <div className="flex flex-col gap-4 text-center max-w-[550px]">
          <h1 className="text-3xl">{settings.hero_title}<br /><span className="font-bold">{settings.hero_subtitle}</span></h1>
          {/* hero_text is a PocketBase "editor" (rich text) field, only ever written by a logged-in superuser */}
          <p className="text-lg" dangerouslySetInnerHTML={{ __html: settings.hero_text }} />

          <LinkButton href={`mailto:${settings.hero_cta_email}`} className="self-center mt-2">
            Jetzt Offerte Einholen
          </LinkButton>
        </div>
      </section>
      <section className="w-full rounded-xl max-w-[1200px] my-16 px-8">
        <div className="relative w-full h-96">
          <Image
            className="rounded-xl w-full"
            src={pbFileUrl(settings, settings.hero_image)}
            quality={80}
            priority={false}
            fill={true}
            style={{ objectFit: "cover", objectPosition: "top" }}
            alt="Title Image"
          />

        </div>
      </section>
      <section id="dienstleistung" className="bg-white dark:bg-black w-full flex flex-col gap-16 items-center justify-center py-16 px-8">
        <div className="flex flex-col items-center gap-4 text-center max-w-[550px]">
          <BuildingOfficeIcon className="w-8 h-8 text-center" />
          <h2 className="text-2xl font-extrabold">{settings.services_heading}</h2>
          <p dangerouslySetInnerHTML={{ __html: settings.services_text }} />
        </div>
        <div className="flex gap-8 max-w-[1200px] justify-center flex-wrap">
          {features.map((feature) => (
            <Feature
              key={feature.id}
              icon={FEATURE_ICONS[feature.icon]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <section id="ueber-uns" className="w-full flex flex-col gap-16 items-center justify-center py-16 px-8">
        <div className="flex flex-col items-center gap-4 text-center max-w-[550px]">
          <RocketLaunchIcon className="w-8 h-8 text-center" />
          <h2 className="text-2xl font-extrabold">{settings.projects_heading}</h2>
          <p dangerouslySetInnerHTML={{ __html: settings.projects_text }} />
        </div>
        <div className="max-w-[1200px] w-full">
          <div className="overflow-x-auto flex gap-12 py-8 snap-mandatory snap-x">
            {projects.map((project) => (
              <Project
                key={project.id}
                image={
                  <Image
                    src={pbFileUrl(project, project.image)}
                    priority={false}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    alt="Title Image"
                  />
                }
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="ueber-uns" className="bg-white dark:bg-black w-full flex flex-col gap-16 items-center justify-center py-16 px-8">
        <div className="flex flex-col items-center gap-4 text-center max-w-[550px]">
          <UserGroupIcon className="w-8 h-8 text-center" />
          <h2 className="text-2xl font-extrabold">{settings.team_heading}</h2>
          <p dangerouslySetInnerHTML={{ __html: settings.team_text }} />
        </div>
        <div className="flex gap-12 max-w-[1200px] lg:flex-nowrap flex-wrap justify-center">
          {teamMembers.map((person) => (
            <Person
              key={person.id}
              image={pbFileUrl(person, person.image)}
              name={person.name}
              position={person.position}
              phone={person.phone}
              email={person.email}
              description={person.description}
            />
          ))}
        </div>
      </section>

      <section id="kontakt" className="w-full flex flex-col gap-16 items-center justify-center py-16 pb-0 px-8">
        <div className="bg-white dark:bg-black w-full relative rounded-xl max-w-[1200px] p-12 flex flex-col gap-4">
          <h2 className="text-4xl font-light">Kontakt</h2>

          <div className="flex flex-col">
            <p>{settings.contact_company}</p>
            <p>{settings.contact_address_line1}</p>
            <p>{settings.contact_address_line2}</p>
            <a className="text-sky-700 dark:text-sky-300 underline" href={`tel:${settings.contact_phone}`}>{settings.contact_phone}</a>
            <Link href={`mailto:${settings.contact_email}`} className="text-sky-700 dark:text-sky-300 underline">{settings.contact_email}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
