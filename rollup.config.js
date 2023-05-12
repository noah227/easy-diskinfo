import {nodeResolve} from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
// import {terser} from "rollup-plugin-terser";

const path = require("path")
const resolve = fn => path.resolve(__dirname, fn)

export default {
    input: resolve("./src/index.ts"),
    output: {
        file: resolve("./dist/index.js"),
        format: "cjs",
        exports: "auto",
        sourcemap: true
    },
    plugins: [
        nodeResolve(),
        typescript({
            compilerOptions: {
                target: "cjs",
                sourceMap: true,
                declaration: true,
                declarationMap: true,
                declarationDir: resolve("./dist"),
                rootDir: resolve("./src")
            },
            sourceMap: false
        }),
        commonjs(),
        // terser()
    ]
}