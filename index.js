

function agregarNota() {
    // toma valores
    let medico = document.getElementById("medico");
    let cedula = document.getElementById("cedula");
    let paciente = document.getElementById("paciente");
    let fecha = document.getElementById("fecha");
    let fecha2 = document.getElementById("fecha2");
    let medicamento = document.getElementById("medicamento");
    let recetas = document.getElementById("recetas");
    // crea fecha recetas
    let row1 = document.createElement("div");
    row1.setAttribute("class", "row float-right");
    let col1_1 = document.createElement("div");
    col1_1.setAttribute("class", "col-md-8");
    let col1_2 = document.createElement("div");
    col1_2.setAttribute("class", "col-md-4");
    // asigna valores
    col1_1.textContent = "Fecha Recetas:";
    col1_2.textContent = fecha.value;
    // agrega a documento
    row1.appendChild(col1_1);
    row1.appendChild(col1_2);
    recetas.appendChild(row1);

    let br = document.createElement("br");
    recetas.appendChild(br);

    let row2 = document.createElement("div");
    row2.setAttribute("class", "row");
    let col2_1 = document.createElement("div");
    col2_1.setAttribute("class", "col-md-1");
    let col2_2 = document.createElement("div");
    col2_2.setAttribute("class", "col-md-9 text-right")
    let col2_3 = document.createElement("div");
    col2_3.setAttribute("class", "col-md-2")

    col2_1.textContent = medico.value;
    col2_2.textContent = "Cedula:";
    col2_3.textContent = cedula.value;

    row2.appendChild(col2_1);
    row2.appendChild(col2_2);
    row2.appendChild(col2_3);
    recetas.appendChild(row2);

    let hr = document.createElement("hr");
    recetas.appendChild(hr);

    let row3 = document.createElement("div");
    row3.setAttribute("class", "row");
    let col3_1 = document.createElement("div");
    col3_1.setAttribute("class", "col-md-2 text-right");
    let col3_2 = document.createElement("div");
    col3_2.setAttribute("class", "col-md-8")
    /* let col2_3 = document.createElement("div");
    col2_3.setAttribute("class", "col-md-2") */

    col3_1.textContent = "Paciente";
    col3_2.textContent = paciente.value;

    row3.appendChild(col3_1);
    row3.appendChild(col3_2);
    recetas.appendChild(row3);

    let row4 = document.createElement("div");
    row4.setAttribute("class", "row");
    let col4_1 = document.createElement("div");
    col4_1.setAttribute("class", "col-md-2 text-right");
    let col4_2 = document.createElement("div");
    col4_2.setAttribute("class", "col-md-8");

    col4_1.textContent = "Fecha exp:";
    col4_2.textContent = fecha2.value;

    row4.appendChild(col4_1);
    row4.appendChild(col4_2);
    recetas.appendChild(row4);

    let row5 = document.createElement("div");
    row5.setAttribute("class", "row");
    let col5_1 = document.createElement("div");
    col5_1.setAttribute("class", "col-md-12 text-center");

    col5_1.textContent = medicamento.value;

    row5.appendChild(col5_1);
    recetas.appendChild(row5);

    borrar();







}

function borrar() {
    medico.value = "";
    cedula.value = "";
    paciente.value = "";
    fecha.value = "";
    fecha2.value = "";
    medicamento.value = "";
    recetas.value = "";

}