"use strict";

/* Задание 1 Создать функцию, генерирующую шахматную доску. При этом можно использовать любые
html-теги по своему желанию.
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые
ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F,
G, H.*/

const settings ={
    rowsCount: 10, //общее количество строк
    colsCount: 10, //общее количество колонок
    blackCellColor: 'grey',  //цвет закрашенной ячейки
    nameCellY: ['1', '2', '3', '4', '5', '6', '7', '8'], //обозначение строк
    nameCellX: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], //обозначение колонок
    playDesck: [], //отдельный массив для игрового поля, без названий сетки
};
const createChessDesk = () =>{  //создаем игровое поле
    const chessDesk = document.getElementById('chessDesk'); //получаем таблицу
    let cellElements = []; //записываем все ячейки в общий массив

    for (let row = 0; row < settings.rowsCount; row++){ //создаем строки
    const trElem = document.createElement('tr');   
    chessDesk.appendChild(trElem);

      for(let col = 0; col < settings.colsCount; col++){ //создаем ячейки
          const cell = document.createElement('td');
          cellElements.push(cell); //записываем каждую ячейку в общий массив
          trElem.appendChild(cell);   
        };
    };    

    for (let i = 11; i < cellElements.length - 10; i++){ //цикл для выделения игровых клеток из общей таблицы
        if(i % 10 !== 0){
            if (i % 10 < 9){
               const playCell = cellElements[i];
               settings.playDesck.push(playCell); //записываем игровое поле
            };  
        };     
    };
       
    for (let j = 1; j < 61; j++){ //красим игровое поле
        settings.playDesck[j].style.backgroundColor = settings.blackCellColor; //записываем цикл покраски первых двух строк
        j = j + 2;
        settings.playDesck[j].style.backgroundColor = settings.blackCellColor; //остальные строки красятся так же
        j = j + 2;
        settings.playDesck[j].style.backgroundColor = settings.blackCellColor;
        j = j + 2;
        settings.playDesck[j].style.backgroundColor = settings.blackCellColor;
        j = j + 1;   
        settings.playDesck[j].style.backgroundColor = settings.blackCellColor; 
        j = j + 2;
        settings.playDesck[j].style.backgroundColor = settings.blackCellColor;
        j = j + 2;
        settings.playDesck[j].style.backgroundColor = settings.blackCellColor;
        j = j + 2;
        settings.playDesck[j].style.backgroundColor = settings.blackCellColor;
        j = j + 2;
    };
    
};
createChessDesk();

const getNameCell = () =>{ //подписываем строки и столбцы
    for (let x = 1; x < settings.rowsCount; x++) {
        const cellX = document.querySelectorAll('td');
        cellX[x].textContent = settings.nameCellX[x - 1];
        cellX[x + settings.rowsCount * settings.colsCount - settings.rowsCount].textContent = settings.nameCellX[x - 1];

        for (let y = 1; y < settings.colsCount; y++) {
             const cellY = document.querySelectorAll('tr > td:first-child');
             cellY[y].textContent = settings.nameCellY[y - 1];
             const cellYend = document.querySelectorAll('tr > td:last-child');
             cellYend[y].textContent = settings.nameCellY[y - 1];
        };   
    };
};
getNameCell();

/* Задание 2*. Заполнить созданную таблицу фигурами, фигуры должны выглядеть как картинки, либо
можно использовать символы (существуют символы шахматных фигур) причем все фигуры
должны стоять на своих местах и быть соответственно черными и белыми.*/

