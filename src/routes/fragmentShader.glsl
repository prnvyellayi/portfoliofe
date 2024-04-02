varying float vDistance;

void main() {
  vec3 color = vec3(0.557,1.,0.208);
  float strength = distance(gl_PointCoord, vec2(0.5));
  strength = 1.0 - strength;
  strength = pow(strength, 3.0);

  color = mix(color, vec3(0.557,1.,0.208), vDistance * 0.5);
  color = mix(vec3(0.0), color, strength);
  gl_FragColor = vec4(color, strength);
}
