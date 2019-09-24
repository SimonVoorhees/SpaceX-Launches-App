(window.webpackJsonprocketapp=window.webpackJsonprocketapp||[]).push([[0],{27:function(e,t,a){e.exports=a(61)},32:function(e,t,a){},34:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(23),l=a.n(o),c=(a(32),a(26)),r=a(2),i=a(7),u=a(4),m=a(3),d=a(5),h=a(9),p=a.n(h),f=(a(34),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).startChange=function(e){a.setState({start:e.target.value})},a.endChange=function(e){a.setState({end:e.target.value})},a.render=function(){return s.a.createElement("form",{className:"dateInput"},s.a.createElement("label",{htmlFor:"startDate",className:"dateLabel"},"Start Date:"),s.a.createElement("input",{type:"date",id:"startDate",value:a.state.start,onChange:a.startChange,max:a.state.end}),s.a.createElement("label",{htmlFor:"endDate",className:"dateLabel"},"End Date:"),s.a.createElement("input",{type:"date",id:"endDate",value:a.state.end,onChange:a.endChange,min:a.state.start}),s.a.createElement("button",{onClick:function(e){e.preventDefault(),a.props.callBack(a.state.start,a.state.end)},className:"dateSubmit"},"Submit"))},a.state={start:"1979-09-19",end:p()().format("YYYY-MM-DD")},a.props.callBack(a.state.start,a.state.end),a}return Object(d.a)(t,e),t}(s.a.Component)),v=a(10),E=a.n(v),k=(a(51),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).showPayloads=function(){e.setState({clickBool:!e.state.clickBool})},e.state={clickBool:!1},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.payloads.map((function(e,t){return s.a.createElement("li",{key:"payload "+t},s.a.createElement("dl",{className:"payloadItem"},s.a.createElement("dt",{className:"payloadTitle"},"ID:")," ",s.a.createElement("dd",{className:"payloadDesc"},e.payload_id),s.a.createElement("dt",{className:"payloadTitle"},"Type:")," ",s.a.createElement("dd",{className:"payloadDesc"},e.payload_type),void 0!==e.nationality&&s.a.createElement(s.a.Fragment,null," ",s.a.createElement("dt",{className:"payloadTitle"},"Nationality:")," ",s.a.createElement("dd",{className:"payloadDesc"},e.nationality))))}));return s.a.createElement("div",{className:"payloadList"},s.a.createElement("h4",{className:"payloadHeader"},"Payloads:"),s.a.createElement("button",{onClick:this.showPayloads,className:"payloadButton"},!1===this.state.clickBool?s.a.createElement(s.a.Fragment,null,"Show Payloads"):s.a.createElement(s.a.Fragment,null,"Hide Payloads")),s.a.createElement("ol",null,!0===this.state.clickBool&&e))}}]),t}(s.a.Component)),b=(a(52),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).showImagesUpdate=function(){a.setState({showImages:!a.state.showImages})},a.state={showImages:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("img",{src:this.props.links.mission_patch,alt:"mission patch",className:"launchImg"}),this.props.links.flickr_images.length>0&&s.a.createElement("button",{className:"showImagesButton",onClick:this.showImagesUpdate},"Show Images"),this.state.showImages&&this.props.links.flickr_images.map((function(e,t){return s.a.createElement("img",{src:e,alt:"flickr "+t,className:"flickrImg",key:"flickr "+t})})))}}]),t}(s.a.Component)),g=a(11),y=a(24),B=a(25),N=(a(57),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={heartBool:e.heart,descBool:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){!0===e.heart?this.setState({heartBool:!0}):this.setState({heartBool:!1})}},{key:"render",value:function(){var e=this;return s.a.createElement("section",{className:"launch"},s.a.createElement(b,{links:this.props.links}),s.a.createElement("h2",{className:"launchTitle"},this.props.title),s.a.createElement("button",{className:"favoriteButton",onClick:function(t){t.preventDefault(),e.setState({heartBool:!e.state.heartBool}),e.props.favoriteCallBack(e.props.number)}},!0===this.state.heartBool?s.a.createElement(g.a,{icon:y.a}):s.a.createElement(g.a,{icon:B.a.faHeart})),s.a.createElement("h2",{className:"launchDate"},p()(this.props.date).format("MMMM Do YYYY, h:mm:ss a")),null!==this.props.desc&&s.a.createElement("button",{className:"descButton",onClick:function(){e.setState({descBool:!e.state.descBool})}},!1===this.state.descBool?s.a.createElement(s.a.Fragment,null,"Show Description"):s.a.createElement(s.a.Fragment,null,"Hide Description")),!0===this.state.descBool&&s.a.createElement("p",{className:"launchDesc"},this.props.desc),s.a.createElement(k,{payloads:this.props.payloads}))}}]),t}(s.a.Component)),O=(a(58),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){},a.UNSAFE_componentWillReceiveProps=function(e){var t=e.favorites;console.log(t),E.a.get("https://api.spacexdata.com/v3/launches/past").then((function(e){var n=t.map((function(t){return e.data[t-1]}));a.setState({launches:n.map((function(e,t){return s.a.createElement(N,{key:"Launch"+t,links:e.links,title:e.mission_name,date:e.launch_date_utc,desc:e.details,payloads:e.rocket.second_stage.payloads,number:e.flight_number,favoriteCallBack:a.props.favoriteCallBack,heart:!0})}))})})).catch((function(e){console.log("error "+e)}))},a.componentWillUnmount=function(){console.log("unmounted")},a.render=function(){return s.a.createElement(s.a.Fragment,null,a.state.launches.length>0&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",{className:"favTitle"},"Favorites:"),s.a.createElement("div",{className:"favorites"},a.state.launches)))},a.state={favorites:e.favorites,launches:[]},a}return Object(d.a)(t,e),t}(s.a.Component)),j=(a(59),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){},a.UNSAFE_componentWillReceiveProps=function(e){var t=e.start,n=e.end,o=(e.callback,e.favorites),l="start="+t+"&end="+n;E.a.get("https://api.spacexdata.com/v3/launches/past?"+l).then((function(e){console.log(o),a.setState({launches:e.data.map((function(e,t){return console.log(o.includes(e.flight_number)),s.a.createElement(N,{key:"Launch"+t,links:e.links,title:e.mission_name,date:e.launch_date_utc,desc:e.details,payloads:e.rocket.second_stage.payloads,number:e.flight_number,favoriteCallBack:a.props.favoriteCallBack,heart:o.includes(e.flight_number)})}))})})).catch((function(e){console.log("error "+e)}))},a.componentWillUnmount=function(){},a.render=function(){return s.a.createElement("div",{className:"launches"},a.state.launches)},a.state={launches:[]},a}return Object(d.a)(t,e),t}(s.a.Component)),C=(a(60),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).dateCallBack=function(t,a){t<a&&e.setState({startDate:t,endDate:a})},e.favoriteCallBack=function(t){for(var a=0;a<e.state.favorites.length;a++)if(e.state.favorites[a]===t)return void e.removeFavorite(a);e.addFavorite(t)},e.removeFavorite=function(t){var a=e.state.favorites;a.splice(t,1),e.setState({favorites:a}),console.log(e.state.favorites),e.render()},e.addFavorite=function(t){e.setState({favorites:[].concat(Object(c.a)(e.state.favorites),[t])})},e.render=function(){return s.a.createElement("div",{className:"app"},s.a.createElement("header",null,s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Audiowide|Notable|Roboto|Saira+Stencil+One|Turret+Road&display=swap",rel:"stylesheet"}),s.a.createElement("h1",{className:"headerTitle"},"Launches"),s.a.createElement(f,{callBack:e.dateCallBack})),s.a.createElement("main",null,s.a.createElement(O,{favorites:e.state.favorites,favoriteCallBack:e.favoriteCallBack}),s.a.createElement("h3",{className:"searchTitle"},"SpaceX launches from "+e.state.startDate+" to "+e.state.endDate),s.a.createElement(j,{start:e.state.startDate,end:e.state.endDate,favoriteCallBack:e.favoriteCallBack,favorites:e.state.favorites})))},e.state={startDate:"1979-09-19",endDate:"2019-09-19",favorites:[]},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){}}]),t}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.b7aada45.chunk.js.map