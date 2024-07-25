import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect, useState } from "react";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/Trump Runner.loader.js",
    dataUrl: "build/Trump Runner.data",
    frameworkUrl: "build/Trump Runner.framework.js",
    codeUrl: "build/Trump Runner.wasm",
  });

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Unity
        style={{
          width: `${windowDimensions.width}px`,
          height: `${windowDimensions.height}px`,
        }}
        unityProvider={unityProvider}
      />
    </div>
  );
}

export default App;
