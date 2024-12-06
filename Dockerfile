FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

RUN npm install

# Copy the rest of the application code
COPY . .

# Set the port environment variable for Next.js
ENV PORT=5000

# Build the Next.js application
RUN npm run build

# Expose port 5000 for the container
EXPOSE 5000

# Start the Next.js application
CMD ["npm", "run", "start"]
