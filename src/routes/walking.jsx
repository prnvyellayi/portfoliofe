/* eslint-disable import/no-webpack-loader-syntax */
import {
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import * as THREE from "three";
import styles from "../css/cube.module.css";

import fragmentShader from "!!raw-loader!./fragmentShader.glsl";
import vertexShader from "!!raw-loader!./vertexShader.glsl";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const meshRef = useRef(null);
  const cameraRef = useRef(null);
  const orbitRef = useRef(null);
  const points = useRef();
  const navigate = useNavigate();

  const [cardStyle, setCardStyle] = useState({
    display: "none",
    head: "",
    body: "",
    top: "",
    left: "",
    onClick: "/",
  });

  const [scrollValue, setScrollValue] = useState(0);

  // const playAudio = () => {
  //   const audiEle = document.getElementById("intro_song");
  //   audiEle.play();
  // };

  const handleScroll = async () => {
    // pauseAudio();
    const myLoop = () => {
      if (meshRef.current && getCardDetails(meshRef.current.rotation.y))
        setCardDiv();
      
      cameraRef.current.fov += 0.1958;
      orbitRef.current.target.y -= 0.0048;
      cameraRef.current.updateProjectionMatrix();
      meshRef.current.rotation.y = 0.16 * (cameraRef.current.fov - 10);
      points.current.rotation.y = 0.16 * (cameraRef.current.fov - 10);

      setTimeout(() => {
        if(meshRef.current.rotation.y < 6.6) {
          myLoop();
        }
      },10);
    };

    await myLoop();

    setScrollValue(211);

    // const audioSpan = document.getElementById("audioSpan");
    // audioSpan.style.display = "none";
    document.body.style.overflow = "scroll";

    window.scrollTo(0, document.body.scrollHeight);
  };

  // const pauseAudio = () => {
  //   const audiEle = document.getElementById("intro_song");
  //   audiEle.pause();
  // };

  const setCardDiv = () => {
    const card = document.getElementById("about-card");
    if (cardStyle.head !== "") {
      card.style.top = cardStyle.top;
      card.style.left = cardStyle.left;
      card.style.right = cardStyle.right;
      card.style.padding = "16px";

      card.innerHTML = `
        <span class="${styles.cardHead}">${cardStyle.head.toUpperCase()}</span>
        <span class="${styles.cardBody}">${cardStyle.body}</span>`;
    } else {
      card.innerHTML = ``;
      card.style.padding = "0px";
    }
  };

  const scrollAni = (value) => {
    const card = document.getElementById("about-card");
    if (value < 0.25) {
      card.style.opacity = 5 * value;
    } else if (
      value >= 0.75 &&
      cardStyle.head !== "Wanna ask me some questions?"
    ) {
      card.style.opacity = 5 * (1 - value);
    }
  };

  const getCardDetails = (scroll) => {
    if (scroll > 0.5 && scroll <= 2) {
      setCardStyle({
        display: "",
        head: "Explore My Career Chronicles",
        body: "Embark on a voyage through projects, innovations, and milestones!",
        top: "45%",
        left: "5%",
        right: "",
        onClick: () => navigate("/experience"),
      });
      scrollAni((scroll - 0.5) / 1.5);
    } else if (scroll > 2 && scroll <= 3.5) {
      setCardStyle({
        display: "",
        head: "Dive into My Skill Universe",
        body: "Explore a galaxy of talents, from coding constellations to design nebulae!",
        top: "50%",
        left: "",
        right: "5%",
        onClick: () => navigate("/skills"),
      });
      scrollAni((scroll - 2) / 1.5);
    } else if (scroll > 3.5 && scroll < 5) {
      setCardStyle({
        display: "",
        head: "Know more about me",
        body: "Discover the person beyond the projects, passions, and pursuits!",
        top: "60%",
        left: "5%",
        right: "",
        onClick: () => navigate("/about"),
      });
      scrollAni((scroll - 3.5) / 1.5);
    } else if (scroll > 5) {
      setCardStyle({
        display: "",
        head: "Wanna ask me some questions?",
        body: "Scroll to bottom and talk to my virtual self ",
        top: "65%",
        left: "",
        right: "5%",
        onClick: handleScroll,
      });
      scrollAni((scroll - 5) / 1.5);
    } else {
      setCardStyle({
        display: "none",
        head: "",
        body: "",
        top: "",
        left: "",
        right: "",
      });
    }
    return true;
  };

  const scrollFunction = (event) => {
    console.log(scrollValue);
    if (meshRef.current && getCardDetails(meshRef.current.rotation.y))
      setCardDiv();

    if (
      event.deltaY < 0 &&
      meshRef.current.rotation.y >= 6.6 &&
      document.getElementById("character-canvas").getBoundingClientRect()
        .top === 0
    ) {
      document.body.style.overflow = "hidden";
      // const audioSpan = document.getElementById("audioSpan");
      // audioSpan.style.display = "block";
      setScrollValue(scrollValue - 1);
      cameraRef.current.fov -= 0.1958;
      orbitRef.current.target.y += 0.0048;
      cameraRef.current.updateProjectionMatrix();
      meshRef.current.rotation.y = 0.16 * (cameraRef.current.fov - 10);
      points.current.rotation.y = 0.16 * (cameraRef.current.fov - 10);
      return;
    }

    if (meshRef.current.rotation.y >= 6.6) {
      // const audioSpan = document.getElementById("audioSpan");
      // audioSpan.style.display = "none";
      document.body.style.overflow = "scroll";
      return;
    }

    if (event.deltaY >= 0) {
      setScrollValue(scrollValue + 1);
      cameraRef.current.fov += 0.1958;
      orbitRef.current.target.y -= 0.0048;
      cameraRef.current.updateProjectionMatrix();
      meshRef.current.rotation.y = 0.16 * (cameraRef.current.fov - 10);
      points.current.rotation.y = 0.16 * (cameraRef.current.fov - 10);
    } else if (event.deltaY < 0 && scrollValue > 0) {
      setScrollValue(scrollValue - 1);
      cameraRef.current.fov -= 0.1958;
      orbitRef.current.target.y += 0.0048;
      cameraRef.current.updateProjectionMatrix();
      meshRef.current.rotation.y = 0.16 * (cameraRef.current.fov - 10);
      points.current.rotation.y = 0.16 * (cameraRef.current.fov - 10);
    }

    // meshRef.current.rotation.z = 0;
  };

  // const mouseMove = (e) => {
  //   const audioSpan = document.getElementById("audioSpan");
  //   audioSpan.style.top = e.clientY + "px";
  //   audioSpan.style.left = e.clientX + "px";
  // };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    // pauseAudio();

    const canvas = document.getElementById("character-canvas");

    // canvas.addEventListener("mousemove", mouseMove);
    // canvas.addEventListener("click", () => {
    //   const audioSpan = document.getElementById("audioSpan");
    //   audioSpan.style.display = "none";
    // });
    // canvas.addEventListener("click", playAudio);

    return () => {
      // canvas.removeEventListener("click", playAudio);
      // canvas.removeEventListener("mousemove", mouseMove);
      // canvas.removeEventListener("click", () => {
      //   const audioSpan = document.getElementById("audioSpan");
      //   if (audioSpan) audioSpan.style.display = "none";
      // });
    };
  }, []);

  return (
    <div
      id="character-canvas"
      style={{
        height: "100vh",
        width: "100vw",
        top: 0,
        left: 0,
        zIndex: 10,
        display: "fixed",
      }}
      onWheel={scrollFunction}
    >
      {/* <audio
        id="intro_song"
        src="/intro.mp3"
        autoPlay={true}
        loop
        style={{ display: "none" }}
      /> */}
      <span className={styles.bgspan}>PRANAV YELLAYI</span>
      {/* <span id="audioSpan" className={styles.audioPlayer}>
        Click anywhere to enable sound
      </span> */}
      <span
        onClick={cardStyle.onClick}
        id="about-card"
        className={styles.cardDiv}
        style={{ display: cardStyle.display }}
      ></span>
      <span className={styles.scrollDown}>
        Scroll down{" "}
        <span>
          <MdOutlineKeyboardDoubleArrowDown size={22} />
        </span>
      </span>
      <Canvas shadows="percentage">
        <OrbitControls
          ref={orbitRef}
          enableRotate={false}
          enableZoom={false}
          target={[0, 2, 0]}
        />
        <ambientLight intensity={2} />
        <directionalLight position={[-1, 0, 0]} intensity={3} />
        <Character meshRef={meshRef} />
        <CustomGeometryParticles count={200} points={points} />
        {/* <CustomGeometryParticles count={500} /> */}
        <PerspectiveCamera
          makeDefault
          fov={10}
          aspect={1.77}
          position={[0.2, 0, 3]}
          ref={cameraRef}
        />
      </Canvas>
    </div>
  );
}

