# Use the official Node.js LTS image
FROM node:18-bullseye

# Set the working directory inside the container
WORKDIR /workspace

# Copy the entire project (excluding node_modules and other unnecessary files)
COPY ../ ./

# Install ESLint and Prettier globally
RUN npm install -g eslint prettier

# Use a non-root user for better security
USER node