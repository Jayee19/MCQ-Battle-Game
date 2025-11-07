import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Table, Button, Form, Container, Row, Col, Alert, Spinner, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/lobby.css';

const socket = io('http://localhost:5001');

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [username, setUsername] = useState('');
  const [newRoomId, setNewRoomId] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [createLoading, setCreateLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    setEmail(userEmail);

    const fetchUsername = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/users/user/${userEmail}`);
        setUsername(response.data.user.username);
      } catch (error) {
        console.error('Error fetching username:', error);
        setError('Failed to fetch user information');
      }
    };

    if (userEmail) {
      fetchUsername();
      fetchRooms();
    }

    socket.on('room-created', (room) => {
      setRooms((prevRooms) => [...prevRooms, room]);
    });

    socket.on('player-joined', ({ roomId, players }) => {
      setRooms((prevRooms) =>
        prevRooms.map((room) =>
          room.roomId === roomId ? { ...room, players } : room
        )
      );
    });

    socket.on('game-started', ({ roomId }) => {
      setRooms((prevRooms) => prevRooms.filter((room) => room.roomId !== roomId));
      navigate(`/room/${roomId}`);
    });

    return () => {
      socket.off('room-created');
      socket.off('player-joined');
      socket.off('game-started');
    };
  }, [navigate]);

  const fetchRooms = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5001/rooms');
      setRooms(response.data);
      setError('');
    } catch (error) {
      setError('Failed to fetch rooms. Please try again.');
      console.error('Failed to fetch rooms:', error);
      setRooms([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateRoom = async () => {
    if (!username) {
      setError('Please wait for username to load');
      return;
    }

    const roomId = newRoomId.trim() || Math.random().toString(36).substring(2, 10);
    const roomData = { roomId, players: [username] };

    try {
      setCreateLoading(true);
      await axios.post('http://localhost:5001/rooms/create', { roomId, username, email });
      socket.emit('create-room', roomData);
      setNewRoomId('');
      setError('');
      await fetchRooms();
    } catch (error) {
      console.error('Error creating room:', error);
      if (error.response && error.response.status === 400) {
        setError('❌ Room ID already exists. Please choose a different one.');
      } else {
        setError('❌ Failed to create room. Please try again.');
      }
    } finally {
      setCreateLoading(false);
    }
  };

  const handleJoinRoom = async (roomId) => {
    if (!username) {
      setError('Please wait for username to load');
      return;
    }

    try {
      await axios.post('http://localhost:5001/rooms/join', { roomId, playerName: username, playerEmail: email });
      socket.emit('join-room', { roomId, username });
      await fetchRooms();
    } catch (error) {
      console.error('Error joining room:', error);
      if (error.response?.status === 400) {
        setError('❌ Room is full. Please choose another room.');
      } else {
        setError('❌ Failed to join room. Please try again.');
      }
    }
  };

  const handleStartGame = async (roomId) => {
    try {
      const gameResponse = await axios.get('http://localhost:5001/game');
      const games = gameResponse.data;
      
      if (!games || games.length === 0) {
        setError('❌ No games available. Please try again.');
        return;
      }

      const randomIndex = Math.floor(Math.random() * games.length);
      await axios.post('http://localhost:5001/roomFriendGame', {
        roomId: roomId,
        randomGame: randomIndex
      });
      socket.emit('start-game', roomId);
    } catch (err) {
      console.error('Error starting game:', err);
      setError('❌ Failed to start game. Please try again.');
    }
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="text-center">
          <Spinner animation="border" role="status" className="mb-3">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h4>Loading Rooms...</h4>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Button variant="secondary" onClick={() => navigate('/lobby')} className="mb-4">
        ← Back to Lobby
      </Button>

      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title className="text-center mb-4" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#667eea' }}>
            🎮 Play With Friends - Create or Join a Room
          </Card.Title>

          {error && (
            <Alert variant="danger" dismissible onClose={() => setError('')}>
              {error}
            </Alert>
          )}

          <Row className="mb-5">
            <Col md={8} className="mx-auto">
              <Card className="border-primary">
                <Card.Header className="bg-primary text-white">
                  <h5 className="mb-0">➕ Create New Room</h5>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ fontWeight: 'bold', color: '#333' }}>
                        Enter Room ID (Optional - Leave blank to auto-generate)
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="e.g., ROOM123 (or leave empty)"
                        value={newRoomId}
                        onChange={(e) => setNewRoomId(e.target.value)}
                        disabled={createLoading}
                      />
                      <Form.Text className="text-muted">
                        Share this ID with your friend so they can join your room
                      </Form.Text>
                    </Form.Group>
                    <Button
                      variant="primary"
                      onClick={handleCreateRoom}
                      disabled={createLoading}
                      className="w-100"
                    >
                      {createLoading ? (
                        <>
                          <Spinner animation="border" size="sm" className="me-2" />
                          Creating...
                        </>
                      ) : (
                        '✨ Create Room'
                      )}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={12} className="text-center">
              <Button
                variant="outline-primary"
                onClick={fetchRooms}
                className="me-2"
              >
                🔄 Refresh Rooms
              </Button>
            </Col>
          </Row>

          <Card>
            <Card.Header className="bg-success text-white">
              <h5 className="mb-0">🎯 Available Rooms ({rooms.length})</h5>
            </Card.Header>
            <Card.Body>
              {rooms.length === 0 ? (
                <div className="text-center py-5">
                  <h5 style={{ color: '#999' }}>No rooms available yet</h5>
                  <p style={{ color: '#999' }}>Create a room or wait for others to create one!</p>
                </div>
              ) : (
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead className="table-dark">
                      <tr>
                        <th>#</th>
                        <th>Room ID</th>
                        <th>Players ({rooms.reduce((count, room) => count + room.players.length, 0)}/{rooms.length * 2})</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rooms.map((room, index) => (
                        <tr key={room.roomId}>
                          <td className="fw-bold">{index + 1}</td>
                          <td className="fw-bold" style={{ color: '#667eea' }}>{room.roomId}</td>
                          <td>
                            <div>
                              {room.players.map((player, idx) => (
                                <div key={idx} style={{ fontSize: '0.9rem' }}>
                                  👤 {player}
                                </div>
                              ))}
                            </div>
                          </td>
                          <td>
                            {room.players.length < 2 ? (
                              <span className="badge bg-warning text-dark">⏳ Waiting ({room.players.length}/2)</span>
                            ) : (
                              <span className="badge bg-success">✅ Ready ({room.players.length}/2)</span>
                            )}
                          </td>
                          <td>
                            {room.players.length < 2 ? (
                              room.players.includes(username) ? (
                                <span className="text-muted d-flex align-items-center">
                                  ⏳ Waiting for second player...
                                </span>
                              ) : (
                                <Button
                                  variant="success"
                                  size="sm"
                                  onClick={() => handleJoinRoom(room.roomId)}
                                >
                                  ➕ Join
                                </Button>
                              )
                            ) : (
                              <>
                                {room.players.includes(username) && room.players.length === 2 && (
                                  <Button
                                    variant="primary"
                                    size="sm"
                                    onClick={() => handleStartGame(room.roomId)}
                                  >
                                    🎮 Start Quiz
                                  </Button>
                                )}
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Rooms;
