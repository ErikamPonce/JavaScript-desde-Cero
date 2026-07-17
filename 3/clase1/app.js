const orderList = document.getElementById("orderList");
const addOrderBtn = document.getElementById("addOrderBtn");

let orderId = 1;

// Agregar pedido al hacer clic
addOrderBtn.addEventListener("click", () => {

    const order = {
        id: orderId++,
        status: "En Proceso"
    };

    addOrder(order);

    processOrder(order);
});


// Agrega el pedido a la interfaz
function addOrder(order){

    const li = document.createElement("li");

    li.id = `order-${order.id}`;

    li.textContent = `Pedido #${order.id}: ${order.status}`;

    orderList.appendChild(li);
}


// Actualiza el estado del pedido
function updateOrderStatus(order, status){

    const li = document.getElementById(`order-${order.id}`);

    if(li){

        li.textContent = `Pedido #${order.id}: ${status}`;

    }

}


// Simula la preparación usando Promise y setTimeout
function prepareOrder(order){

    return new Promise((resolve)=>{

        // Tiempo aleatorio entre 2 y 5 segundos
        const time = Math.floor(Math.random() * 3000) + 2000;

        setTimeout(()=>{

            resolve("Completado");

        }, time);

    });

}


// Procesa el pedido usando async/await
async function processOrder(order){

    const result = await prepareOrder(order);

    updateOrderStatus(order, result);

}