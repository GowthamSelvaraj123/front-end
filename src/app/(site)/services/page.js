import React from 'react'
import HalfShowSlider from '@/components/section/HalfShowSlider'
import DynamicGrid3 from '@/components/section/DynamicGrid3';

const slideData = [
  {
    id: 1,
    title: 'Enterprise Cloud & Datacenter Power',
    desc: "Experience performance, security, and scalability tailored to your business.",
    image: '/assets/disaster-recovery-as-a-service.jpg',
  },
  {
    id: 2,
    title: 'Secure Infra for Growing Businesses',
    desc: "Connect on-premise data with our private cloud via dedicated links or VPN.",
    image: '/assets/hybrid-cloud-infrastructure.jpg',
  },
  {
    id: 3,
    title: 'Boost Efficiency. Cut Costs. Grow Fast.',
    desc: "Scalable virtual machines with autoscaling, firewalls, and SSL support.",
    image: '/assets/web-and-app.jpg',
  },
];

export default function page() {
  return (
    <>
        <HalfShowSlider slides={slideData}></HalfShowSlider>
        <DynamicGrid3></DynamicGrid3>
    </>
  )
}
