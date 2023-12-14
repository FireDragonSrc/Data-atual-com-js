const textoData = document.querySelector('#data');
let data = new Date();
let dia = data.getDay();
let diaMes = data.getDate();
let mes = data.getMonth();
switch(dia){
    case 0:
        dia = 'Domingo';
        break;
    case 1:
        dia = 'Segunda-Feira';
        break;
    case 2:
        dia = 'Terça-Feira';
        break;
    case 3:
        dia = 'Quarta-Feira';
        break;
    case 4:
        dia = 'Quinta-Feira';
        break;
    case 5:
        dia = 'Sexta-Feira';
        break;
    case 6:
        dia = 'Sabado';
        break;
    default:
        dia = '';
        break;
}
switch(mes){
    case 0:
        mes = 'Janeiro';
        break;
    case 1:
        mes = 'Fevereiro';
        break;
    case 2:
        mes = 'Março'
        break;
    case 3:
        mes = 'Abril';
        break;
    case 4:
        mes = 'Maio';
        break;
    case 5:
        mes = 'Junho';
        break;
    case 6:
        mes = 'Julho';
        break;
    case 7:
        mes = 'Agosto';
        break;
    case 8:
        mes = 'Setembro';
        break;
    case 9:
        mes = 'Outubro';
        break;
    case 10:
        mes = 'Novembro';
        break;
    case 11: 
        mes = 'Dezembro';
        break;
    default:
        mes = '';
        break;
}
textoData.innerHTML = `${dia}, ${diaMes} de ${mes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`