// uuid [20241222]
const getUUID = () => {
  return typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : URL.createObjectURL(new Blob()).slice(-36);
};