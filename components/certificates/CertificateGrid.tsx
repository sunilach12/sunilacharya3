"use client";

import CertificateCard from "./CertificateCard";
import { Certificate } from "./certificateData";
type Props = {
  certificates: Certificate[];
  onSelect: (certificate: Certificate) => void;
};

export default function CertificateGrid({
  certificates,
  onSelect,
}: Props) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {certificates.map((certificate) => (
        <CertificateCard
          key={certificate.id}
          certificate={certificate}
          onClick={() => onSelect(certificate)}
        />
      ))}
    </div>
  );
}