import axios from 'axios';

class ItemService {

    // Retrieves all items from db items collection
    fetchAllItems() {
        return axios.get('http://localhost:4200/items')
        .catch( error => {
            console.log(error);
        });
    }

    fetchMenuItems() {
        return axios.get('http://localhost:4200/items/menu-items')
        .catch(err => {
            console.log(err);
        });
    }

    // Posts new items to db items collection
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
    // addItemToMenu(data, callback) {
    //     return axios.post('http://localhost:4200/items/menu-items', {
    //         item: data.item,
    //         tag: data.tag,
    //         servingSize: data.servingSize,
    //         measure: data.measure,
    //         carbs: data.carbs
    //     }, { 'Content-Type': 'application/json' })
    //     .then(res => {
    //         callback();
    //     })
    //     .catch( err => {
    //     console.log(err);
    //     })
    // }

    // Updates item in db items collection
    updateData(data, id) {
        return axios.put('http://localhost:4200/items/'+id, {
            item: data.item,
            tag: data.tag,
            servingSize: data.servingSize,
            measure: data.measure,
            carbs: data.carbs
        });
    }

    // Toggles menuItem value to display/delete from Menu view
    updateMenuItemData(id, menuBoolean, successCallback) {
        return axios.put('http://localhost:4200/items/add-menu-item/'+id, {
            menuItem: menuBoolean
        })
        .then( res => {
            successCallback(res);
        });
    }

    // filterData(tag) {
    //     return axios.get('http://localhost:4200/items/'+tag,  { 'Content-Type': 'application/json' })
    //     .catch( error => {
    //         console.log(error);
    //     });
    // }

    clearMenu(){
        return axios.get('http://localhost:4200/items/menu/clear-menu', {
            // menuItem: false
        });
        // .then( res => {
        //     successCallback(res);
        // });
    }

    // Deletes item from db
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

    // deleteMenuData(id, successCallback) {
    //     return axios.delete('http://localhost:4200/items/menu-items/'+id)
    //     .then(res => {
    //       console.debug('success');
    //       successCallback(res);
    //     })
    //     .catch(err => {
    //       console.error(err);
    //     });
    // }

}

export default ItemService;