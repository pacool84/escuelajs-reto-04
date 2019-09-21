const randomTime = () => {
  return Math.ceil(Math.random() * (8000 - 1000) + 1000);
};

const menu = {
  hamburger: "Combo Hamburguesa",
  hotdog: "Combo Hot Dogs",
  pizza: "Combo Pizza"
};

const tables = ["Mesa 1", "Mesa 2", "Mesa 3", "Mesa 4", "Mesa 5"];

const orders = (time, product, table) => {
  console.log(product);

  return new Promise((resolve, reject) => {
    if (time < 1000 || time > 8000) {
      reject(`Tiempo Invalido`);
    }
    if (table === undefined) {
      reject(`La mesa no existe`);
    } else if (product === undefined) {
      reject("Producto no existe");
    } else {
      console.log(`### Orden: ${product} para ${table}`);
      setTimeout(() => {
        resolve(
          `=== Pedido servido: ${product}, tiempo de preparación ${time}ms para la ${table}`
        );
      }, time);
    }
  });
};

const waiter = () => {
  orders(randomTime(), menu.hamburger, tables[3])
    .then(res => console.log(res))
    .catch(err => console.error(err));
};

const waiter2 = async () => {
  try {
    const order1 = await orders(90000, menu.pizza, tables[0]);
    console.log(order1);
  } catch (error) {
    console.log(error);
  }

  try {
    const order2 = await orders(randomTime(), menu.hotdog, tables[2]);
    console.log(order2);
  } catch (error) {
    console.log(error);
  }
};

const waiter3 = async () => {
  try {
    const order1 = await orders(randomTime(), menu.hotdog, tables[8]);
    console.log(order1);
  } catch (error) {
    console.log(error);
  }
};

const fethOrders = async () => {
  await waiter();
  await waiter2();
  await waiter3();
};

fethOrders();
