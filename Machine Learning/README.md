# Machine Learning

## How To Replicate Our Project

### 01. Data Pre-Processing

This notebook contains the data preparation and pre-processing before start modeling it. To run this notebook you have to follow this few steps below. 
* Download the dataset used in this project. You can download the dataset [here](https://drive.google.com/uc?export=download&id=1C2ML8iLXsRkCa-wz-grqHjMMsJzLJAf3).
* Upload the downloaded dataset to the same directory as this notebook in your environment.
* Install the required libraries to run this notebook.

After doing that few steps, you can run the whole notebook and start pre-processing the data before we do the modeling.

### 02. Modelling

This notebook contains the step you have to take to create the best model possible for this application. This notebook will do several things below.

* Doing [Image Augmentation](https://www.tensorflow.org/tutorials/images/data_augmentation) to rescale the input data by 1/255 and store it in size of 224x224.
* Download and Import [Xception](https://www.tensorflow.org/api_docs/python/tf/keras/applications/xception/Xception) for the Transfer Learning Model.
* Create Machine Learning Model Architecture with [GlobalAveragePooling2D](https://www.tensorflow.org/api_docs/python/tf/keras/layers/GlobalAveragePooling2D), [Dense](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Dense), and [Dropout](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Dropout). You can see the model [summary](https://github.com/nadikarim/FUTON/blob/Android/Machine%20Learning/Media/Model%20Summary.png) and [flowchart](https://github.com/nadikarim/FUTON/blob/Android/Machine%20Learning/Media/Model%20Flowchart.png) too.
* Compile the model using [Adam](https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/Adam) Optimizer. Because this is a multiclass classification, the loss use in this model is [Categorical Crossentropy](https://www.tensorflow.org/api_docs/python/tf/keras/metrics/categorical_crossentropy) and we shown Accuracy as the [Metrics](https://www.tensorflow.org/api_docs/python/tf/keras/metrics/Accuracy).
* Adding [Callbacks](https://www.tensorflow.org/api_docs/python/tf/keras/callbacks/Callback) to the model to give limitation for the epoch results.
* Doing training for the model.
* Plotting the [accuracy](https://github.com/nadikarim/FUTON/blob/Android/Machine%20Learning/Media/Model%20Accuracy.png) and [loss](https://github.com/nadikarim/FUTON/blob/Android/Machine%20Learning/Media/Model%20Loss.png) graphics.
* Testing the model with the data from Test directory. You can see the result [here](https://github.com/nadikarim/FUTON/blob/Android/Machine%20Learning/Media/Testing%20Example.png).
* Save and convert the model into [.h5, .json](https://www.tensorflow.org/tutorials/keras/save_and_load), and [TFLite](https://www.tensorflow.org/lite/guide).
