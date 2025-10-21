// Scene data with ALL products
const sceneConfigs = [
  {
    id: 1,
    name: "Cosmetics",
    products: [
      { 
        x: -8, y: 6, 
        imageWidth: 500,
        imageHeight: 1000,
        scale: 1.2,
        imageUrl: 'images/cosmetics/bathoil.png',
        maskUrl: 'images/cosmetics/bathoilmask.png'
      },
      { 
        x: 0, y: 3, 
        imageWidth: 600,
        imageHeight: 1000,
        scale: 1.5,
        imageUrl: 'images/cosmetics/collagenshampoo.png',
        maskUrl: 'images/cosmetics/collagenshampoomask.png'
      },
      { 
        x: -5, y: 1, 
        imageWidth: 800,
        imageHeight: 700,
        scale: 1.3,
        imageUrl: 'images/cosmetics/cuticle.png',
        maskUrl: 'images/cosmetics/cuticlemask.png'
      },
      { 
        x: -3, y: -1, 
        imageWidth: 600,
        imageHeight: 500,
        scale: 1.2,
        imageUrl: 'images/cosmetics/deo.png',
        maskUrl: 'images/cosmetics/deomask.png'
      },
      { 
        x: 3, y: -2, 
        imageWidth: 800,
        imageHeight: 600,
        scale: 1.4,
        imageUrl: 'images/cosmetics/exfoliate.png',
        maskUrl: 'images/cosmetics/exfoliatemask.png'
      },
      { 
        x: -7, y: 4, 
        imageWidth: 400,
        imageHeight: 800,
        scale: 1.1,
        imageUrl: 'images/cosmetics/foundation.png',
        maskUrl: 'images/cosmetics/foundationmask.png'
      },
      { 
        x: -8, y: -2, 
        imageWidth: 800,
        imageHeight: 1000,
        scale: 1.3,
        imageUrl: 'images/cosmetics/hairgel.png',
        maskUrl: 'images/cosmetics/hairgelmask.png'
      },
      { 
        x: 8, y: 1, 
        imageWidth: 400,
        imageHeight: 650,
        scale: 1.2,
        imageUrl: 'images/cosmetics/handsani.png',
        maskUrl: 'images/cosmetics/handsanimask.png'
      },
      { 
        x: -3, y: 3, 
        imageWidth: 300,
        imageHeight: 900,
        scale: 1.1,
        imageUrl: 'images/cosmetics/lipstick.png',
        maskUrl: 'images/cosmetics/lipstickmask.png'
      },
      { 
        x: 3, y: 6, 
        imageWidth: 900,
        imageHeight: 1000,
        scale: 1.4,
        imageUrl: 'images/cosmetics/liquidsoap.png',
        maskUrl: 'images/cosmetics/liquidsoapmask.png'
      },
      { 
        x: 6, y: 6, 
        imageWidth: 300,
        imageHeight: 600,
        scale: 1.1,
        imageUrl: 'images/cosmetics/mascara.png',
        maskUrl: 'images/cosmetics/mascaramask.png'
      },
      { 
        x: -2, y: 7, 
        imageWidth: 700,
        imageHeight: 1000,
        scale: 1.3,
        imageUrl: 'images/cosmetics/moist.png',
        maskUrl: 'images/cosmetics/moistmask.png'
      },
      { 
        x: -5, y: 3, 
        imageWidth: 400,
        imageHeight: 550,
        scale: 1.2,
        imageUrl: 'images/cosmetics/nailpolish.png',
        maskUrl: 'images/cosmetics/nailpolishmask.png'
      },
      { 
        x: 3, y: 1.5, 
        imageWidth: 600,
        imageHeight: 800,
        scale: 1.3,
        imageUrl: 'images/cosmetics/perfume.png',
        maskUrl: 'images/cosmetics/perfumemask.png'
      },
      { 
        x: 0, y: -5, 
        imageWidth: 600,
        imageHeight: 1400,
        scale: 1.3,
        imageUrl: 'images/cosmetics/shavingcream.png',
        maskUrl: 'images/cosmetics/shavingcreammask.png'
      },
      { 
        x: -7, y: -6, 
        imageWidth: 400,
        imageHeight: 800,
        scale: 1.2,
        imageUrl: 'images/cosmetics/soap.png',
        maskUrl: 'images/cosmetics/soapmask.png'
      },
    ]
  },{
    id: 2,
    name: "Construction",
    products: [
      { 
        x: -8, y: 6, 
        imageWidth: 500,
        imageHeight: 1000,
        scale: 8,
        imageUrl: 'images/construction/asphalt.png',
        maskUrl: 'images/construction/asphaltmask.png'
      },
      { 
        x: 0, y: 3, 
        imageWidth: 1100,
        imageHeight: 1000,
        scale: 6,
        imageUrl: 'images/construction/asphaltshingle.png',
        maskUrl: 'images/construction/asphaltshinglemask.png'
      },
      { 
        x: -5, y: 1, 
        imageWidth: 800,
        imageHeight: 700,
        scale: 5,
        imageUrl: 'images/construction/brick.png',
        maskUrl: 'images/construction/brickmask.png'
      },
      { 
        x: -3, y: -1, 
        imageWidth: 600,
        imageHeight: 500,
        scale: 9,
        imageUrl: 'images/construction/caulk.png',
        maskUrl: 'images/construction/caulkmask.png'
      },
      { 
        x: 3, y: -2, 
        imageWidth: 800,
        imageHeight: 800,
        scale: 6,
        imageUrl: 'images/construction/ceramictile.png',
        maskUrl: 'images/construction/ceramictilemask.png'
      },
      { 
        x: 7, y: 4, 
        imageWidth: 800,
        imageHeight: 600,
        scale: 5,
        imageUrl: 'images/construction/cmu.png',
        maskUrl: 'images/construction/cmumask.png'
      },
      { 
        x: -8, y: -2, 
        imageWidth: 800,
        imageHeight: 1000,
        scale: 7,
        imageUrl: 'images/construction/concretemix.png',
        maskUrl: 'images/construction/concretemixmask.png'
      },
      { 
        x: -9, y: -8.5, 
        imageWidth: 700,
        imageHeight: 600,
        scale: 7,
        imageUrl: 'images/construction/insulation.png',
        maskUrl: 'images/construction/insulationmask.png'
      },
      { 
        x: 3, y: 7, 
        imageWidth: 700,
        imageHeight: 900,
        scale: 7,
        imageUrl: 'images/construction/countertoplaminate.png',
        maskUrl: 'images/construction/countertoplaminatemask.png'
      },
      { 
        x: 9, y: -8, 
        imageWidth: 1000,
        imageHeight: 1000,
        scale: 8,
        imageUrl: 'images/construction/drywall.png',
        maskUrl: 'images/construction/drywallmask.png'
      },
      { 
        x: 6, y: 6, 
        imageWidth: 1000,
        imageHeight: 600,
        scale: 8,
        imageUrl: 'images/construction/floorwax.png',
        maskUrl: 'images/construction/floorwaxmask.png'
      },
      { 
        x: -9, y: 7, 
        imageWidth: 700,
        imageHeight: 600,
        scale: 6,
        imageUrl: 'images/construction/grout.png',
        maskUrl: 'images/construction/groutmask.png'
      },
      { 
        x: -1, y: -7.5, 
        imageWidth: 400,
        imageHeight: 550,
        scale: 8,
        imageUrl: 'images/construction/linoleum.png',
        maskUrl: 'images/construction/linoleummask.png'
      },
      { 
        x: 0, y: 8, 
        imageWidth: 600,
        imageHeight: 600,
        scale: 7,
        imageUrl: 'images/construction/porcelainfixture.png',
        maskUrl: 'images/construction/porcelainfixturemask.png'
      },
      { 
        x: 0, y: -5, 
        imageWidth: 600,
        imageHeight: 650,
        scale: 4,
        imageUrl: 'images/construction/sandpaperbacking.png',
        maskUrl: 'images/construction/sandpaperbackingmask.png'
      },
      { 
        x: -7, y: -6, 
        imageWidth: 700,
        imageHeight: 400,
        scale: 7,
        imageUrl: 'images/construction/tarpaper.png',
        maskUrl: 'images/construction/tarpapermask.png'
      },
      { 
        x: 7, y: -2, 
        imageWidth: 700,
        imageHeight: 400,
        scale: 7,
        imageUrl: 'images/construction/waterproofmembrane.png',
        maskUrl: 'images/construction/waterproofmembranemask.png'
      },
    ]
  },
  {
    id: 3,
    name: "Agriculture",
    products: [
      { 
        x: -8, y: 6, 
        imageWidth: 500,
        imageHeight: 1000,
        scale: 1.2,
        imageUrl: 'images/agriculture/balingtwine.png',
        maskUrl: 'images/agriculture/balingtwinemask.png'
      },
      { 
        x: 0, y: 3, 
        imageWidth: 600,
        imageHeight: 1000,
        scale: 1.5,
        imageUrl: 'images/agriculture/bloodmealpoultryfeed.png',
        maskUrl: 'images/agriculture/bloodmealpoultryfeedmask.png'
      },
      { 
        x: -5, y: 1, 
        imageWidth: 800,
        imageHeight: 700,
        scale: 1.3,
        imageUrl: 'images/agriculture/greenhouseglazing.png',
        maskUrl: 'images/agriculture/greenhouseglazingmask.png'
      },
      { 
        x: -3, y: -1, 
        imageWidth: 600,
        imageHeight: 500,
        scale: 1.2,
        imageUrl: 'images/agriculture/herbicide.png',
        maskUrl: 'images/agriculture/herbicidemask.png'
      },
      { 
        x: 3, y: -2, 
        imageWidth: 800,
        imageHeight: 600,
        scale: 1.4,
        imageUrl: 'images/agriculture/hydroponicsgrowingmediabinder.png',
        maskUrl: 'images/agriculture/hydroponicsgrowingmediabindermask.png'
      },
      { 
        x: -7, y: 4, 
        imageWidth: 400,
        imageHeight: 800,
        scale: 1.1,
        imageUrl: 'images/agriculture/irrigationdriptape.png',
        maskUrl: 'images/agriculture/irrigationdriptapemask.png'
      },
      { 
        x: -8, y: -2, 
        imageWidth: 800,
        imageHeight: 1000,
        scale: 1.3,
        imageUrl: 'images/agriculture/minerallick.png',
        maskUrl: 'images/agriculture/minerallickmask.png'
      },
      { 
        x: 8, y: 1, 
        imageWidth: 400,
        imageHeight: 650,
        scale: 1.2,
        imageUrl: 'images/agriculture/mulchfilm.png',
        maskUrl: 'images/agriculture/mulchfilmmask.png'
      },
      { 
        x: -3, y: 3, 
        imageWidth: 300,
        imageHeight: 900,
        scale: 1.1,
        imageUrl: 'images/agriculture/organicbonemealfertilizer.png',
        maskUrl: 'images/agriculture/organicbonemealfertilizermask.png'
      },
      { 
        x: 3, y: 6, 
        imageWidth: 900,
        imageHeight: 1000,
        scale: 1.4,
        imageUrl: 'images/agriculture/seedcoating.png',
        maskUrl: 'images/agriculture/seedcoatingmask.png'
      },
      { 
        x: 6, y: 6, 
        imageWidth: 300,
        imageHeight: 600,
        scale: 1.1,
        imageUrl: 'images/agriculture/treeguard.png',
        maskUrl: 'images/agriculture/treeguardmask.png'
      },
      { 
        x: -2, y: 7, 
        imageWidth: 700,
        imageHeight: 1000,
        scale: 1.3,
        imageUrl: 'images/agriculture/treewound.png',
        maskUrl: 'images/agriculture/treewoundmask.png'
      },
    ]
  }

];

