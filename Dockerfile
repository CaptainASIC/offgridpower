# Use Node.js 20 Alpine as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Install pnpm and dependencies
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# Install serve to serve the built application
RUN npm install -g serve

# Expose the port that Railway will assign
EXPOSE $PORT

# Start the application on Railway's assigned port
CMD ["sh", "-c", "serve -s dist -l ${PORT:-3000}"]

