const arrIcons =[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const eleCards = document.querySelector('.cards');
renderInterface(eleCards);
const eleSelect = document.querySelector('#type-icon');

function renderInterface(eleCards) {
	arrIcons.forEach(objIcon => eleCards.innerHTML += geneateCard(objIcon));
}

function geneateCard(obj) {
	return `
		<div class="card col-3 p-4 text-center">
            <i class="${obj.family} ${obj.prefix}${obj.name} text-${obj.color}"></i> 
            <div>${obj.name}</div>
		</div>
    `;
}

// const arrAnimals = arrIcons.filter(objIcon => objIcon.type === 'animal');
// const arrVegetables = arrIcons.filter(objIcon => objIcon.type === 'vegetable');
// const arrUsers = arrIcons.filter(objIcon => objIcon.type !== 'user' && objIcon.type !== 'user');

const arrAnimals = [], arrVegetables = [], arrUsers = [];

function mySelect() {
    const eleType = eleSelect.value;
    eleCards.innerHTML = eleType;

    arrIcons.forEach(objIcon => {
        switch (objIcon.type) {
            case 'animal':
                arrAnimals.push(objIcon);
                break;
            case 'vegetable':
                arrVegetables.push(objIcon);
                break;
            case 'user':
                arrUsers.push(objIcon);
            break;
            default:
                arrIcons.push(objIcon);
                break;
        }
    });
}