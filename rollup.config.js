import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json";

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
        strict: false,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      babel({ presets: ["@babel/preset-react"] }),
      typescript({ tsconfig: "./tsconfig.json" }),
      scss({ insert: true, outputStyle: "compressed" }),
    ],
    external: [
      "react",
      "react-dom",
      "html-react-parser",
      "highlight.js",
      "highlight.js/styles/stackoverflow-dark.css",
      "highlight.js/styles/stackoverflow-light.css",
      "react-icons/ai",
      "react-icons/io",
      "gsap",
      "gsap/dist/TextPlugin",
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.scss|.css$/],
  },
];
