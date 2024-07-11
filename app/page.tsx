"use client";

import { Stack, Button, Card, CardText } from 'react-bootstrap';
import MovieCard from './MovieCard';

export default function Home() {
  return (
    <div className="container">
       <div className="col-md-6">
          <h1 style={{fontSize :"24px", color: "blue"}}>Home Movie List</h1>
          <h2 style={{fontSize :"20px", color: "green"}}>Ratna Dwi Pratiwi</h2>
          <h3 style={{fontSize :"18px", color: "red"}}>Kelas Pemrograman Web 2024</h3>
        </div>
      
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
        Button as link
        </Button>
      <Button as="a" variant="success">
        Button as link
      </Button>
      </Stack>
      <div className="bg-secondary">
        <MovieCard />
      </div>
    </div>
  )
}