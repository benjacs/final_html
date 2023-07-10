const searchContainer = document.querySelector('#divContenedor');
const inputSearch = searchContainer.querySelector('#txtbuscar');
const boxSuggestions = document.querySelector(
    '.sugerencias'
);
const botonlupa = document.querySelector('#btnlupa');
const ulSugerencias = document.querySelector('.sugerencias');
const searchLink = document.querySelector('a');

botonlupa.onclick = e => {
    console.log('click');
    let buscador = document.querySelector('#txtbuscar');//obj input
    let valortxt = buscador.value;//objinput su valor(benjamin)
    if(valortxt != ""){//valortxt = benjamin
        let barra = `https://www.google.com/search?q=${valortxt}&oq=${valortxt}`;
        window.open(barra,"","" );
    }
    
};

inputSearch.onfocus = e => {
    /*console.log('focus');
    let sug = document.querySelector('.sugerencias');
    sug.style.display="flex";
    */

};

inputSearch.onblur = e => {
    console.log('blur');

    // ulSugerencias.style.display="none";

};
inputSearch.onkeyup = e => {

    let userData = e.target.value;
    console.log(userData);


    let emptyArray = [];
    console.log('ENTRO');
    if (userData) {
        console.log('VERDADERO');
        emptyArray = suggestions.filter(data => {
            console.log(data.toLocaleLowerCase());
            console.log(userData.toLocaleLowerCase());
            console.log(data
                .toLocaleLowerCase()
                .startsWith(userData.toLocaleLowerCase()));

            return data
                .toLocaleLowerCase()
                .startsWith(userData.toLocaleLowerCase());
        });

        console.log(emptyArray);
        var contador = 0;
        emptyArray = emptyArray.map(data => {
            contador++;
            return (data = `<li id="resultado${contador}"><a href="#" onclick="seleccionar(this)">${data}</a></li>`);
        });
        console.log(emptyArray);
        searchContainer.classList.add('active');
        showSuggestions(emptyArray);

        let allList = boxSuggestions.querySelectorAll('li');
        boxSuggestions.onclick = e=>{
            if(e.target.matches("li")){
                inputSearch.value = e.target.textContent;
            }
        };
        allList.forEach(li => {
            console.log("foreach li");
            li.onfocus = e => {
                console.log("li click");
                console.log(e.innerHTML);
            };// .setAttribute('onclick', 'seleccionar(this)');
        });
    } else {
        searchContainer.classList.remove('active');
    }
    coordenada();

    if (userData == "") {
        ulSugerencias.style.display = "none";
    } else {
        ulSugerencias.style.display = "block";
    }
};

function seleccionar(element) {
    console.log("click seleccionr");
    let selectUserData = element.textContent;
    console.log(element);
    inputSearch.value = selectUserData;
    window.open(`https://www.google.com/search?q=${inputSearch.value}`,`_blank`,``);
    //window.location.href = `https://www.google.com/search?q=${inputSearch.value}`;
    //searchContainer.classList.remove('active');
}

const showSuggestions = list => {
    let listData;

    if (list.length == 0) {
        userValue = inputSearch.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join(' ');
    }
   // listData = `${listData}
    console.log(listData);
    document.querySelector(".sugerencias").innerHTML = listData;
};

function coordenada() {
    let textoBuscar = document.querySelector("#txtbuscar");

    let coordenadaTxt = textoBuscar.getBoundingClientRect();
    console.log(coordenadaTxt);
    let divSugerencia = document.querySelector(".sugerencias");
    divSugerencia.style.left = `${coordenadaTxt.x}px`;
    divSugerencia.style.top = `${coordenadaTxt.y + coordenadaTxt.height}px`;
    divSugerencia.style.width = `${coordenadaTxt.width}px`;//interpolacion de variables

}
let suggestions = [
    'Youtube',
    'Desarrollador Web',
    'Diseñador Web',
    'Formularios con HTML y CSS',
    'Crear un canal en Youtube',
    'Dinero en la programación',
    'Programación en Python',
    'Desarrollo Frontend',
    'Desarrollo Backend',
    'Rest api con Nodejs',
    'Como crear un blog con Django',
    'Como crear un sitio web responsive',
    'Como consumir una api con React',
    'Aprender React desde cero',
    'Aprender Css desde cero',
    'Aprender Html desde cero',
    'Como convertirse en programador rapidamente',
    'Aprender python desde cero',
    'Desarrollador Ux',
    'Desarrollador UI',
];