const figures = [  //данные всех фигур на доске
    {
        name: 'king black', //название фигуры
        viev: '<i class="fas fa-chess-king"></i>',//ссылка на иконку с фигурой
        color: 'black', //цвет фигуры
        position: ['E8'], //начальная позиция
    },
    {
        name: 'king white',
        viev: '<i class="fas fa-chess-king"></i>',
        color: 'white',
        position: ['E1'],
    },
    {
        name: 'qween black',
        viev: '<i class="fas fa-chess-queen"></i>',
        color: 'black',
        position: ['D8'],
    },
    {
        name: 'qween white',
        viev: '<i class="fas fa-chess-queen"></i>',
        color: 'white',
        position: ['D1'],
    },
    {
        name: 'khight black 1',
        viev: '<i class="fas fa-chess-knight"></i>',
        color: 'black',
        position: ['B8'],
    },
    {
        name: 'khight black 2',
        viev: '<i class="fas fa-chess-knight"></i>',
        color: 'black',
        position: ['G8'],
    },
    {
        name: 'khight white 1',
        viev: '<i class="fas fa-chess-knight"></i>',
        color: 'white',
        position: ['B1'],
    },
    {
        name: 'khight white 2',
        viev: '<i class="fas fa-chess-knight"></i>',
        color: 'white',
        position: ['G1'],
    },
    {
        name: 'rook black 1',
        viev: '<i class="fas fa-chess-rook"></i>',
        color: 'black',
        position: ['A8'],
    },
    {
        name: 'rook black 2',
        viev: '<i class="fas fa-chess-rook"></i>',
        color: 'black',
        position: ['H8'],
    },
    {
        name: 'rook white 1',
        viev: '<i class="fas fa-chess-rook"></i>',
        color: 'white',
        position: ['A1'],
    },
    {
        name: 'rook white 2',
        viev: '<i class="fas fa-chess-rook"></i>',
        color: 'white',
        position: ['H1'],
    },
    {
        name: 'bishop black 1',
        viev: '<i class="fas fa-chess-bishop"></i>',
        color: 'black',
        position: ['C8'],
    },
    {
        name: 'bishop black 2',
        viev: '<i class="fas fa-chess-bishop"></i>',
        color: 'black',
        position: ['F8'],
    },
    {
        name: 'bishop white 1',
        viev: '<i class="fas fa-chess-bishop"></i>',
        color: 'white',
        position: ['C1'],
    },
    {
        name: 'bishop white 2',
        viev: '<i class="fas fa-chess-bishop"></i>',
        color: 'white',
        position: ['F1'],
    },
    {
        name: 'pawn black 1',
        viev: '<i class="fas fa-chess-pawn"></i>',
        color: 'black',
        position: ['A7'],
    },
    {
        name: 'pawn black 2',
        viev: '<i class="fas fa-chess-pawn"></i>',
        color: 'black',
        position: ['B7'],
    },
    {
        name: 'pawn black 3',
        viev: '<i class="fas fa-chess-pawn"></i>',
        color: 'black',
        position: ['C7'],
    },
    {
        name: 'pawn black 4',
        viev: '<i class="fas fa-chess-pawn"></i>',
        color: 'black',
        position: ['D7'],
    },
    {
        name: 'pawn black 5',
        viev: '<i class="fas fa-chess-pawn"></i>',
        color: 'black',
        position: ['E7'],
    },
    {
        name: 'pawn black 6',
        viev: '<i class="fas fa-chess-pawn"></i>',
        color: 'black',
        position: ['F7'],
    },
    {
        name: 'pawn black 7',
        viev: '<i class="fas fa-chess-pawn"></i>',
        color: 'black',
        position: ['G7'],
    },
    {
        name: 'pawn black 8',
        viev: '<i class="fas fa-chess-pawn"></i>',
        color: 'black',
        position: ['H7'],
    },
    {
        name: 'pawn white 1',
        viev: '<i class="fas fa-chess-pawn"></i>',
        color: 'white',
        position: ['A2'],
    },
    {
        name: 'pawn white 2',
        viev: '<i class="fas fa-chess-pawn"></i>',
        color: 'white',
        position: ['B2'],
    },
    {
        name: 'pawn white 3',
        viev: '<i class="fas fa-chess-pawn"></i>',
        color: 'white',
        position: ['C2'],
    },
    {
        name: 'pawn white 4',
        viev: '<i class="fas fa-chess-pawn"></i>',
        color: 'white',
        position: ['D2'],
    },
    {
        name: 'pawn white 5',
        viev: '<i class="fas fa-chess-pawn"></i>',
        color: 'white',
        position: ['E2'],
    },
    {
        name: 'pawn white 6',
        viev: '<i class="fas fa-chess-pawn"></i>',
        color: 'white',
        position: ['F2'],
    },
    {
        name: 'pawn white 7',
        viev: '<i class="fas fa-chess-pawn"></i>',
        color: 'white',
        position: ['G2'],
    },
    {
        name: 'pawn white 8',
        viev: '<i class="fas fa-chess-pawn"></i>',
        color: 'white',
        position: ['H2'],
    }
];

const getChess = () =>{ //определяем координаты каждой ячейки на доске, присваеваем data-атрибут с этим адресом
    const desck = settings.playDesck;
    
    for(let j = 0 ; j < settings.nameCellX.length; j++){
        const letter = settings.nameCellX[j];
        for(let i = j, num = 1; i < desck.length; i++, num++){
           desck[i].classList.add(`${letter}` + `${num}`); 
           i = i + 7;  
        };     
    };  
};
getChess();

const renderFigures = () =>{ //расставляем фигур на доске
    const chessDesk = document.getElementById('chessDesk'); //получаем игровую доску
    for (let i = 0; i < figures.length; i++) { //перебираем каждую фигуру 
        const figure = figures[i]; //получаем все свойства фигуры
        const figureColor = figure.color; //получаем цвет фигуры
        const figureCode = figure.viev; //получаем иконку с фигурой     
        const figurePosition = figure.position; //начальная позиция фигуры на доске
        const startPosition = chessDesk.getElementsByClassName(figurePosition[0]);//получаем элемент в который надо поставить иконку фигуры
        const myI = document.createElement('div');//создаем тэг для иконки
        myI.innerHTML = figureCode;//вносим иконку
        myI.style.color = figureColor;//определяем цвет иконки
        startPosition[0].appendChild(myI);//переносим иконку в HTML    
    };
};
renderFigures();

