export function removePlus(phone: string) {
  return phone.replace(/\+/g, "");
}

export function addPlus(phone: string) {
  return phone.replace(/^\d+/g, "+");
}
