import { Document, NodeIO } from "@gltf-transform/core";
import {
  dedup,
  prune,
  resample,
  textureResize,
} from "@gltf-transform/functions";
// import convert  from '../node_modules/fbx2gltf';
// const convert= require('fbx2gltf')

async function mergeGlb(process_id) {
  // const metaSessionFolder = `./meta/output/${process_id}`;
  // await convert('src/ani.fbx', 'src/maaf.glb');
  // await convert('src/char.fbx', 'src/char.glb');

  const io = new NodeIO();
  const animationDocument = await io.read("src/animations/Pranav_GLB.glb");
  const avtarDocument = await io.read("src/animations/pranav_new.glb");
  const doc = new Document();
  await doc.merge(animationDocument).merge(avtarDocument);
  // await io.write(`test/merged.gltf`, doc);

  const skin = doc.getRoot().listSkins()[0];
  doc
    .getRoot()
    .listAnimations()
    .forEach((animation) => {
      const animationChannels = animation.listChannels();
      animationChannels.forEach((channel) => {
        const curTargetNode = channel.getTargetNode()?.getName();
        const newTargetNode = skin
          .listJoints()
          .find((node) => node.getName() === curTargetNode);

        if (newTargetNode) channel.setTargetNode(newTargetNode);
      });
    });

  await doc.transform(
    dedup(),
    resample(),
    prune(),
    textureResize({ size: [1024, 786] })
  );
  console.log(
    doc.getRoot().listBuffers().length,
    doc.getRoot().listAccessors().length
  );
  const buffer = doc.getRoot().listBuffers()[0];
  doc
    .getRoot()
    .listAccessors()
    .forEach((a) => a.setBuffer(buffer));
  doc
    .getRoot()
    .listBuffers()
    .forEach((b, index) => (index > 0 ? b.dispose() : null));
  await io.write(`src/animations/size.glb`, doc);
}

mergeGlb("1");
