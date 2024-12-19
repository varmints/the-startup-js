import React, { useState } from "react";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { Card } from "../utils/Card";
import { SiX } from "react-icons/si";
import { BubbleButton } from "../buttons/BubbleButton";
import { motion } from "framer-motion";
import { useWindowSize } from "../utils/useWindowSize";
import { CornerGrid } from "../utils/CornerGrid";
import { SectionHeading } from "../utils/SectionHeading";
import { SectionSubheading } from "../utils/SectionSubheading";
import { SectionHeadingSpacing } from "../utils/SectionHeadingSpacing";

export const Customers = () => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);

  const shouldCollapseColumns = width ? width <= 768 : false;

  return (
    <section id="testimonials" className="relative overflow-hidden">
      <MaxWidthWrapper className="relative z-10 py-20 md:py-40">
        <SectionHeadingSpacing>
          <SectionHeading>Uwielbiany przez naszych klientów</SectionHeading>
          <SectionSubheading>
            Ludzie ufają ludziom. Pochwal się wszystkimi świetnymi recenzjami
            swojego produktu, aby uspokoić umysły potencjalnych klientów.
          </SectionSubheading>
        </SectionHeadingSpacing>
        <motion.div
          initial={false}
          animate={open ? "open" : "closed"}
          style={{
            overflow: "hidden",
          }}
          variants={{
            open: {
              height: "fit-content",
            },
            closed: {
              height: 400,
            },
          }}
          className="relative grid grid-cols-1 gap-3 md:grid-cols-3"
        >
          {shouldCollapseColumns ? (
            <>
              <ReviewsColumn
                reviews={[...REVIEWS.left, ...REVIEWS.center, ...REVIEWS.right]}
              />
            </>
          ) : (
            <>
              <ReviewsColumn reviews={REVIEWS.left} />
              <ReviewsColumn reviews={REVIEWS.center} />
              <ReviewsColumn reviews={REVIEWS.right} />
            </>
          )}

          <motion.div
            variants={{
              open: {
                top: "100%",
              },
              closed: {
                top: "0%",
              },
            }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-zinc-950/0 to-zinc-950"
          />
        </motion.div>
        <BubbleButton
          onClick={() => setOpen((pv) => !pv)}
          className="mx-auto mt-12"
        >
          {open ? "Zobacz mniej" : "Zobacz więcej"}
        </BubbleButton>
      </MaxWidthWrapper>
      <CornerGrid />
    </section>
  );
};

const ReviewsColumn = ({ reviews }) => {
  return (
    <div className="h-fit space-y-3">
      {reviews.map((r) => (
        <Card
          style={{
            padding: "20px",
          }}
          key={r.name}
        >
          <div className="mb-1.5 flex items-center justify-between">
            <div className="relative flex items-center gap-2 py-2 text-xs">
              <img
                src={r.src}
                alt={`Placeholder image for faux user ${r.name}`}
                className="size-8 rounded-full"
              />
              <div>
                <span className="block font-medium text-zinc-300">
                  {r.name}
                </span>
                <span className="block text-zinc-500">{r.handle}</span>
              </div>
            </div>

            <SiX className="text-sky-300" />
          </div>
          <p>{r.review}</p>
        </Card>
      ))}
    </div>
  );
};

const REVIEWS = {
  left: [
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Agata",
      name: "Agata Dudek",
      handle: "@agatadudek",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum labore incidunt temporibus sunt? Excepturi nulla atque odio dolore, velit harum.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oliwia",
      name: "Oliwia Krawczyk",
      handle: "@OliwiaKrawczyk",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum labore velit harum.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wiktor",
      name: "Wiktor Ostrowski",
      handle: "@wOstrowski",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum labore incidunt temporibus sunt? Excepturi velit harum.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gabriel",
      name: "Gabriel Kowalczyk",
      handle: "@kowalczykg",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing. Excepturi nulla atque odio dolore, velit harum.",
    },
  ],
  center: [
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jacek",
      name: "Jacek Adamczyk",
      handle: "@JacekA",
      review: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alicja",
      name: "Alicja Jabłońska",
      handle: "@alicjajablonska",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum labore incidunt.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      name: "Maria Rutkowska",
      handle: "@Maria.R",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit velit harum.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karolina",
      name: "Karolina Nowakowska",
      handle: "@Karolina.Nowakowska",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum labore incidunt temporibus sunt.",
    },
  ],
  right: [
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryszard",
      name: "Ryszard Pawłowski",
      handle: "@ryszard_pawlowski",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi nulla atque odio dolore, velit harum.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maksymilian",
      name: "Maksymilian Kamiński",
      handle: "@maks",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum labore velit harum. Dolor sit amet consectetur adipisicing elit!",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Agata",
      name: "Agata Dąbrowska",
      handle: "@dabrowska",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum labore incidunt temporibus sunt? Excepturi velit harum.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julia",
      name: "Julia Wójcik",
      handle: "@julkaW",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing. Excepturi nulla.",
    },
  ],
};
