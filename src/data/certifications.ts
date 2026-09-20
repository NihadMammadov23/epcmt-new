export type Credential = {
  name: string;
  issuer: string;
  number?: string;
  issued?: string;
  expires?: string;
};

// Təsdiqlənmiş məlumat əlavə olunduqca bu massivlərə yazılır.
// Sıra vacib deyil — səhifə avtomatik nömrələyir.

export const certifications: Credential[] = [
  // { name: "...", issuer: "...", number: "...", issued: "...", expires: "..." },
];

export const licenses: Credential[] = [
  // { name: "...", issuer: "...", number: "...", issued: "...", expires: "..." },
];