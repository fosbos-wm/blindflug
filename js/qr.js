/* QR-Code lokal erzeugen (nichts wird geladen) */
export async function qrSvg(text, px = 220) {
  const { qrcode } = await import("./qr-local.js");
  const q = qrcode(0, "M"); q.addData(text); q.make();
  const n = q.getModuleCount(), cell = 4; let d = "";
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) d += `M${(c + 2) * cell} ${(r + 2) * cell}h${cell}v${cell}h-${cell}z`;
  const size = (n + 4) * cell;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${px}" height="${px}" role="img" aria-label="QR-Code"><rect width="${size}" height="${size}" fill="#fff"/><path d="${d}" fill="#000"/></svg>`;
}