function Character({ meshRef }) {
  const { scene } = useGLTF("/pranav_new.glb");

  const { animations } = useGLTF("/Pranav_GLB2.glb");

  const { actions, names } = useAnimations(animations, meshRef);

  useEffect(() => {
    if (actions && names) {
      actions[names[0]].play();
    }
  }, [actions, names]);

  return (
    <primitive
      ref={meshRef}
      object={scene}
      rotation={[0.5, 0, 0]}
      // children-0-castShadow
    >
      <MeshReflectorMaterial />
    </primitive>
  );
}

const CustomGeometryParticles = (props) => {
  const { count, points } = props;
  const radius = 4;

  // This reference gives us direct access to our points

  // Generate our positions attributes array
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const distance = Math.sqrt(Math.random()) * 2;
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      let x = distance * Math.sin(theta) * Math.cos(phi);
      let y = distance * Math.sin(theta) * Math.sin(phi) + 1.5;
      let z = distance * Math.cos(theta);

      positions.set([x, y, z], i * 3);

      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      uRadius: {
        value: radius,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      points.current.geometry.attributes.position.array[i3] +=
        Math.sin((clock.elapsedTime + Math.random()) * 10) * 0.0005;
      points.current.geometry.attributes.position.array[i3 + 1] +=
        Math.cos((clock.elapsedTime + Math.random()) * 3) * 0.0005;
      points.current.geometry.attributes.position.array[i3 + 2] +=
        Math.sin((clock.elapsedTime + Math.random()) * 20) * 0.0005;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </points>
  );
};

