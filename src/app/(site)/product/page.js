import DynamicGrid2 from '@/components/section/DynamicGrid2'
import EqualColumnGrid from '@/components/section/EqualColumnGrid'
import InnerBanner from '@/components/section/InnerBanner'
import MarquessLogo from '@/components/section/MarquessLogo'
import NewsLetter from '@/components/section/NewsLetter'
import PortfolioGrid from '@/components/section/PortfolioGrid'
import { fetchPageSections } from '@/lib/pageSections'


export default async function page() {
  const { sections, error } = await fetchPageSections('product');
  if (error) return <div className="text-red-600 text-center py-10">{error}</div>;
  return (
    <>
      {sections.map((section, idx) => {
        switch (section.code) {
          case 'innerbanner':
            return <InnerBanner key={idx} slides={section.cards}></InnerBanner>
          case 'marquesslogo':
            return <MarquessLogo key={idx} data={section.cards}></MarquessLogo>
          case 'dynamicgrid2':
            return <DynamicGrid2 key={idx} data={section}></DynamicGrid2>
          case 'portfoliogrid':
            return <PortfolioGrid key={idx} ></PortfolioGrid>
          case 'equalcolumngrid':
            return <EqualColumnGrid key={idx} data={section}></EqualColumnGrid>
          case 'newsletter':
            return <NewsLetter key={idx} data={section}></NewsLetter>
          default:
            return null;
        }
      })}
    </>
  )
}
