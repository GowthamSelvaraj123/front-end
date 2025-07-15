'use client'
import DynamicGrid from '@/components/section/DynamicGrid'
import DynamicGrid2 from '@/components/section/DynamicGrid2'
import EqualColumnGrid from '@/components/section/EqualColumnGrid'
import ImageCta from '@/components/section/ImageCta'
import InnerBanner from '@/components/section/InnerBanner'
import MarquessLogo from '@/components/section/MarquessLogo'
import NewsLetter from '@/components/section/NewsLetter'
import PortfolioGrid from '@/components/section/PortfolioGrid'
import React from 'react'
import { bannerData, productData, equalColumnData } from '@/data/product'
export default function page() {
  return (  
    <>
    <InnerBanner slides={bannerData}></InnerBanner>
    <MarquessLogo></MarquessLogo>
    <DynamicGrid2 data={productData}></DynamicGrid2>
    <PortfolioGrid></PortfolioGrid>
    <EqualColumnGrid data={equalColumnData}></EqualColumnGrid>
    <NewsLetter></NewsLetter>
    </>
  )
}
