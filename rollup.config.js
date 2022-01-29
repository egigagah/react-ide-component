import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
// import css from "rollup-plugin-import-css";
import scss from 'rollup-plugin-scss'
// import postcss from 'rollup-plugin-postcss'

const packageJson = require("./package.json");

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      // postcss({
      //   minimize: true,
      //   modules: true,
      //   use: {
      //       sass: null,
      //       stylus: null,
      //       less: { javascriptEnabled: true }
      //   }, 
      //   extract: true
      // }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      scss({
        watch: 'src/styles'
      })
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.scss|.css$/],
  },
];