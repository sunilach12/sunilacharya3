"use client";
import CertificateStats from "./CertificateStats";
import { useState } from "react";
import {
  certificates,
  Certificate,
} from "./certificateData";

import CertificateGrid from "./CertificateGrid";
import CertificateFilter from "./CertificateFilter";
import CertificateModal from "./CertificateModal";

export default function Certificates() {
  const [category, setCategory] = useState("All");

  const [selected, setSelected] =
    useState<Certificate | null>(null);

  const filtered =
    category === "All"
      ? certificates
      : certificates.filter(
          (c) => c.category === category
        );

  return (
    <section
      id="certificates"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="uppercase tracking-[0.4em] text-cyan-400">
            Achievement
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Certificates
          </h2>

        </div>
        <CertificateStats />
        <CertificateFilter
          selected={category}
          onChange={setCategory}
        />

        <CertificateGrid
          certificates={filtered}
          onSelect={setSelected}
        />

      </div>

      <CertificateModal
        certificate={selected}
        onClose={() => setSelected(null)}
      />

    </section>
  );
}