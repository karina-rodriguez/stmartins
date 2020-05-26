// alert("Hello World");
// AFRAME.registerComponent('log', {
//   schema: {type: 'string'},

//   init: function () {
//     var stringToLog = this.data;
//     console.log(stringToLog);


//   }
// });
// var sceneEl = document.querySelector("a-assets");
// console.log(document.querySelector("a-assets"));
// var sceneEl = document.querySelector("a-scene");
// console.log(sceneEl.querySelector("#cityModel"));

// var sceneEl = document.querySelector('#cityModel');
// alert(sceneEl);

// console.log(sceneEl);

// var objectCity = sceneEl.querySelector('#cityModel')
// objectCity.object3D.rotation.y += Math.PI;

function addAssets() {
    let assetsD1 = document.querySelector("#the3Dmodel1");
    let assetsD2 = document.querySelector("#the3Dmodel2");
    let assetsD3 = document.querySelector("#the3Dmodel3");
    let assetsD4 = document.querySelector("#the3Dmodel4");
	console.log(assetsD1.getAttribute("rotation"));

	//rotate so that we can see  all faces
	 setInterval(function(){ 
	 		// assetsD.object3D.translation.z = assetsD.object3D.translation.z-2;
	 		assetsD1.object3D.rotation.y += Math.PI/20; 
	 		assetsD2.object3D.rotation.y += Math.PI/20; 
	 		assetsD3.object3D.rotation.y += Math.PI/20; 
	 		assetsD4.object3D.rotation.y += Math.PI/20; 
	 	}, 800);

	

}
addAssets();
