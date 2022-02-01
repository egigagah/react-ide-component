// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import dts from "rollup-plugin-dts";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import scss from 'rollup-plugin-scss'
import packageJson from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    babel({presets: ['@babel/preset-react']}),
    typescript({ tsconfig: "./tsconfig.json" }),
    scss({ insert: true })
  ],
  external: ['react', 'react-dom', 'html-react-parser', 'highlight.js', 'highlight.js/styles/tomorrow-night-blue.css', 'react-icons/ai', 'react-icons/io']
}

// export default [
//   {
//     input: "./src/index.ts",
//     output: [
//       {
//         file: packageJson.main,
//         format: "cjs",
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: "esm",
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       resolve(),
//       // postcss({
//       //   minimize: true,
//       //   modules: true,
//       //   use: {
//       //       sass: null,
//       //       stylus: null,
//       //       less: { javascriptEnabled: true }
//       //   }, 
//       //   extract: true
//       // }),
//       babel({presets: ['@babel/preset-react']}),
//       commonjs(),
//       typescript({ tsconfig: "./tsconfig.json" }),
//       scss({
//         watch: 'src/styles'
//       })
//     ],
//   },
//   {
//     input: "dist/esm/types/index.d.ts",
//     output: [{ file: "dist/index.d.ts", format: "esm" }],
//     plugins: [dts()],
//     external: [/\.scss|.css$/],
//   },
// ];