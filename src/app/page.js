'use client'
import Banner from "@/components/section/Banner";
import CloudDataCenter from "@/components/section/CloudDataCenter";
import DynamicGrid from "@/components/section/DynamicGrid";
import ImageCta from "@/components/section/ImageCta";
import MultiTabCard from "@/components/section/MultiTabCard";
import NewsLetter from "@/components/section/NewsLetter";
import Image from "next/image";
import {content, tabs, tabsData, cardData, imageCtaData} from "../data/home"

export default function Home() {
  return (
    <>
    <Banner data={content}></Banner>
    <MultiTabCard tabs={tabs} cardsData={tabsData}></MultiTabCard>
    <DynamicGrid data={cardData}></DynamicGrid>
    <ImageCta data={imageCtaData}></ImageCta>
    </>
  );
}
