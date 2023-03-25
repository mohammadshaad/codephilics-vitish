import cv2

# Load the image
image = cv2.imread('image4.jpg')

# Convert the image to grayscale
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Apply edge detection
edged = cv2.Canny(gray, 30, 200)

# Find contours in the edged image
contours, hierarchy = cv2.findContours(edged, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Sort the contours by area in descending order
contours = sorted(contours, key=cv2.contourArea, reverse=True)

# Loop over the contours
for contour in contours:
    # Get the perimeter of the contour
    perimeter = cv2.arcLength(contour, True)

    # Approximate the polygonal curves of the contour
    approx = cv2.approxPolyDP(contour, 0.02 * perimeter, True)

    # If the contour has four points, it is likely the license plate
    if len(approx) == 8:
        # Draw a bounding box around the contour
        cv2.drawContours(image, [approx], -1, (0, 255, 0), 3)

        # Extract the region of interest (ROI) of the license plate
        (x, y, w, h) = cv2.boundingRect(approx)
        plate_roi = image[y:y+h, x:x+w]

        # Display the license plate ROI
        cv2.imshow('License Plate ROI', plate_roi)
        cv2.waitKey(0)

# Show the original image with the license plate bounding box
cv2.imshow('Original Image', image)
cv2.waitKey(0)
cv2.destroyAllWindows()