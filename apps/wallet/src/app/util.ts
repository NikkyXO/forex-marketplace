export function generateTransactionNumber() {
  const time = Date.now();
  const randomNumber = Math.floor(Math.random() * 1000000001);
  const uniqueId = 'Txn' + time + randomNumber;
  return uniqueId;
}
