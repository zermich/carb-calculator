import axios from 'axios';

class ItemService {

    fetchAllItems() {
        return axios.get('http://localhost:4200/items')
        .catch( error => {
            console.log(error);
        });
    }

    sendNewItemData(data, callback) {
        return axios.post('http://localhost:4200/items/new-item', {
            item: data.item,
            tag: data.tag,
            servingSize: data.servingSize,
            measure: data.measure,
            carbs: data.carbs
        }, { 'Content-Type': 'application/json' })
        .then(res => {
            callback();
        })
        .catch( err => {
        console.log(err);
        })
    }
    
    //Sends Item info to menu-items db collection on ItemsList item plus click
    addItemToMenu(data, callback) {
        return axios.post('http://localhost:4200/items/menu-items', {
            item: data.item,
            tag: data.tag,
            servingSize: data.servingSize,
            measure: data.measure,
            carbs: data.carbs
        }, { 'Content-Type': 'application/json' })
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

    filterData(tag) {
        return axios.get('http://localhost:4200/items/'+tag,  { 'Content-Type': 'application/json' })
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