const data = [
  { item_title: 'Заголовок1',
    item_author: 'Автор1',
    item_date: '2020-03-16',
    item_link: '#'
  },
  { item_title: 'Заголовок2',
    item_author: 'Автор2',
    item_date: '2020-04-16',
    item_link: '#'
  },
  { item_title: 'Заголовок3',
    item_author: 'Автор3',
    item_date: '2020-05-16',
    item_link: '#',
    item_status: 'checked'
 }
];


class Item {
  constructor(title, author, date, link, status = '') {
    this.item_title = title;
    this.item_author = author;
    this.item_date = date;
    this.item_link = link;
    this.item_status = status;
  }
  
  render() {
    return `
    <div class="item">
         <div class="item-title">${this.item_title}</div>
         <div class="item-info">
            <div class="item-author">${this.item_author}</div>
            <div class="item-date"><time>${this.item_date}</time></div>
         </div>
         <div class="item-link"><a href="${this.item_link}">Подробнее..</a></div>
         <div class="item-status"><label>Статус - чек 
            <input type="checkbox" name="status" ${this.item_status}></label>
         </div>
      </div>
      `
  }
}

class ItemsList {
  constructor() {
    this.items = [];
  }

  fetchItems() {
    return new Promise((resolve, reject) => {
      this.items = data;
      resolve();
    })
  }

  render() {
    let listHtml = '';
    this.items.forEach(item => {
      const newItem = new Item(item.item_title, item.item_author, item.item_date, item.item_link, item.item_status);
      listHtml += newItem.render();
    });
    document.querySelector('.items-list').innerHTML += listHtml;
  }

}

const list = new ItemsList();
  list.fetchItems()
  .then(() => {
    list.render();
  })
  .catch((error) => {
    console.log(error);
  });


  document.querySelector('.btn').innerHTML+=` (${ data.length })`;
  document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('.items-list').classList.toggle('active');

  });
  