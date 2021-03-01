const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const containerGaleryRef = document.createElement('div');
containerGaleryRef.classList.add('gallary__box')
const listGeleryRef = document.createElement('ul');
containerGaleryRef.append(listGeleryRef);


const itemListRef = images.map(el => {
  const itemListRef = document.createElement('li');
  itemListRef.classList.add('gallary__item')
    listGeleryRef.appendChild(itemListRef);
  const imgItemRef = document.createElement('img');  
  imgItemRef.classList.add('gallary__img')
  imgItemRef.src = el.url;
  imgItemRef.alt = el.alt;
    
    itemListRef.append(imgItemRef);
    return itemListRef;
});

listGeleryRef.classList.add('gallary__list')

document.body.appendChild(containerGaleryRef);
