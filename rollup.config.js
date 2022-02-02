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
    scss({ insert: true, outputStyle: 'compressed' })
  ],
  external: ['react', 'react-dom', 'html-react-parser', 'highlight.js', 'highlight.js/styles/tomorrow-night-blue.css', 'react-icons/ai', 'react-icons/io', 'gsap', 'gsap/dist/TextPlugin']
}