/* Задание 3**. Создать форму в html со следующими полями:
* Имя - текстовое поле
* Телефон - текстовое поле
* Пароль - поле типа password
* Повтор пароля - поле типа password
* Кнопка отправить форму

Необходимо реализовать валидацию этой формы по следующим правилам:
* Имя - должно содержать как минимум 1 символ, не более 50 символов.
* Телефон - должно содержать 11 цифр, не больше, не меньше.
* Пароль - минимум 5 символов, максимум 50
* Повтор пароля - значение должно совпадать с полем пароль.
* Кнопка отправить форму - при нажатии на кнопку форма должна провериться, при
прохождении проверки, форма
отправляется, если проверка не была пройдена, то:
- Каждое поле, которое не прошло проверку должно выделяться красным цветом.
- Под каждым полем, что не прошло проверку, должна писаться подсказка по какой причине
проверка провалилась.

Пользоваться аттрибутами HTML5 запрещено, необходимо проверки реализовать с помощью
javascript.*/

let form = document.getElementById('form'); //находим форму
let text = form.elements.text; //находим поле для имени
let phone = form.elements.phone; //находим поле для номера телефона
let passOne = form.elements.passwordOne; //находим поле с паролем
let passSec = form.elements.passwordSecond;//находим поле с повтором пароля
let button = form.elements.button;//находим кнопку отправить

for (let i = 0; i < form.length - 1; i++){
    const errorDiv = document.createElement('div'); //создаем пустой контейнер для вывода текста ошибки
    errorDiv.textContent = ''; //оставляем его пустым
    form.appendChild(errorDiv);
    form.insertBefore(errorDiv, form[i + 1]);//ставим по пустому контейнеру после каждого поля для ввода
    errorDiv.classList.add('error');   
};

const errorDiv = document.getElementsByClassName('error'); //находим все контейнеры для ошибок
let inputNumber = null; //номер текущего поля для ввода
let textError; //текст ошибки 

const errorShow = inputNumber =>{ //выдает текст ошибки
    form[inputNumber].classList.add('invalid');
    errorDiv[inputNumber].textContent = `${textError}`;
};

const deleteError = inputNumber =>{ //очищает поле с ошибкой для повторного заполнения 
    form[inputNumber].classList.remove('invalid');
    errorDiv[inputNumber].textContent = '';
};

const checkInputText = () => { //проверяем поле для ввода имени
    if(Number(+text.value)){
        textError = 'Имя должно содержать только буквы!';  
        errorShow(0);   
    } else if (text.value.length > 50){
        textError = 'Имя не должно быть длиннее 50 символов!';
        errorShow(0); 
    } else if (text.value.length < 1){
        textError = 'Имя не может быть короче 1 буквы!';
        errorShow(0); 
    };

    for (let i = 0; i < text.value.length; i++){ //проверяем каждый символ в имени, чтобы не было цифр
        const letter = text.value[i];
        if (!Number.isNaN(+letter)){
            textError = 'Имя должно содержать только буквы!';
            errorShow(0); 
        };  
     };
    
    text.onfocus = () =>{ //очищаем поле с ошибкой, чтобы заполнить заново
        deleteError(0);
    };
};

const checkInputPhone = () =>{ //проверяем телефонный номер
    if(Number.isNaN(+phone.value)){  
        textError = 'Номер телефона должен содержать только цифры!';
        errorShow(1);   
    } else if (phone.value.length < 11){
        textError = 'Номер телефона не может содержать меньше 11 цифр!';
        errorShow(1); 
    } else if (phone.value.length > 11) {
        textError = 'Номер телефона не может содержать больше 11 цифр!';
        errorShow(1); 
    };
    phone.onfocus = () =>{//очищаем поле с ошибкой, чтобы заполнить заново
        deleteError(1);
    };
};

const checkInputPassword = () =>{ //проверяем пароль
    if(passOne.value.length < 5){
        textError = 'Пароль должен содержать не меньше 5 символов!';
        errorShow(2);   
    } else if (passOne.value.length > 50){
        textError = 'Пароль должен содержать не больше 50 символов!';
        errorShow(2);  
    }; 

    passOne.onfocus = () =>{//очищаем поле с ошибкой, чтобы заполнить заново
        deleteError(2);
    };
};

const checkInputRepeatPassword = () =>{ //сравниваем пароли
    if(passSec.value !== passOne.value){
        textError = 'Пароли не совпадают!';
        errorShow(3);   
    }; 

    passSec.onfocus = () =>{//очищаем поле с ошибкой, чтобы заполнить заново
        deleteError(3);
    };
};

button.onclick = () =>{ //при клике на кнопку отправить запускаем проверку всех полей формы
    checkInputText();//проверяем имя
    checkInputPhone();//проверяем телефон
    checkInputPassword();//проверяем пароль
    checkInputRepeatPassword();//проверяем повтор пароля
    for (let i = 0; i < errorDiv.length; i++) { // если нет сообщений об ошибке - отправляем форму, если есть - заполняем заново
        if (errorDiv[i].textContent !== ''){
            alert('Заполните форму заново');
            break;
        } else {
            return alert('Ваша форма отправлена');
        };
    };
};


