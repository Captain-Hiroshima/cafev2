let food_btn = document.getElementById("food-btn");
let drink_btn = document.getElementById("drink-btn");
let content = document.getElementById("table");

content.innerHTML = `<thead>
<tr>
  <th scope="col">Drink Name</th>
  <th scope="col">Drink Sizes</th>
  <th scope="col">Prices</th>
</tr>
</thead>
<tbody id="t_body">
<tr>
  <td>Cappuchino</td>
  <td>S, M, L</td>
  <td>$2.5, $3, $4</td>
</tr>
<tr>
  <td>Latte</td>
  <td>S, M, L</td>
  <td>$2.5, $3, $4</td>
</tr>
<tr>
  <td>Chocolate</td>
  <td>S, M, L</td>
  <td>$2.5, $3, $4</td>
</tr>
<tr>
  <td>Tea</td>
  <td>S, M, L</td>
  <td>$2.5, $3, $4</td>
</tr>
</tbody>`;

let drinks = `
<thead>
<tr>
  <th scope="col">Drink Name</th>
  <th scope="col">Drink Sizes</th>
  <th scope="col">Prices</th>
</tr>
</thead>
<tr>
  <td>Cappuchino</td>
  <td>S, M, L</td>
  <td>$2.5, $3, $4</td>
</tr>
<tr>
  <td>Latte</td>
  <td>S, M, L</td>
  <td>$2.5, $3, $4</td>
</tr>
<tr>
  <td>Chocolate</td>
  <td>S, M, L</td>
  <td>$2.5, $3, $4</td>
</tr>
<tr>
  <td>Tea</td>
  <td>S, M, L</td>
  <td>$2.5, $3, $4</td>
</tr>`;

let foods = `<thead>
<tr>
  <th scope="col">Food Name</th>
  <th scope="col">Prices</th>
  </thead>
  <tbody>
</tr>
</thead><tr>
<td>Croissant</td>
<td>$2.5, $3, $4</td>
</tr>
<tr>
<td>Cheese Burger</td>
<td>$2.5, $3, $4</td>
</tr>
<tr>
<td>Egg on Toast</td>
<td>$2.5, $3, $4</td>
</tr>
<tr>
<td>McMuffin</td>
<td>$2.5, $3, $4</td>
</tr>
</tbody>`;

function show_drinks() {
  drink_btn.style.color = "black";
  drink_btn.style.backgroundColor = "white";
  food_btn.style.color = "white";
  food_btn.style.backgroundColor = "black";
  content.innerHTML = drinks;
}
function show_food() {
  drink_btn.style.color = "white";
  drink_btn.style.backgroundColor = "black";
  food_btn.style.color = "black";
  food_btn.style.backgroundColor = "white";
  content.innerHTML = foods;
}

drink_btn.addEventListener("click", show_drinks);
food_btn.addEventListener("click", show_food);
