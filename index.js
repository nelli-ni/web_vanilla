import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>My Vanilla JS Game</h1>
<div>
<h1 align="center">Tic Tac Toe</h1>
<table>
  <tr>
    <td>
      <button
        class="cell"
        onclick="getElementById('test').innerHTML = Date()"
        id="cell00">click on me</button>
    </td>
    <td>
      <button type="button" class="cell" id="cell01"></button>
    </td>
    <td>
      <button type="button" class="cell" id="cell02" />
    </td>
    <td>
      <button type="button" class="cell" id="cell03" />
    </td>
    <td>
      <button type="button" class="cell" id="cell04" />
    </td>
  </tr>
  <tr>
    <td>
      <button type="button" class="cell" id="cell10" />
    </td>
    <td>
      <button type="button" class="cell" id="cell11" />
    </td>
    <td>
      <button type="button" class="cell" id="cell12" />
    </td>
    <td>
      <button type="button" class="cell" id="cell13" />
    </td>
    <td>
      <button type="button" class="cell" id="cell14" />
    </td>
  </tr>
  <tr>
    <td>
      <button type="button" class="cell" id="cell20" />
    </td>
    <td>
      <button type="button" class="cell" id="cell21" />
    </td>
    <td>
      <button type="button" class="cell" id="cell22" />
    </td>
    <td>
      <button type="button" class="cell" id="cell23" />
    </td>
    <td>
      <button type="button" class="cell" id="cell24" />
    </td>
  </tr>
  <tr>
    <td>
      <button type="button" class="cell" id="cell30" />
    </td>
    <td>
      <button type="button" class="cell" id="cell31" />
    </td>
    <td>
      <button type="button" class="cell" id="cell32" />
    </td>
    <td>
      <button type="button" class="cell" id="cell33" />
    </td>
    <td>
      <button type="button" class="cell" id="cell34" />
    </td>
  </tr>
  <tr>
    <td>
      <button type="button" class="cell" id="cell00" />
    </td>
    <td>
      <button type="button" class="cell" id="cell01" />
    </td>
    <td>
      <button type="button" class="cell" id="cell02" />
    </td>
    <td>
      <button type="button" class="cell" id="cell03" />
    </td>
    <td>
      <button type="button" class="cell" id="cell04" />
    </td>
  </tr>
</table>
</div>
`;
document.getElementById("cell00").addEventListener("click", myFunction);

function myFunction() {
  alert("Hello World!");
}
/* document.getElementById("cell00").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("cell00").innerHTML = "YOU CLICKED ME!";
}


myFunction(); */
