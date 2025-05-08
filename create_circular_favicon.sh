#!/bin/bash

# Create favicon directory if it doesn't exist
mkdir -p /Users/hafiz/Projects/nadi-makeup/public/favicon

# Create circular favicons using sips
sips -Z 48 \
  -c 48 48 \
  /Users/hafiz/Projects/nadi-makeup/public/logo.jpeg \
  --out /Users/hafiz/Projects/nadi-makeup/public/favicon/favicon-circular-48x48.png

sips -Z 32 \
  -c 32 32 \
  /Users/hafiz/Projects/nadi-makeup/public/logo.jpeg \
  --out /Users/hafiz/Projects/nadi-makeup/public/favicon/favicon-circular-32x32.png

sips -Z 16 \
  -c 16 16 \
  /Users/hafiz/Projects/nadi-makeup/public/logo.jpeg \
  --out /Users/hafiz/Projects/nadi-makeup/public/favicon/favicon-circular-16x16.png

# Convert to .ico
sips -s format ico /Users/hafiz/Projects/nadi-makeup/public/favicon/favicon-circular-48x48.png \
  -o /Users/hafiz/Projects/nadi-makeup/public/favicon.ico

echo "Circular favicons created successfully!"