// State management
let scene, camera, renderer, ballMesh, ballBody;
let currentSceneIndex = 0;
let scrollLocked = true;
let ballTouchedBottom = false;
let lastScrollTime = 0;
const SCROLL_COOLDOWN = 500;
const GROUND_Y = -10;

function initScene() {
  const container = document.getElementById('canvas-container');
  const width = container.clientWidth;
  const height = container.clientHeight;

  // Scene setup
  scene = new THREE.Scene();
  scene.background = null;

  // Camera - use container dimensions
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 15;

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0); // transparent background
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);
  
  // Add event listeners
renderer.domElement.addEventListener('mousedown', onMouseDown);
renderer.domElement.addEventListener('mousemove', onMouseMove);
renderer.domElement.addEventListener('mouseup', onMouseUp);
renderer.domElement.addEventListener('mouseleave', onMouseUp);

  // Lighting
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 10, 10);
  light.castShadow = true;
  scene.add(light);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // Initialize UI
  initProgressMap();

  // Load first scene
  loadScene(0);

  // Start animation loop
  animate();

  // Handle window resize
  window.addEventListener('resize', handleResize);
}

function initProgressMap() {
  const progressMap = document.getElementById('progress-map');
  progressMap.innerHTML = '';
  
  for (let i = 0; i < sceneConfigs.length; i++) {
    const dot = document.createElement('div');
    dot.className = 'scene-dot';
    dot.dataset.scene = i;
    dot.addEventListener('click', () => jumpToScene(i));
    progressMap.appendChild(dot);
  }

  updateProgressMap(0);
}

