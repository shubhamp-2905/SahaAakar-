import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // User registration endpoint
  app.post("/api/register", async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      
      // Check if user already exists
      const existingUser = await storage.getUserByEmail(validatedData.email);
      if (existingUser) {
        res.status(400).json({ error: "User with this email already exists" });
        return;
      }

      const user = await storage.createUser(validatedData);
      res.status(201).json({ 
        message: "Registration successful! We'll contact you within 24 hours to get started.", 
        user: { id: user.id, email: user.email, selectedPlan: user.selectedPlan } 
      });
    } catch (error) {
      console.error("Registration error:", error);
      if (error instanceof Error && error.name === 'ZodError') {
        res.status(400).json({ error: "Please fill in all required fields correctly" });
      } else {
        res.status(500).json({ error: "Registration failed. Please try again." });
      }
    }
  });

  // Get user by ID
  app.get("/api/users/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const user = await storage.getUser(id);
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    res.json(user);
  });

  // Get all users (for admin purposes)
  app.get("/api/users", async (req, res) => {
    try {
      const users = await storage.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
