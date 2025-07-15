import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MarquessLogo() {
const logoData = [
  { src: "/assets/tier-3-certified-infrastructure.png", label: "Tier-III+ Certified Infrastructure" },
  { src: "/assets/24-7-noc.png", label: "24x7 NOC & On-Site Security" },
  { src: "/assets/biometric-access-control.png", label: "Biometric Access Control" },
  { src: "/assets/cctv-surveillance.png", label: "CCTV Surveillance" },
  { src: "/assets/dual-power-feeds.png", label: "Dual Power Feeds" },
  { src: "/assets/cloud-backup.png", label: "N+1 UPS Redundancy " },
  { src: "/assets/backup-diesel-generators.png", label: "Backup Diesel Generators" },
  { src: "/assets/precision-cooling-systems.png", label: "Precision Cooling Systems" },
  { src: "/assets/hot-and-cold-aisle-containment.png", label: "Hot & Cold Aisle Containment" },
  { src: "/assets/carrier-neutral-connectivity.png", label: "Carrier-Neutral Connectivity" },
  { src: "/assets/multiple-isp-uplinks.png", label: "Multiple ISP Uplinks" },
  { src: "/assets/bgp-routing-enabled.png", label: "BGP Routing Enabled" },
  { src: "/assets/cross-connect-support.png", label: "Cross-Connect Support" },
  { src: "/assets/99.999%-uptime-sla.png", label: "99.999% Uptime SLA" },
  { src: "/assets/cloud-backup.png", label: "Remote Hands & Eyes Support" },
  { src: "/assets/fire-detection-and-suppression.png", label: "Fire Detection & Suppression" },
  { src: "/assets/cloud-backup.png", label: "Seismic Zone Compliant Design" },
  { src: "/assets/energy-efficient-architecture.png", label: "Energy-Efficient Architecture" },
  { src: "/assets/real-time-power-monitoring.png", label: "Real-Time Power Monitoring" },
  { src: "/assets/smart-rack-management.png", label: "Smart Rack Management" },
  { src: "/assets/cloud-backup.png", label: "Physical & Logical Isolation Zones" },
  { src: "/assets/fully-redundant-network-paths.png", label: "Fully Redundant Network Paths" },
  { src: "/assets/scalable-cabinet-footprint.png", label: "Scalable Cabinet Footprint" },
  { src: "/assets/secure-equipment-lockers.png", label: "Secure Equipment Lockers" },
  { src: "/assets/unlimited-cloud-storage.png", label: "Unlimited Cloud Storage" }
];

  return (
    <div className="bottom-0 left-0 w-full bg-gray-100 py-4 backdrop-blur-[5px] overflow-hidden">
      <div className="relative flex items-center">
        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 160,
            ease: 'linear',
          }}
        >
          {[...logoData, ...logoData].map((item, index) => (
            <div key={index} className="flex items-center gap-2 min-w-fit px-4">
              <Image
                src={item.src}
                alt={item.label}
                width={50}
                height={50}
                className="h-8 w-8 object-contain"
                loading="lazy"
              />
              <span className="text-[#1D1D1F] text-[16px] whitespace-nowrap leading-[1.25] l:text-[12px]">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