// const CustomGeometryParticles2 = (props) => {
//   const { count, points } = props;

//   // This reference gives us direct access to our points
//   // Generate our positions attributes array
//   const particlesPosition = useMemo(() => {
//     const positions = new Float32Array(count * 3);
//     const distance = 2;

//     for (let i = 0; i < count; i++) {
//       const theta = THREE.MathUtils.randFloatSpread(360);
//       const phi = THREE.MathUtils.randFloatSpread(360);

//       let x = distance * Math.sin(theta) * Math.cos(phi)
//       let y = distance * Math.sin(theta) * Math.sin(phi) + 1;
//       let z = distance * Math.cos(theta);

//       positions.set([x, y, z], i * 3);
//     }

//     return positions;
//   }, [count]);

//   useFrame((state) => {
//     const { clock } = state;

//     for (let i = 0; i < count; i++) {
//       const i3 = i * 3;

//       points.current.geometry.attributes.position.array[i3] += Math.sin(clock.elapsedTime + Math.random() * 10) * 0.001;
//       points.current.geometry.attributes.position.array[i3 + 1] += Math.cos(clock.elapsedTime + Math.random() * 10) * 0.001;
//       points.current.geometry.attributes.position.array[i3 + 2] += Math.sin(clock.elapsedTime + Math.random() * 10) * 0.001;
//     }

//     points.current.geometry.attributes.position.needsUpdate = true;
//   });

//   const uniforms = useMemo(() => ({
//     uTime: {
//       value: 0.0
//     },
//     uRadius: {
//       value: 2
//     }
//   }), [])

//   return (
//     <points ref={points}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={particlesPosition.length / 3}
//           array={particlesPosition}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial size={0.008} color="#8EFF35" sizeAttenuation depthWrite={false} />
//     </points>
//   );
// };
