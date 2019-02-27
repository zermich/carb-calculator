import axios from 'axios';

class ItemService {

    sendNewItemData(data, callback) {
        const headers = {
            'Content-Type': 'application/json'
        }
        axios.post('http://localhost:4200/items/new-item', {
            item: data.item,
            tag: data.tag,
            servingSize: data.servingSize,
            measure: data.measure,
            carbs: data.carbs
        }, { headers })
              .then(res => {
                if ( res !== null || undefined ) 
                {
                    console.log(res)
                    .then( value => {
                        console.log('You have successfully sent new item data');
                        callback();
                    })
                    .catch( err => {});
                } else {
                    console.log('post error');
                }
              })
              .catch( err => {
                console.log(err);
              })
      }

}

export default ItemService;