import HalfShowSlider from '@/components/section/HalfShowSlider'
import IconCard from '@/components/section/IconCard'
import ImageCard from '@/components/section/ImageCard'
import SingleBanner from '@/components/section/SingleBanner'
import StylishCard2 from '@/components/section/StylishCard2'
import React from 'react'
import NewsLetter from '@/components/section/NewsLetter'
import { fetchPageSections } from '@/lib/pageSections'

export default async function page() {
    const { sections, error } = await fetchPageSections('solutions');
    if (error) return <div className="text-red-600 text-center py-10">{error}</div>;
  return (
    <>
       {sections.map((section, idx) => {
            switch (section.code) {
              case 'halfshowslider':
                return <HalfShowSlider key={idx} slides={section.cards}></HalfShowSlider>
              case 'singlebanner':
                return <SingleBanner key={idx} data={section}></SingleBanner>
              case 'iconcard':
                return <IconCard key={idx}></IconCard>
              case 'stylishcard':
                return <StylishCard2></StylishCard2>
              case 'imagecard':
                return <ImageCard></ImageCard>
              case 'newsletter':
                return <NewsLetter key={idx} data={section}></NewsLetter>
              default:
                return null;
            }
          })}
    </>
  )
}
