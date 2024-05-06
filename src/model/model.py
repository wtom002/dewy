# # Import necessary libraries
# import numpy as np
# import tensorflow as tf
# from sklearn.model_selection import train_test_split
# from sklearn.preprocessing import StandardScaler
# from sklearn.metrics import accuracy_score
# from sklearn.datasets import fetch_openml

# # Load the MNIST dataset
# mnist = fetch_openml('mnist_784', version=1)
# X = mnist.data.astype('float32')
# y = mnist.target.astype('int64')

# # Normalize the pixel values
# X /= 255.0

# # Split the dataset into training and testing sets
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# # Define the neural network model
# model = tf.keras.Sequential([
#     tf.keras.layers.Dense(128, activation='relu', input_shape=(784,)),
#     tf.keras.layers.Dropout(0.2),
#     tf.keras.layers.Dense(10, activation='softmax')
# ])

# # Compile the model
# model.compile(optimizer='adam',
#               loss='sparse_categorical_crossentropy',
#               metrics=['accuracy'])

# # Train the model
# model.fit(X_train, y_train, epochs=5, batch_size=64, validation_split=0.2)

# # Evaluate the model
# test_loss, test_accuracy = model.evaluate(X_test, y_test)
# print("Test accuracy:", test_accuracy)  

import numpy as np
import tensorflow as tf
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
from tensorflow.keras.layers import Concatenate, Conv2D, Reshape
from tensorflow.keras.models import Model

# Load MobileNetV2 base model (pre-trained on ImageNet)
base_model = MobileNetV2(input_shape=(None, None, 3), include_top=False, weights='imagenet')

# Add additional layers for object detection
x = base_model.output
x = Conv2D(4, kernel_size=3, padding='same')(x)  # Output bounding box coordinates (x, y, w, h)
x = Reshape((-1, 4))(x)

# Concatenate feature maps from different scales
x = Concatenate(axis=1)([x, x, x, x])

# Create the model
model = Model(inputs=base_model.input, outputs=x)

# Freeze base layers
for layer in base_model.layers:
    layer.trainable = False

# Compile the model (no need for loss function or optimizer since we'll use it for inference)
model.compile()

# Example usage
image = np.random.rand(1, 224, 224, 3)  # Example input image
preprocessed_image = preprocess_input(image)  # Preprocess input image
predictions = model.predict(preprocessed_image)  # Perform object detection

print(predictions.shape)  # Print shape of predictions (should be (1, num_boxes, 4))

