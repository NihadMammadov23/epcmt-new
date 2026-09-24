export type Credential = {
  name: string;
  issuer: string;
  number?: string;
  issued?: string;
  expires?: string;
};

// Mənbə: Azərbaycan Respublikası İqtisadiyyat Nazirliyi tərəfindən verilmiş lisenziya.
export const certifications: Credential[] = [
  // Sertifikat məlumatı təsdiqləndikcə bura əlavə olunur.
];

export const licenses: Credential[] = [
  {
    name: "Bina və qurğuların layihələndirilməsi lisenziyası",
    issuer: "Azərbaycan Respublikası İqtisadiyyat Nazirliyi",
    number: "EL-311/2025",
    issued: "22.04.2025",
  },
];
