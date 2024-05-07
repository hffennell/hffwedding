'use client';
import { useState, useRef, useEffect } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Rsvp from '@/components/rsvp';
import Info from '@/components/info';
import Travel from '@/components/travel';
import Filler from '@/components/filler';
import { useIntersectionObserver } from '@/components/hooks/useIntersectionObserver';
import { returnActiveSection, returnActiveSectionClasses } from '@/components/functional/simpleSwitch';

export default function Home() {
  // sections refs, ** update ** when adding new sections //
  const heroRef = useRef<HTMLDivElement | null>(null);
  const rsvpRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);
  const travelRef = useRef<HTMLDivElement | null>(null);
  const fillerRef = useRef<HTMLDivElement | null>(null);
  const hero = useIntersectionObserver(heroRef, {threshold: .5});
  const rsvp = useIntersectionObserver(rsvpRef, {threshold: .5});
  const info = useIntersectionObserver(infoRef, {threshold: .5});
  const travel = useIntersectionObserver(travelRef, {threshold: .5});
  const filler = useIntersectionObserver(fillerRef, {threshold: .5});

  const key = {
    hero: hero?.isIntersecting,
    rsvp: rsvp?.isIntersecting,
    info: info?.isIntersecting,
    travel: travel?.isIntersecting,
    filler: filler?.isIntersecting
  }

  return (
    <>
      <main className="relative flex flex-wrap">
        <Header activeSection={returnActiveSection(key)} textClasses={returnActiveSectionClasses(key)} />
        <Hero ref={heroRef} />
        <Rsvp ref={rsvpRef} />
        <Info ref={infoRef} />
        <Travel ref={travelRef} />
        <Filler ref={fillerRef} /> 
      </main>
    </>
  )
}
