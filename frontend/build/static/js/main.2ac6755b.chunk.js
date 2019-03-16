(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(56)},32:function(e,t,a){},33:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(24),l=a.n(r),c=(a(32),a(33),a(3)),s=a(4),o=a(6),u=a(5),m=a(7),h=a(58),d=a(60),b=a(59),v=a(1),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={idealWeight:"Pending Calculation"},a.calculateWeight=a.calculateWeight.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"calculateWeight",value:function(){var e=this._newServing.value,t=this._newCarbs.value,a=(e*this._newDesiredCarbs.value/t).toFixed(2);this.setState({idealWeight:a})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"content-container"},i.a.createElement("h2",{className:"content-header"},"Calculator"),i.a.createElement("div",null,i.a.createElement("form",null,i.a.createElement("div",{className:"form-row"},i.a.createElement("label",null,"Item Serving Size:"),i.a.createElement("input",{type:"number",id:"info-serving-size",name:"item-serving-size",ref:function(t){return e._newServing=t}})),i.a.createElement("div",{className:"form-row"},i.a.createElement("label",null,"Item Carbs:"),i.a.createElement("input",{type:"number",id:"info-carbs",name:"item-carbs",ref:function(t){return e._newCarbs=t}})),i.a.createElement("div",{className:"form-row"},i.a.createElement("label",null,"Desired Carbs:"),i.a.createElement("input",{type:"number",id:"desired-carbs",name:"item-desired-carbs",ref:function(t){return e._newDesiredCarbs=t}}))),i.a.createElement("div",null,i.a.createElement("button",{className:"form-submit-button",onClick:this.calculateWeight},"Calculate")),i.a.createElement("p",null,"Ideal Weight: ",this.state.idealWeight)))}}]),t}(n.Component),p=a(8),f=a.n(p),E="127.0.0.1:4200",j=function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,[{key:"fetchAllItems",value:function(){return f.a.get("http://".concat(E,":4200/items")).catch(function(e){console.log(e)})}},{key:"fetchMenuItems",value:function(){return f.a.get("http://".concat(E,":4200/items/menu-items")).catch(function(e){console.log(e)})}},{key:"sendNewItemData",value:function(e,t){return f.a.post("http://".concat(E,":4200/items/new-item"),{item:e.item,tag:e.tag,servingSize:e.servingSize,measure:e.measure,carbs:e.carbs},{"Content-Type":"application/json"}).then(function(e){t()}).catch(function(e){console.log(e)})}},{key:"updateData",value:function(e,t){return f.a.put("http://".concat(E,":4200/items/")+t,{item:e.item,tag:e.tag,servingSize:e.servingSize,measure:e.measure,carbs:e.carbs})}},{key:"updateMenuItemData",value:function(e,t,a){return f.a.put("http://".concat(E,":4200/items/add-menu-item/")+e,{menuItem:t}).then(function(e){a(e)})}},{key:"clearMenu",value:function(e){return f.a.put("http://".concat(E,":4200/items/menu/clear-menu")).then(function(t){console.debug("success"),e(t)}).catch(function(e){console.error(e)})}},{key:"deleteData",value:function(e,t){return f.a.delete("http://".concat(E,":4200/items/")+e).then(function(e){console.debug("success"),t(e)}).catch(function(e){console.error(e)})}}]),e}(),C=a(57),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).addItemService=new j,a.handleSubmit=a.handleSubmit.bind(Object(v.a)(Object(v.a)(a))),a.handlePlus=a.handlePlus.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handlePlus",value:function(e){var t=this;e.preventDefault(),this.addItemService.updateMenuItemData(this.props.obj._id,!0,function(e){t.props.onMenuItemAdd()})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.addItemService.deleteData(this.props.obj._id,function(e){})}},{key:"render",value:function(){return i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("button",{onClick:this.handlePlus,className:"add-menu-item-button btn-item-row"},i.a.createElement("i",{className:"material-icons"},"add"))),i.a.createElement("td",null,this.props.obj.item),i.a.createElement("td",null,this.props.obj.tag),i.a.createElement("td",null,i.a.createElement(C.a,{to:"/edit/".concat(this.props.obj._id),className:"btn-item-row"},i.a.createElement("i",{className:"material-icons"},"create"))),i.a.createElement("td",null,i.a.createElement("button",{onClick:this.handleSubmit,className:"btn-item-row"},i.a.createElement("i",{className:"material-icons"},"delete"))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).addItemService=new j,a.handleDelete=a.handleDelete.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleDelete",value:function(e){var t=this;e.preventDefault(),this.addItemService.updateMenuItemData(this.props.obj._id,!1,function(e){t.props.onDelete()})}},{key:"render",value:function(){return i.a.createElement("tr",null,i.a.createElement("td",null,this.props.obj.item),i.a.createElement("td",null,this.props.obj.tag),i.a.createElement("td",null,i.a.createElement("button",{className:"btn-current-menu-delete",onClick:this.handleDelete},"X")))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={items:"",sortBy:"",visibleItems:[],menuItems:""},a.addItemService=new j,a.handleSort=a.handleSort.bind(Object(v.a)(Object(v.a)(a))),a.handleFilter=a.handleFilter.bind(Object(v.a)(Object(v.a)(a))),a.updateCurrentMenu=a.updateCurrentMenu.bind(Object(v.a)(Object(v.a)(a))),a.handleMenuItemDelete=a.handleMenuItemDelete.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.all([f.a.get("http://localhost:4200/items"),f.a.get("http://localhost:4200/items/menu-items")]).then(f.a.spread(function(t,a){e.setState({items:t.data,visibleItems:t.data,menuItems:a.data})})).catch(function(e){console.log(e)})}},{key:"handleSort",value:function(e){var t=e.target.name,a=this.state.items.sort(function(e,a){var n=e[t].toLowerCase(),i=a[t].toLowerCase();return n<i?-1:n>i?1:0});this.setState({items:a})}},{key:"handleFilter",value:function(e){e.preventDefault();var t=e.target.value,a=this.state.items,n=[];a.forEach(function(e){e.tag===t&&(n.push(e),console.log(n))}),"category"===t?this.setState({visibleItems:this.state.items}):this.setState({visibleItems:n})}},{key:"updateCurrentMenu",value:function(){var e=this;f.a.get("http://localhost:4200/items/menu-items").then(function(t){e.setState({menuItems:t.data})}).catch(function(e){console.log(e)})}},{key:"tabRow",value:function(){var e=this;if(this.state.items instanceof Array)return this.state.visibleItems.map(function(t,a){return i.a.createElement(O,{obj:t,key:a,onMenuItemAdd:e.updateCurrentMenu})})}},{key:"handleMenuItemDelete",value:function(){var e=this;f.a.get("http://localhost:4200/items/menu-items").then(function(t){e.setState({menuItems:t.data})}).catch(function(e){console.log(e)})}},{key:"currentMenuRow",value:function(){var e=this;if(this.state.menuItems instanceof Array)return this.state.menuItems.map(function(t,a){return i.a.createElement(y,{obj:t,key:a,onDelete:e.handleMenuItemDelete})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"content-container"},i.a.createElement("h2",{className:"content-header"},"Items"),i.a.createElement("div",{id:"current-menu-container"},i.a.createElement("h3",null,"Current Menu"),i.a.createElement("table",null,i.a.createElement("tbody",null,this.currentMenuRow()))),i.a.createElement("table",{className:"items-table"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null),i.a.createElement("th",null,i.a.createElement("button",{onClick:this.handleSort,name:"item"},"Item")),i.a.createElement("th",null,i.a.createElement("select",{name:"tag",placeholder:"Category",onChange:this.handleFilter},i.a.createElement("option",{default:!0,value:"category"},"All Categories"),i.a.createElement("option",{value:"fruit"},"Fruit"),i.a.createElement("option",{value:"protein"},"Protein"),i.a.createElement("option",{value:"vegetable"},"Vegetable"),i.a.createElement("option",{value:"dessert"},"Dessert"))))),i.a.createElement("tbody",{className:"items-list-tbody"},this.tabRow())))}}]),t}(n.Component),k=a(13),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={item:"",tag:"fruit",servingSize:0,measure:"g",carbs:0},a.addItemService=new j,a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(k.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.addItemService.sendNewItemData(this.state,function(){t.props.history.push("/all-items")})}},{key:"render",value:function(){return i.a.createElement("div",{className:"content-container"},i.a.createElement("h2",{className:"content-header"},"New Item"),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("div",{className:"form-row"},i.a.createElement("label",{htmlFor:"item"},"Item Name:"),i.a.createElement("input",{type:"text",id:"item",name:"item",onChange:this.handleChange})),i.a.createElement("div",{className:"form-row"},i.a.createElement("label",{htmlFor:"tag"},"Tag:"),i.a.createElement("select",{name:"tag",onChange:this.handleChange},i.a.createElement("option",{value:"fruit"},"Fruit"),i.a.createElement("option",{value:"protein"},"Protein"),i.a.createElement("option",{value:"vegetable"},"Vegetable"),i.a.createElement("option",{value:"dessert"},"Dessert"))),i.a.createElement("div",{className:"form-row"},i.a.createElement("label",{htmlFor:"serving-size"},"Serving Size:"),i.a.createElement("input",{type:"number",id:"serving-size",name:"servingSize",onChange:this.handleChange})),i.a.createElement("div",{className:"form-row"},i.a.createElement("label",{htmlFor:"measure"},"Measure:"),i.a.createElement("select",{name:"measure",onChange:this.handleChange},i.a.createElement("option",{value:"g"},"Grams"),i.a.createElement("option",{value:"oz"},"Ounces"))),i.a.createElement("div",{className:"form-row"},i.a.createElement("label",{htmlFor:"carbs"},"Carbs:"),i.a.createElement("input",{type:"number",id:"carbs",name:"carbs",onChange:this.handleChange})),i.a.createElement("div",null,i.a.createElement("button",{className:"form-submit-button",type:"submit",value:"Submit"},"Add Item"))))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={item:"",tag:"",servingSize:0,measure:"",carbs:0},a.addItemService=new j,a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:4200/items/"+this.props.match.params.id).then(function(t){console.log(t),e.setState({item:t.data.item,tag:t.data.tag,servingSize:t.data.servingSize,measure:t.data.measure,carbs:t.data.carbs})}).catch(function(e){console.log(e)})}},{key:"handleChange",value:function(e){this.setState(Object(k.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.addItemService.updateData(this.state,this.props.match.params.id,function(e){t.props.history.push("/")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return i.a.createElement("div",{className:"new-item-container"},i.a.createElement("h2",null,"Edit Item"),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("div",{className:"form-row"},i.a.createElement("label",{htmlFor:"item"},"Item Name:"),i.a.createElement("input",{type:"text",id:"item",name:"item",value:this.state.item})),i.a.createElement("div",{className:"form-row"},i.a.createElement("label",{htmlFor:"tag"},"Tag:"),i.a.createElement("input",{type:"text",id:"tag",name:"tag",value:this.state.tag})),i.a.createElement("div",{className:"form-row"},i.a.createElement("label",{htmlFor:"serving-size"},"Serving Size:"),i.a.createElement("input",{type:"number",id:"serving-size",name:"servingSize",value:this.state.servingSize})),i.a.createElement("div",{className:"form-row"},i.a.createElement("label",{htmlFor:"calories"},"Measure:"),i.a.createElement("input",{type:"text",id:"calories",name:"measure",value:this.state.measure})),i.a.createElement("div",{className:"form-row"},i.a.createElement("label",{htmlFor:"carbs"},"Carbs:"),i.a.createElement("input",{type:"number",id:"carbs",name:"carbs",value:this.state.carbs})),i.a.createElement("div",{className:"button"},i.a.createElement("button",{type:"submit"},"Add Item"))))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={menuVisible:!1},a.toggleMenuVisibility=a.toggleMenuVisibility.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"toggleMenuVisibility",value:function(){this.setState(function(e){return{menuVisible:!e.menuVisible}})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"nav-container"},i.a.createElement("button",{onClick:this.toggleMenuVisibility,id:"nav-mobile-header"},"Navigate To ",i.a.createElement("i",{className:"material-icons"},"keyboard_arrow_down")),i.a.createElement("ul",{className:e.state.menuVisible?"navbar-ul-visible":"navbar-ul-hidden"},i.a.createElement("li",null,i.a.createElement(C.a,{to:"/",name:"Calculator",onClick:this.toggleMenuVisibility},"Calculator")),i.a.createElement("li",null,i.a.createElement(C.a,{to:"/new-item",name:"New Item",onClick:this.toggleMenuVisibility},"New Item")),i.a.createElement("li",null,i.a.createElement(C.a,{to:"/all-items",name:"Items",onClick:this.toggleMenuVisibility},"Items")),i.a.createElement("li",null,i.a.createElement(C.a,{to:"/menu",name:"Menu",onClick:this.toggleMenuVisibility},"Menu"))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={itemCarbsDesired:0,idealWeight:"Pending Calculation"},a.addItemService=new j,a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.calculateWeight=a.calculateWeight.bind(Object(v.a)(Object(v.a)(a))),a.handleDelete=a.handleDelete.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleDelete",value:function(e){var t=this;e.preventDefault(),this.addItemService.updateMenuItemData(this.props.obj._id,!1,function(e){t.props.onDelete()})}},{key:"handleChange",value:function(e){e.preventDefault();var t=parseInt(e.target.value);this.setState({itemCarbsDesired:t})}},{key:"calculateWeight",value:function(){var e=this.props.obj.servingSize,t=this.props.obj.carbs,a=(e*this._newDesiredCarbs.value/t).toFixed(2);this.setState({idealWeight:"".concat(a,"g")}),this.props.onChange(this.state.itemCarbsDesired)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"menu-item",style:{background:function(e){switch(e){case"protein":return"rgba(255, 0, 0, .6)";case"fruit":return"rgba(255, 255, 0, .6)";case"vegetable":return"rgba(0, 128, 0, .6)";case"misc":default:return"rgba(48, 151, 245, .6)"}}(this.props.obj.tag)}},i.a.createElement("div",null,i.a.createElement("button",{style:{"margin-top":"1em"},className:"btn-small",onClick:this.handleDelete},"Remove from Menu")),i.a.createElement("h2",null,this.props.obj.tag,": ",this.props.obj.item),i.a.createElement("form",null,i.a.createElement("div",{className:"form-row"},i.a.createElement("label",null,"Item Carbs Desired:"),i.a.createElement("input",{type:"number",id:"desired-carbs",name:"item-desired-carbs",ref:function(t){return e._newDesiredCarbs=t},onChange:this.handleChange}))),i.a.createElement("div",null,i.a.createElement("button",{className:"btn-small",onClick:this.calculateWeight},"Calculate")),i.a.createElement("p",null,"Ideal Weight: ",this.state.idealWeight," ",this.state.measure))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={items:"",carbsDesired:0,totalItemCarbs:0,carbsRemaining:0},a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.handleChangeCarbsDesired=a.handleChangeCarbsDesired.bind(Object(v.a)(Object(v.a)(a))),a.handleDelete=a.handleDelete.bind(Object(v.a)(Object(v.a)(a))),a.clearMenu=a.clearMenu.bind(Object(v.a)(Object(v.a)(a))),a.addItemService=new j,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:4200/items/menu-items").then(function(t){e.setState({items:t.data})}).catch(function(e){console.log(e)})}},{key:"handleChangeCarbsDesired",value:function(e){e.preventDefault();var t=e.target.value;this.setState({carbsDesired:parseInt(t),carbsRemaining:parseInt(t)-this.state.totalItemCarbs})}},{key:"handleChange",value:function(e){var t=this.state.totalItemCarbs+e;this.setState({totalItemCarbs:t,carbsRemaining:this.state.carbsDesired-t})}},{key:"handleDelete",value:function(){var e=this;f.a.get("http://localhost:4200/items/menu-items").then(function(t){e.setState({items:t.data})}).catch(function(e){console.log(e)})}},{key:"clearMenu",value:function(e){var t=this;e.preventDefault(),this.addItemService.clearMenu(function(){t.props.history.push("/all-items")})}},{key:"tabRow",value:function(){var e=this;if(this.state.items instanceof Array)return this.state.items.map(function(t,a){return i.a.createElement(N,{obj:t,key:a,onChange:e.handleChange,onDelete:e.handleDelete})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"content-container"},i.a.createElement("h2",{className:"content-header"},"Menu"),i.a.createElement("button",{className:"btn-small",onClick:this.clearMenu},"Clear Menu"),i.a.createElement("div",{id:"total-carbs-desired-form"},"Total Carbs Desired:",i.a.createElement("input",{type:"number",id:"carbsDesired",name:"carbsDesired",onChange:this.handleChangeCarbsDesired})),this.tabRow(),i.a.createElement("h3",{style:{"padding-bottom":"1em"}},"Total Carbs Remaining: ",this.state.carbsRemaining))}}]),t}(n.Component),z=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"contentbox-wrapper"},i.a.createElement(h.a,null,i.a.createElement("div",null,i.a.createElement("div",{id:"title-nav"},i.a.createElement("h1",null,"Carb Calculator"),i.a.createElement(D,null)),i.a.createElement("div",{className:"contentbox"},i.a.createElement(d.a,null,i.a.createElement(b.a,{exact:!0,path:"/",component:g}),i.a.createElement(b.a,{path:"/all-items",component:w}),i.a.createElement(b.a,{path:"/new-item",component:S}),i.a.createElement(b.a,{path:"/edit/>:id/",component:I}),i.a.createElement(b.a,{path:"/menu",component:M}))))))}}]),t}(n.Component),W=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"background"},i.a.createElement(z,null))}}]),t}(n.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(i.a.createElement(W,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");F?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):_(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):_(e)})}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.2ac6755b.chunk.js.map