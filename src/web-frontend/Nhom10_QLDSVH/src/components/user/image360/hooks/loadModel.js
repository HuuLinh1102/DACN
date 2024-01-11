import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
export default function Model() {

    const loadModel = (scene, path, name) => {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load(path, (model) => {
            console.log(`${name} - Loaded successfully!`);
            scene.add(model.scene);
        }, (progress) => {
            console.log(`Loading ${name} : ${progress.loaded} / ${progress.total}`);
        }, (err) => {
            console.log(`Error loading ${name} : ${err}`);
        });
    };

    const ModelTypeWriter = (scene) => {
        loadModel(scene, '../models/typewriter/scene.gltf', 'Type Writer 1966s - Máy đánh chữ');
      };

      const BinhSuModel = (scene) => {
        loadModel(scene, '../models/binh_su/Binhsu.gltf', 'Machine Gun - model Súng máy');
      };

      const BuddhaWoodModel = (scene) => {
        loadModel(scene, '../models/buddha_wood/buddha_wood.gltf', 'Buddha wood - Model Tượng Phật gỗ');
      };

      const PistolModel = (scene) => {
        loadModel(scene, '../models/gun_pistol/scene.gltf', 'Pistol Model - Model Súng lục');
      };

      const PotteryModel = (scene) => {
        loadModel(scene, '../models/greek_pottery/scene.gltf', 'Greek Pottery - Model Gốm cỗ Hy Lạp');
      };

      const JarronModel = (scene) => {
        loadModel(scene, '../models/jarron_ibero/scene.gltf', 'Model lọ cắm hoa');
      };

      const RadioModel = (scene) => {
        loadModel(scene, '../models/radio/scene.gltf', 'Model Radio cổ');
      };

    return {ModelTypeWriter, BinhSuModel, BuddhaWoodModel, PistolModel, PotteryModel, JarronModel, RadioModel}
}
