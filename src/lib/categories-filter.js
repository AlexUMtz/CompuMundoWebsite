import productsData from '../data/products.json';

const displayProducts = (prodcutsToShow) => {
  const shopContent = document.getElementById('shopContent');

  shopContent.innerHTML = '';

  prodcutsToShow.forEach((product) => {
    const card = document.createElement('div');
    card.className =
      ' bg-white text-gray-500  p-4 shadow-md rounded-lg flex flex-col justify-center items-center';
    card.innerHTML = `
      <h3 class="md:text-lg">${product.productName}</h3>
      <img class='h-auto w-36 m-auto' src="${product.img}" alt="${product.productName}">
      `;

    //

    shopContent.appendChild(card);
  });
};

const filterProducts = (category) => {
  const producstToShow = productsData.filter(
    (product) => product.category === category
  );

  displayProducts(producstToShow);
};

const allBtn = document.getElementById('allproducts');
const computerBtn = document.getElementById('computer');
const printerBtn = document.getElementById('printer');
const accesoriesBtn = document.getElementById('accesories');

allBtn.addEventListener('click', () => {
  displayProducts(productsData);
});

computerBtn.addEventListener('click', () => {
  filterProducts('computer');
});

printerBtn.addEventListener('click', () => {
  filterProducts('printer');
});

accesoriesBtn.addEventListener('click', () => {
  filterProducts('accesories');
});

displayProducts(productsData);
