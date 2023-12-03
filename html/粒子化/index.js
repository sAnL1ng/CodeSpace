let scene;
let camera;
let renderer;
let material;
let mouseX = 0;
let mouseY = 0;

function init() {
  // 创建透视相机
  camera = new THREE.PerspectiveCamera();
  camera.position.z = 500;

  // 创建场景，并设置雾效果
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000ff, 0.001);

  // 创建粒子的几何体
  const geometry = new THREE.BufferGeometry();

  var vertices = [];
  const size = 2000;

  // 随机生成大量粒子的坐标
  for (let i = 0; i < 20000; i++) {
    const x = (Math.random() * size + Math.random() * size) / 2 - size / 2;
    const y = (Math.random() * size + Math.random() * size) / 2 - size / 2;
    const z = (Math.random() * size + Math.random() * size) / 2 - size / 2;
    vertices.push(x, y, z);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  // 创建粒子的材质
  material = new THREE.PointsMaterial({
    size: 2,
    color: 0xffffff
  });

  // 使用几何体和材质创建粒子系统
  const particles = new THREE.Points(geometry, material);

  // 将粒子系统添加到场景中
  scene.add(particles);

  // 创建 WebGL 渲染器
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // 渲染场景并将结果添加到 DOM 中
  document.getElementById('container').appendChild(renderer.domElement);

  // 监听鼠标移动事件
  document.getElementById('container').addEventListener('pointermove', onPointermove);
}

// 初始化函数
init();

// 启动动画循环
animate();

function animate() {
  // 控制摄像头动起来
  requestAnimationFrame(animate);
  render();
}

function render() {
  // 控制相机位置和朝向
  camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
  camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02;
  camera.lookAt(scene.position);

  // 渲染场景
  renderer.render(scene, camera);

  // 使场景自旋
  scene.rotation.x += 0.001;
  scene.rotation.y += 0.002;
}

function onPointermove(event) {
  // 更新鼠标位置
  mouseX = event.clientX - (window.innerWidth / 2);
  mouseY = event.clientY - (window.innerHeight / 2);
}