function updateProgressMap(index) {
  document.querySelectorAll('.scene-dot').forEach((dot, i) => {
    dot.classList.remove('active', 'visited');
    if (i === index) {
      dot.classList.add('active');
    } else if (i < index) {
      dot.classList.add('visited');
    }
  });

  document.getElementById('current-scene').textContent = index + 1;
}

function loadScene(index) {
  console.log('loadScene called with index:', index, 'at', Date.now());
  console.trace(); 
  if (index < 0 || index >= sceneConfigs.length) return;

  currentSceneIndex = index;
  ballTouchedBottom = false;
  scrollLocked = true;
  productMeshes = [];


  // Clear scene (keep lights)
  scene.children = scene.children.filter(child => child instanceof THREE.Light);

  const sceneConfig = sceneConfigs[index];

  // Create ball
  const ballRadius = 0.5;
  const ballGeometry = new THREE.SphereGeometry(ballRadius, 32, 32);
  const ballMaterial = new THREE.MeshStandardMaterial({
    color: 0xff6b35,
    metalness: 0.6,
    roughness: 0.4,
  });
  ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
  ballMesh.castShadow = true;
  scene.add(ballMesh);

  ballBody = { x: 0, y: 15, vx: 0, vy: 0, radius: ballRadius };

  // Load products
  const textureLoader = new THREE.TextureLoader();
  const productCollisionData = [];

  sceneConfig.products.forEach((product, idx) => {
    // Calculate actual w and h based on aspect ratio
    const aspectRatio = product.imageWidth / product.imageHeight;
    const baseSize = product.scale;

    let w, h;
    if (aspectRatio > 1) {
      w = baseSize * aspectRatio;
      h = baseSize;
    } else {
      w = baseSize;
      h = baseSize / aspectRatio;
    }

   // Load and display product image
textureLoader.load(product.imageUrl, (texture) => {
  const geometry = new THREE.PlaneGeometry(w, h);
  const material = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.5,
    side: THREE.DoubleSide
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(product.x, product.y, 0);
  mesh.userData.isDragging = false;
  mesh.userData.collisionDataIndex = idx; // store index
  scene.add(mesh);
  productMeshes.push(mesh); // track it
});

    // Load collision mask
    textureLoader.load(product.maskUrl, (maskTexture) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        productCollisionData[idx] = {
          x: product.x,
          y: product.y,
          w: w,
          h: h,
          pixelData: imageData.data,
          width: canvas.width,
          height: canvas.height,
        };
      };
      img.src = product.maskUrl;
    });
  });

  window.productCollisionData = productCollisionData;

  updateProgressMap(index);
  updateProductInfo(`Scene ${index + 1}: ${sceneConfig.name}`);
  updateScrollHint();
}

