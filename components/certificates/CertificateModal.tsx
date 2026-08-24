"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download } from "lucide-react";
import { Certificate } from "./certificateData";

type Props = {
  certificate: Certificate | null;
  onClose: () => void;
};

export default function CertificateModal({
  certificate,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-slate-900"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full bg-slate-800 p-3 hover:bg-red-500"
            >
              <X />
            </button>

            <Image
              src={certificate.image}
              alt={certificate.title}
              width={1200}
              height={700}
              className="w-full object-cover"
            />

            <div className="p-8">

              <h2 className="text-3xl font-bold">
                {certificate.title}
              </h2>

              <p className="mt-2 text-cyan-400">
                {certificate.organization}
              </p>

              <p className="mt-2 text-gray-400">
                Issued: {certificate.date}
              </p>

              <div className="mt-8 flex gap-4">

                <a
                  href={certificate.credential}
                  target="_blank"
                  className="rounded-xl bg-cyan-500 px-6 py-3 text-black font-semibold"
                >
                  <ExternalLink className="mr-2 inline" />
                  View Credential
                </a>

                <a
                  href={certificate.image}
                  download
                  className="rounded-xl border border-cyan-500 px-6 py-3"
                >
                  <Download className="mr-2 inline" />
                  Download
                </a>

              </div>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}