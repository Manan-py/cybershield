import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication routes only
  setupAuth(app);

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
