import babel from "rollup-plugin-babel";
import {uglify} from "rollup-plugin-uglify";

export default {
    input: 'src/createText.js',
    output: {
        dir: "./built",
        format: "amd",
        filename: "bundle.js",
        // name:"createText"
    },
    plugins: [
        babel({
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-flow"]
        }),
        uglify()
    ]
};