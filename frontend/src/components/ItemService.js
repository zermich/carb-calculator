import axios from 'axios';

// const ip = '134.209.76.47';
// const ip = 'localhost';
const protocol = 'http://';
const ip = '127.0.0.1';
const port = '3000';
const api = '/carbcalc-api';
const prefix = `${protocol}${ip}:${port}${api}`;

class ItemService {

    // Retrieves all items from db items collection
    fetchAllItems() {
        return axios.get(`/items`)
        .catch( error => {
            console.log(error);
        });
    }

    // Retrieves all items with menuItem: true from db items collection
    fetchMenuItems() {
        return axios.get(`/items/menu-items`)
        .catch(err => {
            console.log(err);
        });
    }

    // Posts new items to db items collection
    sendNewItemData(data, callback) {
        return axios.post(`/items/new-item`, {
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

    // Updates item in db items collection
    updateData(data, id) {
        return axios.put(`/items/`+id, {
            item: data.item,
            tag: data.tag,
            servingSize: data.servingSize,
            measure: data.measure,
            carbs: data.carbs
        })
        .then( res => console.log(res));
    }

    // Toggles menuItem value to display/delete from Menu view
    updateMenuItemData(id, menuBoolean, successCallback) {
        return axios.put(`/items/add-menu-item/`+id, {
            menuItem: menuBoolean
        })
        .then( res => {
            successCallback(res);
        });
    }

    // Clears current menu by updating all items with menuItem: true to false
    clearMenu(successCallback){
        return axios.put(`/items/menu/clear-menu`)
        .then( res => {
            console.debug('success');
            successCallback(res);
        })
        .catch(err => {
            console.error(err);
        })
    }

    // Deletes item from db
    deleteData(id, successCallback) {
        return axios.delete(`/items/`+id)
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