function jumpToScene(index) {
  if (index <= currentSceneIndex) {
    loadScene(index);
  }
}

function setupScrollListener() {
  window.addEventListener('wheel', (e) => {
    if (scrollLocked) {
      e.preventDefault();
      return;
    }

    const now = Date.now();
    if (now - lastScrollTime < SCROLL_COOLDOWN) return;

    lastScrollTime = now;
    if (currentSceneIndex < sceneConfigs.length - 1) {
      loadScene(currentSceneIndex + 1);
    }
  }, { passive: false });
}

function updateProductInfo(text) {
  const el = document.getElementById('product-text');
  if (el) el.textContent = text;
}

function updateScrollHint() {
  const hint = document.getElementById('scroll-hint');
  if (!hint) return;

  if (currentSceneIndex >= sceneConfigs.length - 1) {
    hint.textContent = 'End of sequence';
    hint.classList.remove('locked', 'unlocked');
  } else if (scrollLocked) {
    hint.textContent = 'Scroll to continue';
    hint.classList.remove('unlocked');
    hint.classList.add('locked');
  } else {
    hint.textContent = '✓ Ready to scroll';
    hint.classList.remove('locked');
    hint.classList.add('unlocked');
  }
}

function animate() {
  requestAnimationFrame(animate);

  if (!ballBody) return;

  const gravity = 15;
  const friction = 0.99;

  ballBody.vy -= gravity * 0.016;
  ballBody.vx *= friction;
  ballBody.vy *= friction;

  ballBody.x += ballBody.vx * 0.016;
  ballBody.y += ballBody.vy * 0.016;


  // Collision detection
  if (window.productCollisionData) {
    window.productCollisionData.forEach((collisionData) => {
      if (collisionData && checkSilhouetteCollision(ballBody.x, ballBody.y, ballBody.radius, collisionData)) {
        const bounced = bounceOffSilhouette(ballBody.x, ballBody.y, ballBody.radius, collisionData, ballBody.vx, ballBody.vy);
        ballBody.vx = bounced.vx;
        ballBody.vy = bounced.vy;
        ballBody.x += ballBody.vx * 0.016;
        ballBody.y += ballBody.vy * 0.016;
      }
    });
  }

// Ground collision
if (ballBody.y - ballBody.radius < GROUND_Y) {
  ballBody.y = GROUND_Y + ballBody.radius;
  ballBody.vy *= -0.7;
  ballBody.vx *= 0.95;
  
  // Check if ball has settled (low velocity = resting on ground)
  if (Math.abs(ballBody.vy) < 1 && Math.abs(ballBody.vx) < 1 && !ballTouchedBottom) {
    console.log('Ball has settled! Loading next scene...');
    ballTouchedBottom = true;
    
    // Load next scene after a short delay
    setTimeout(() => {
      if (currentSceneIndex < sceneConfigs.length - 1) {
        loadScene(currentSceneIndex + 1);
      }
    }, 500); // 500ms delay, adjust as needed
  }
}

  ballMesh.position.set(ballBody.x, ballBody.y, 0);
  renderer.render(scene, camera);
}

