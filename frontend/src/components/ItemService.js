import axios from 'axios';

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
        // .then( res => {
        //     callback();
        // })
        .catch(err => {
            console.log(err);
        });
    }

    // Retrieves item data by id from db items collection
    fetchItemData(id, callback) {
        return axios.post(`/items/fetch`, {itemId: id})
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
    updateItemData(data, id, successCallback) {
        return axios.put(`/items/${id}`, {
            item: data.item,
            tag: data.tag,
            servingSize: data.servingSize,
            measure: data.measure,
            carbs: data.carbs
        })
        .then( res=> {
            successCallback(res);
        });
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