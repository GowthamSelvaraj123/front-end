import Banner from "@/components/section/Banner";
import DynamicGrid from "@/components/section/DynamicGrid";
import ImageCta from "@/components/section/ImageCta";
import MultiTabCard from "@/components/section/MultiTabCard";
import { fetchPageSections } from "@/lib/pageSections";
export const revalidate = 60;
export default async function Home() {
  const { sections, error } = await fetchPageSections('home');
  if (error) return <div className="text-red-600 text-center py-10">{error}</div>;
  return (
    <>
      {sections.map((section, idx) => {
        switch (section.code) {
          case 'banner':
            return <Banner key={idx} data={section} />;
          case 'multitab':
            return <MultiTabCard key={idx} cardsData={section.cards} />;
          case 'grid':
            return <DynamicGrid key={idx} data={section.cards} />;
          case 'imagecta':
            return <ImageCta key={idx} data={section} />;
          default:
            return null;
        }
      })}
    </>
  );
}
