import HalfShowSlider from '@/components/section/HalfShowSlider'
import IconCard from '@/components/section/IconCard'
import ImageCard from '@/components/section/ImageCard'
import SingleBanner from '@/components/section/SingleBanner'
import StylistCard from '@/components/section/StylistCard'
import StylishCard2 from '@/components/section/StylishCard2'
import React from 'react'
import NewsLetter from '@/components/section/NewsLetter'

const slideData = [
  {
    id: 1,
    title: 'Disaster Recovery as a Service (DRaaS)',
    desc: "Protect your workloads with automated failover and real-time backups.",
    image: '/assets/disaster-recovery-as-a-service.jpg',
  },
  {
    id: 2,
    title: 'Hybrid Cloud Infrastructure',
    desc: "Connect on-premise data with our private cloud via dedicated links or VPN.",
    image: '/assets/hybrid-cloud-infrastructure.jpg',
  },
  {
    id: 3,
    title: 'Web & App Hosting',
    desc: "Scalable virtual machines with autoscaling, firewalls, and SSL support.",
    image: '/assets/web-and-app.jpg',
  },
];

export default function page() {
  return (
    <>
    <HalfShowSlider slides={slideData}></HalfShowSlider>
    <SingleBanner></SingleBanner>
    <IconCard></IconCard>
    <StylishCard2></StylishCard2>
    <ImageCard></ImageCard>
    <NewsLetter></NewsLetter>
    </>
  )
}
