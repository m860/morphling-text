import babel from "rollup-plugin-babel";
import {uglify} from "rollup-plugin-uglify";

export default {
    input: 'src/index.js',
    output: {
        format: "amd",
        file: "./dist/bundle.js"
    },
    plugins: [
        babel({
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-flow"]
        }),
        uglify()
    ]
};