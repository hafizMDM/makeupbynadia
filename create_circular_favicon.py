from PIL import Image, ImageDraw

def create_circular_image(input_path, output_path, size):
    # Open the image
    img = Image.open(input_path)
    
    # Resize the image to a square
    img = img.resize((size, size), Image.LANCZOS)
    
    # Create a new image with an alpha channel
    mask = Image.new('L', (size, size), 0)
    
    # Create a drawing context
    draw = ImageDraw.Draw(mask)
    
    # Draw a white circle on the mask
    draw.ellipse((0, 0, size, size), fill=255)
    
    # Apply the circular mask
    result = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    result.paste(img, (0, 0), mask)
    
    # Save the result
    result.save(output_path)

# Create circular favicons
input_logo = '/Users/hafiz/Projects/nadi-makeup/public/logo.jpeg'
favicon_dir = '/Users/hafiz/Projects/nadi-makeup/public/favicon'

# Ensure favicon directory exists
import os
os.makedirs(favicon_dir, exist_ok=True)

# Create circular favicons in different sizes
sizes = [16, 32, 48]
for size in sizes:
    output_path = f'{favicon_dir}/favicon-circular-{size}x{size}.png'
    create_circular_image(input_logo, output_path, size)

# Create .ico file from the 48x48 version
from PIL import Image
img = Image.open(f'{favicon_dir}/favicon-circular-48x48.png')
img.save('/Users/hafiz/Projects/nadi-makeup/public/favicon.ico', format='ICO', sizes=[(16,16), (32,32), (48,48)])

print("Circular favicons created successfully!")
