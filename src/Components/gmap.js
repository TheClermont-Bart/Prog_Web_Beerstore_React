export default function initStoreMap(
  mapId = 'storeMap',
  listId = 'retailerList'
) {
  const map = document.getElementById(mapId);
  const list = document.getElementById(listId);
  if (!map || !list) return () => {};

  const items = Array.from(list.querySelectorAll('.retailer-item'));
  const listeners = [];

  const embedUrlFromAddress = address =>
    `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  const selectRetailer = btn => {
    items.forEach(i => i.classList.remove('active'));
    btn.classList.add('active');
    map.src = embedUrlFromAddress(btn.dataset.address);
    map.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  items.forEach(btn => {
    const handler = () => selectRetailer(btn);
    btn.addEventListener('click', handler);
    listeners.push({ btn, handler });
  });

  if (items.length) selectRetailer(items[0]);

  return () => {
    listeners.forEach(({ btn, handler }) =>
      btn.removeEventListener('click', handler)
    );
  };
}