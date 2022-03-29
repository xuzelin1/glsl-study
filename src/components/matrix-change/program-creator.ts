/**
 * 创建 shader
 * @param gl - webgl 实例
 * @param type - shader 类型
 * @param source - 来源
 * @returns shader
 */
export const createShader = (gl, type, source) => {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }
 
  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

/**
 * 创建着色器程序
 * @param gl - webgl 实例
 * @param vertexShader - 定点着色器
 * @param fragmentShader - 片段着色器
 * @returns 着色器程序
 */
export const createProgram = (gl, vertexShader, fragmentShader) => {
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }
 
  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}
