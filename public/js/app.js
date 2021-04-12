//Proměnné pro setup

let container;
let camera;
let renderer;
let scene;
let tree;

function init(){
    container = document.querySelector('.scene');

    //Vytvoř scénu
    scene = new THREE.Scene();

    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 1;
    const far = 1000;

    //Camera setup a taky nastavneí osvětlení
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(140, 180, 500);
 
    const ambient = new THREE.AmbientLight(0x404040, 5);
    scene.add(ambient);


    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(200,0,0);
    scene.add(light);
    
    //Renderer
    renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    //Načíst model
    let loader = new THREE.GLTFLoader();
    loader.load('./../3d/scene.gltf', function(gltf){
        scene.add(gltf.scene);
        tree = gltf.scene.children[0];
        animate();
    });
}

function animate(){
    requestAnimationFrame(animate);
    tree.rotation.z += 0.002;
    tree.rotation.x = 11.5;

    renderer.render(scene, camera);
}

init();

function onWindowResize(){
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);