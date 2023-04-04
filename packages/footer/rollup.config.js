import typescript from "rollup-plugin-typescript2";

export default {
  input: ["src/index.tsx"],
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "auto",
    },
    {
      file: "dist/index.mjs",
      format: "esm",
    },
  ],
  plugins: [typescript()],
  external: ["react"],
};