function checkSilhouetteCollision(ballX, ballY, ballRadius, collisionData) {
  const { x, y, w, h, pixelData, width, height } = collisionData;

  const localX = ballX - x;
  const localY = ballY - y;

  if (Math.abs(localX) > w / 2 || Math.abs(localY) > h / 2) {
    return false;
  }

  const pixelX = Math.floor(((localX + w / 2) / w) * width);
  const pixelY = Math.floor(((h / 2 - localY) / h) * height);

  if (pixelX < 0 || pixelX >= width || pixelY < 0 || pixelY >= height) {
    return false;
  }

  const pixelIndex = (pixelY * width + pixelX) * 4 + 3;
  const alpha = pixelData[pixelIndex];

  return alpha > 128;
}

function bounceOffSilhouette(ballX, ballY, ballRadius, collisionData, vx, vy) {
  const { x, y, w, h, pixelData, width, height } = collisionData;

  let normalX = 0;
  let normalY = 0;

  const samples = 16;
  for (let i = 0; i < samples; i++) {
    const angle = (i / samples) * Math.PI * 2;
    const sampleX = ballX + Math.cos(angle) * ballRadius;
    const sampleY = ballY + Math.sin(angle) * ballRadius;

    const localX = sampleX - x;
    const localY = sampleY - y;

    if (Math.abs(localX) > w / 2 || Math.abs(localY) > h / 2) continue;

    const pixelX = Math.floor(((localX + w / 2) / w) * width);
    const pixelY = Math.floor(((h / 2 - localY) / h) * height);

    if (pixelX < 0 || pixelX >= width || pixelY < 0 || pixelY >= height) continue;

    const pixelIndex = (pixelY * width + pixelX) * 4 + 3;
    const alpha = pixelData[pixelIndex];

    if (alpha > 128) {
      normalX += Math.cos(angle);
      normalY += Math.sin(angle);
    }
  }

  const normLen = Math.sqrt(normalX * normalX + normalY * normalY);
  if (normLen < 0.01) return { vx, vy };

  normalX /= normLen;
  normalY /= normLen;

  const dotProduct = vx * normalX + vy * normalY;

  return {
    vx: (vx - 2 * dotProduct * normalX) * 0.8,
    vy: (vy - 2 * dotProduct * normalY) * 0.8,
  };
}

function handleResize() {
  const container = document.getElementById('canvas-container');
  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', initScene);

// Raycasting for product selection
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let selectedProduct = null;
let productMeshes = []; // track all product meshes

function onMouseDown(event) {
  // Convert mouse position to normalized device coordinates
  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  // Raycast to find intersected objects
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(productMeshes);

  if (intersects.length > 0) {
    selectedProduct = intersects[0].object;
    selectedProduct.userData.isDragging = true;
  }
}

function onMouseMove(event) {
  if (!selectedProduct || !selectedProduct.userData.isDragging) return;

  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  // Create a plane at z=0 to raycast onto
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const intersection = new THREE.Vector3();
  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.intersectPlane(plane, intersection);

  selectedProduct.position.x = intersection.x;
  selectedProduct.position.y = intersection.y;
}

function onMouseUp(event) {
  if (selectedProduct) {
    selectedProduct.userData.isDragging = false;
    
    // Update collision data position
    if (window.productCollisionData && selectedProduct.userData.collisionDataIndex !== undefined) {
      const collisionData = window.productCollisionData[selectedProduct.userData.collisionDataIndex];
      if (collisionData) {
        collisionData.x = selectedProduct.position.x;
        collisionData.y = selectedProduct.position.y;
      }
    }
    
    selectedProduct = null;
  }
}

