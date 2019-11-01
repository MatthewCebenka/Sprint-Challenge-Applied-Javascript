// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(spanContent, title, temp) {
    const main = document.createElement('div');
    main.classList.add('header');

    const h1 = document.createElement('h1');
    h1.textContent = title;
    main.appendChild(h1);

    const span = document.createElement('span');
    span.classList.add('date');
    span.text = spanContent;
    main.appendChild(span);

    const spanTwo = document.createElement('span');
    spanTwo.classList.add('temp');
    spanTwo.textContent = temp;
    main.appendChild(spanTwo);


    console.log(main)
    return main;
}

const container = document.querySelector('.header-container');

container.appendChild(Header('MARCH 28, 2019', 'Lambda Times', "98"));
