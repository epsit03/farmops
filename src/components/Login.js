
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Select, MenuItem, Box, Typography } from "@mui/material";
import Loader from './Loader';
import * as THREE from 'three';

const Login = ({ setUserRole }) => {
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    // Initialize Three.js for background animation
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x0077ff, wireframe: true });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    camera.position.z = 50;

    const animate = function () {
      requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  const handleLogin = () => {
    if (username && password && role) {
      setUserRole(role); // Pass the selected role back to App.js
      navigate("/landing");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex justify-center items-center h-screen relative bg-gradient-to-r from-blue-500 to-purple-500">
      <Box className="z-10 p-8 bg-white rounded-lg shadow-lg">
        <Typography variant="h4" className="text-blue-600 mb-4">Gram Panchayat Login</Typography>
        <TextField fullWidth label="Username" value={username} onChange={(e) => setUsername(e.target.value)} margin="normal" />
        <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" />
        <Select fullWidth value={role} onChange={(e) => setRole(e.target.value)} displayEmpty className="mt-4">
          <MenuItem value="" disabled>Select Role</MenuItem>
          <MenuItem value="super-admin">Sarpanch (Super Admin)</MenuItem>
          <MenuItem value="committee">Committee Member</MenuItem>
          <MenuItem value="user">Normal User</MenuItem>
        </Select>
        <Button fullWidth className="mt-4 bg-blue-600 text-white hover:bg-blue-700" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </div>
  );
};

export default Login;
