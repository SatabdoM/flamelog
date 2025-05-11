import { Request, Response } from 'express';

type SSEClient = {
  id: string;
  res: Response;
};

// Store all connected clients here
const clients: SSEClient[] = [];

/**
 * Handles new SSE client connections.
 * Should be used as Express route handler.
 */
export const sseHandler = (req: Request, res: Response) => {
  //   // Set required headers for SSE
  //   res.setHeader('Content-Type', 'text/event-stream');
  //   res.setHeader('Cache-Control', 'no-cache');
  //   res.setHeader('Connection', 'keep-alive');
  //   // Prevent request from timing out
  //   req.socket.setTimeout(0);
  //   // Add client to list
  //   const clientId = uuidv4();
  //   const newClient: SSEClient = { id: clientId, res };
  //   clients.push(newClient);
  //   console.log(`SSE client connected: ${clientId}`);
  //   // Send initial ping to keep connection alive
  //   res.write('event: ping\ndata: connected\n\n');
  //   // Cleanup on client disconnect
  //   req.on('close', () => {
  //     console.log(`SSE client disconnected: ${clientId}`);
  //     const index = clients.findIndex((client) => client.id === clientId);
  //     if (index !== -1) clients.splice(index, 1);
  //   });
};

/**
 * Sends an SSE message to all connected clients.
 */
export const sendSSE = (data: any) => {
  const payload = `data: ${JSON.stringify(data)}\n\n`;
  clients.forEach((client) => {
    client.res.write(payload);
  });
};
