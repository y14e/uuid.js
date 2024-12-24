// uuid [20241224]
export function getUUID() {
  if (crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  const a = URL.createObjectURL(new Blob()).slice(-36);
  URL.revokeObjectURL(a);
  return a;
}