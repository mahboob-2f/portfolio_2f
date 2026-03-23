import { useState, useEffect } from "react";
import { FaGithub,FaLinkedin,FaFileAlt  } from "react-icons/fa";
import TwinklingGridBackground from "./TwinklingGridBackground";
import ProfileImageRing from "./ProfileImageRing";
import SocialButtons from "./SocialButtons";
import SectionPill from "./SectionPill";

export default function HeroSection() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatted = now.toLocaleString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const buttons = [
    { label: "GitHub", icon: FaGithub, href: "#" },
    { label: "LinkedIn", icon: FaLinkedin, href: "#" },
    { label: "Resume", icon: FaFileAlt , href: "#" },
  ];

  return (
    <section id="home"
      className="relative min-h-screen overflow-hidden bg-white text-black dark:bg-black dark:text-white"
    >
      <TwinklingGridBackground />

      <div
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-6 py-16 sm:px-10 lg:px-16" // FIXED: vertically centered content and reduced max width
      >
        <div
          className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]" // FIXED: aligned both sides vertically at center
        >
          <div className="max-w-2xl">
            <h1
              className="text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl"
            >
              Hi, I&apos;m Mahboob
            </h1>

            <p
              className="mt-3 text-base font-light text-zinc-400 sm:text-lg lg:text-xl" // FIXED: reduced subtitle size
            >
              Software Developer • Web Developer
            </p>

            <div className="mt-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]"></span> {/* FIXED: smaller status dot */}
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 sm:text-base">
                  Available for work
                </p>
              </div>

              <p className="mt-2 pl-5 text-sm text-zinc-400">
                {formatted}
              </p>
            </div>

            <div className="mt-6">
              <SocialButtons buttons={buttons} />
            </div>

            <div className="mt-14 max-w-2xl">
              <h2 className="text-2xl font-semibold text-black dark:text-white">About</h2>

              <p
                className="mt-5 text-sm leading-8 text-zinc-400 sm:text-base sm:leading-8" // FIXED: compact paragraph text
              >
                I&apos;m a computer science student who enjoys understanding how
                systems actually work and building software that is structured,
                efficient, and scalable. Most of my time goes into exploring
                data structures, algorithms, and backend logic, and I like
                breaking down complex problems into simple, logical solutions.
                I&apos;m interested in writing clean code, understanding the
                deeper side of technology, and continuously improving how I
                design and build software.
              </p>
            </div>
          </div>

          <div
            className="flex items-center justify-center lg:justify-end" // FIXED: image section vertically centered
          >
            <ProfileImageRing image="/profile.jpg" />
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-7 left-1/2 z-10 w-[78%] -translate-x-1/2"
      >
        
      </div>
    </section>
  );
}