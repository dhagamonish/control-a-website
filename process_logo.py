
from PIL import Image
import numpy as np

def remove_background(input_path, output_path, tolerance=200):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Check if the pixel is close to white
        if item[0] > tolerance and item[1] > tolerance and item[2] > tolerance:
            newData.append((255, 255, 255, 0)) # Transparent
        else:
            newData.append(item)
    
    img.putdata(newData)
    
    # Crop the image to the content
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print(f"Saved transparent logo to {output_path}")

try:
    input_path = "C:/Users/dhaga/.gemini/antigravity/brain/9514a663-16a6-4537-890f-471e67a57e0c/uploaded_image_1766908418891.png"
    output_path = "c:/Users/dhaga/OneDrive/Desktop/Biz/4. control + a/public/logo.png"
    remove_background(input_path, output_path)
except Exception as e:
    print(f"Error: {e}")
