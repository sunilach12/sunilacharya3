"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

import { Certificate } from "./certificateData";

type Props = {
  certificate: Certificate;
  onClick: () => void;
};

export default function CertificateCard({
  certificate,
  onClick,
}: Props) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900 shadow-lg transition hover:border-cyan-400"
    >
      {/* Certificate Image */}
      <div className="relative overflow-hidden">
        <Image
          src={certificate.image}
          alt={certificate.title}
          width={600}
          height={350}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

        {/* Hover Text */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-black opacity-0 transition duration-300 group-hover:opacity-100">
          Click to Preview
        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        <div className="mb-4 flex items-center gap-3">
          <Award className="text-cyan-400" size={24} />

          <div>
            <h3 className="text-xl font-bold text-white">
              {certificate.title}
            </h3>

            <p className="text-gray-400">
              {certificate.organization}
            </p>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">

          <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-400">
            {certificate.category}
          </span>

          <span className="text-sm text-gray-400">
            {certificate.date}
          </span>

        </div>

        <a
          href={certificate.credential}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-cyan-400 transition hover:text-cyan-300"
        >
          View Credential
          <ExternalLink size={18} />
        </a>

      </div>
    </motion.div>
  );
}