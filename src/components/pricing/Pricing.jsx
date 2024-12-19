import React from "react";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { SectionHeadingSpacing } from "../utils/SectionHeadingSpacing";
import { SectionHeading } from "../utils/SectionHeading";
import { SectionSubheading } from "../utils/SectionSubheading";
import { Card } from "../utils/Card";
import { GhostButton } from "../buttons/GhostButton";
import { FiCheck, FiX } from "react-icons/fi";

export const Pricing = () => {
  return (
    <section
      id="pricing"
      style={{
        backgroundImage:
          "radial-gradient(100% 100% at 50% 0%, rgba(13,13,17,1), rgba(9,9,11,1))",
      }}
      className="relative overflow-hidden"
    >
      <MaxWidthWrapper className="relative z-10 mx-auto max-w-5xl py-20 md:py-40">
        <SectionHeadingSpacing>
          <SectionHeading persistCenter>Wycena</SectionHeading>
          <SectionSubheading persistCenter>
            Korzystaj z niego bezpłatnie dla siebie, uaktualnij, gdy Twój zespół
            potrzebuje zaawansowanej kontroli.
          </SectionSubheading>
        </SectionHeadingSpacing>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PriceCard
            tier="Bezpłatny"
            price="0 zł/mies"
            bestFor="Najlepszy dla 1-5 użytkowników"
            CTA={
              <GhostButton className="w-full">Zacznij bezpłatnie</GhostButton>
            }
            benefits={[
              { text: "Jeden obszar roboczy", checked: true },
              { text: "Wsparcie e-mailowe", checked: true },
              { text: "Przechowywanie danych 1 dzień", checked: false },
              { text: "Role niestandardowe", checked: false },
              { text: "Wsparcie priorytetowe", checked: false },
              { text: "SSO", checked: false },
            ]}
          />
          <PriceCard
            tier="Pro"
            price="79 zł/mies"
            bestFor="Najlepsze dla 5–50 użytkowników"
            CTA={
              <GhostButton className="w-full bg-zinc-50 text-zinc-950 hover:bg-zinc-200 hover:text-zinc-900">
                14-dniowy bezpłatny okres próbny
              </GhostButton>
            }
            benefits={[
              { text: "Pięć obszarów roboczych", checked: true },
              { text: "Wsparcie e-mailowe", checked: true },
              { text: "Przechowywanie danych przez 7 dni", checked: true },
              { text: "Role niestandardowe", checked: true },
              { text: "Wsparcie priorytetowe", checked: false },
              { text: "SSO", checked: false },
            ]}
          />
          <PriceCard
            tier="Przedsiębiorstwo"
            price="Skontaktuj się z nami"
            bestFor="Najlepsze dla powyżej 50 użytkowników"
            CTA={
              <GhostButton className="w-full">
                Skontaktuj się z nami
              </GhostButton>
            }
            benefits={[
              { text: "Unlimited workspaces", checked: true },
              { text: "Email support", checked: true },
              { text: "30 day data retention", checked: true },
              { text: "Custom roles", checked: true },
              { text: "Priority support", checked: true },
              { text: "SSO", checked: true },
            ]}
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const PriceCard = ({ tier, price, bestFor, CTA, benefits }) => {
  return (
    <Card>
      <div className="flex flex-col items-center border-b border-zinc-700 pb-6">
        <span className="mb-6 inline-block text-zinc-50">{tier}</span>
        <span className="mb-3 inline-block text-4xl font-medium ">{price}</span>
        <span className="bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-transparent">
          {bestFor}
        </span>
      </div>

      <div className="space-y-4 py-9">
        {benefits.map((b, i) => (
          <Benefit {...b} key={i} />
        ))}
      </div>

      {CTA}
    </Card>
  );
};

const Benefit = ({ text, checked }) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="grid size-5 place-content-center rounded-full bg-blue-600 text-sm text-zinc-50">
          <FiCheck />
        </span>
      ) : (
        <span className="grid size-5 place-content-center rounded-full bg-zinc-800 text-sm text-zinc-400">
          <FiX />
        </span>
      )}
      <span className="text-sm text-zinc-300">{text}</span>
    </div>
  );
};
