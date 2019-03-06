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
            callback();
        })
        .catch( err => {
        console.log(err);
        })
    }
    
    //Sends Item info to menu-items db collection on ItemsList item plus click
    addItemToMenu(data, callback) {
        const headers = {
            'Content-Type': 'application/json'
        }
        return axios.post('http://localhost:4200/items/menu-items', {
            item: data.item,
            tag: data.tag,
            servingSize: data.servingSize,
            measure: data.measure,
            carbs: data.carbs
        }, { headers })
        .then(res => {
            callback();
        })
        .catch( err => {
        console.log(err);
        })
    }


    updateData(data, id) {
        return axios.put('http://localhost:4200/items/'+id, {
            item: data.item,
            tag: data.tag,
            servingSize: data.servingSize,
            measure: data.measure,
            carbs: data.carbs
        });
    }

    filterData(tag, callback) {
        const headers = {
            'Content-Type': 'application/json'
        }
        return axios.get('http://localhost:4200/items/'+tag,  { headers })
            // .then( response => {
            //     this.setState({ items: response.data });
            // })
            .catch( error => {
                console.log(error);
            });
    }

    deleteData(id, successCallback) {
        return axios.delete('http://localhost:4200/items/'+id)
        .then(res => {
          console.debug('success');
          successCallback(res);
        })
        .catch(err => {
          console.error(err);
        });
    }

    deleteMenuData(id, successCallback) {
        return axios.delete('http://localhost:4200/items/menu-items/'+id)
        .then(res => {
          console.debug('success');
          successCallback(res);
        })
        .catch(err => {
          console.error(err);
        });
    }

}

export default ItemService;