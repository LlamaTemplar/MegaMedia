let sceneSize = 20;

let scene;
let canvas;
let camera, raycaster;
let flyControls, controls, canControl;
let mouse = new THREE.Vector2(), INTERSECTED;
let render;

let meshMatrix;
//let cube;
let posts = [];
let postPoints = [];
let postData = [];
let maxPosts = 70;
let isViewingPost = false;

let commentSprite;

let selectedPost, postSelectedMaterial;
let postIconMaterial;

function setup()
{
    scene = new THREE.Scene();
    clock = new THREE.Clock();
   
    renderer = new THREE.WebGLRenderer( {canvas: document.querySelector("canvas"), antialias: true });

    camera = new THREE.PerspectiveCamera( 70, 2, 1, 1000 );
    raycaster = new THREE.Raycaster();

    scene.fog = new THREE.FogExp2( 0x000000, 0.015 );

    flyControls = new THREE.FlyControls(camera, document.querySelector("canvas")); 
    flyControls.movementSpeed = 5;  
    flyControls.rollSpeed = Math.PI / 2;
    flyControls.autoForward = false; 
    flyControls.dragToLook = false; 
    
    //meshMatrix.scale.set(matrixBounds,matrixBounds,matrixBounds);
    createMaterials();
    loadModels();
    createPosts();

    camera.position.z = 10;

    renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );
    renderer.domElement.addEventListener( 'click', onDocumentClick, false );
    renderer.domElement.addEventListener('mouseover', onMouseOver, false);
    renderer.domElement.addEventListener('mouseleave', onMouseLeave, false);
    
}

function createMaterials()
{
    commentSprite = new THREE.TextureLoader().load( 'images/comment-bubble.png' );
    postIconMaterial = new THREE.SpriteMaterial({map: commentSprite, depthTest: false, visible: false});
    selectedPost = new THREE.Sprite(postIconMaterial);
    scene.add(selectedPost);

    postMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    postSelectedMaterial = new THREE.MeshBasicMaterial({color: 0xeb4034});   
}

function loadModels()
{
    var loader = new THREE.GLTFLoader();
        loader.load( '../models/matrixBounds.glb', function ( gltf ) {
            var obj = gltf.scene; //080808
            var material = new THREE.MeshBasicMaterial({color: 0x636363});
            var mesh = new THREE.Mesh(obj.children[0].geometry, material);
            meshMatrix = mesh;
            mesh.scale.set(sceneSize, sceneSize, sceneSize);
            scene.add(meshMatrix);
            //scene.add( gltf.scene );
        }, undefined, function ( error ) {
            console.error( error );
        } );
}

function createPosts()
{
    maxPosts = tweets.length;

    let geometry = new THREE.BoxGeometry(0);

    for(let i = 0; i < maxPosts; i++)
    {   
        /*
        Generate random point in a sphere
        https://karthikkaranth.me/blog/generating-random-points-in-a-sphere/ 
        */
        var u = Math.random();
        var v = Math.random();
        var theta = u * 2.0 * Math.PI;
        var phi = Math.acos(2.0 * v - 1.0);
        var r = Math.cbrt(Math.random()) * sceneSize;
        var sinTheta = Math.sin(theta);
        var cosTheta = Math.cos(theta);
        var sinPhi = Math.sin(phi);
        var cosPhi = Math.cos(phi);
        var x = r * sinPhi * cosTheta;
        var y = r * sinPhi * sinTheta;
        var z = r * cosPhi;
        

        
        let cube = new THREE.Mesh( geometry, postMaterial );
        cube.position.x = x;
        cube.position.y = y;
        cube.position.z = z;
        posts[i] = cube;
        scene.add( cube );

    }

}

var raycastHit = function(distance)
{
    raycaster.setFromCamera( mouse, camera );

    var intersects = raycaster.intersectObjects( scene.children );
    
    if ( intersects.length > 0 && intersects[0].distance <= distance ) {

        //intersects[0].object.material = postSelectedMaterial;
        return intersects[0].object;

    } else {
        return null;

    }
}

var animate = function () {
    
    resizeCanvasToDisplaySize();
    
    if(canControl)
    {
        var delta = clock.getDelta();
        flyControls.update(delta);
    }

    $(document).ready(function(){

        $("#closePost").off().click(closePost);      
    });
   
        
    renderer.render( scene, camera );
    requestAnimationFrame( animate );
};

function resizeCanvasToDisplaySize() {
    const canvas = renderer.domElement;
    // look up the size the canvas is being displayed
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
  
    // adjust displayBuffer size to match
    if (canvas.width !== width || canvas.height !== height) {
      // you must pass false here or three.js sadly fights the browser
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
  
      // update any render target sizes here
    }
}



function closePost()
{
    console.log("close");
    isViewingPost = false;
    $('#post').removeClass('visible');
    $('#post').addClass('invisible');
}

function onDocumentClick( event) {
    event.preventDefault();
    let hit = raycastHit(20);
    if(hit) 
    {
        
        let index = posts.indexOf(hit);
        hit.material = postSelectedMaterial;
        
        isViewingPost = true;
        $('#tweet').text(tweets[index].tweet);

        $('#post').removeClass('invisible');
        $('#post').addClass('visible');
        
    }
}

function onDocumentMouseMove( event ) {

    event.preventDefault();

    let hit = raycastHit(20);
    if(hit)
    {
        // this is only called when mouse is moving??   
        selectedPost.position.set(hit.position.x, hit.position.y, hit.position.z);
        selectedPost.material.visible = true;
        
    }
    else
    {
        selectedPost.material.visible = false;
    }

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

function onMouseOver(event)
{
    event.preventDefault();
    canControl = true;

    // how many times is this called??
    flyControls = new THREE.FlyControls(camera, renderer.domElement); 
    flyControls.movementSpeed = 5;  
    flyControls.rollSpeed = Math.PI / 2;
    flyControls.autoForward = false; 
    flyControls.dragToLook = true; 
    
}

function onMouseLeave(event)
{
    event.preventDefault();
    flyControls.dispose();
    canControl = false;
    
}


setup();
animate();