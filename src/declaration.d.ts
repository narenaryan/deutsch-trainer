// Without this file, TypeScript flags warnings for image imports
declare module '*.png' {
  const value: any;
  export default value;
}
