---
title: "VITS-Japanese: Text-to-Speech for Japanese"
description: "An implementation of VITS for Japanese text-to-speech, enabling single-stage training and parallel sampling."
date: "2025-04-02"
link: "https://github.com/QuyAnh2005/vits-japanese"
tags: ["Text-to-Speech", "Machine Learning", "Natural Language Processing"]
technologies: ["Python", "PyTorch", "NumPy", "Torch"]
---

VITS-Japanese is an open-source project that implements VITS (Conditional Variational Autoencoder with Adversarial Learning) for end-to-end text-to-speech (TTS) specifically tailored for the Japanese language. This project, customed from [jaywalnut310/vits](https://github.com/jaywalnut310/vits), leverages PyTorch 2.0.0 and enables single-stage training and parallel sampling, making it efficient for generating high-quality speech. However, the sample quality may not match two-stage TTS systems, as noted in the project documentation.

## Key Features
- **Single-Stage Training**: Simplifies the training process by combining multiple stages into one, reducing complexity.
- **Parallel Sampling**: Allows for faster generation of speech samples, enhancing productivity.
- **Japanese Focus**: Optimized for Japanese text-to-speech, with support for the nuances of the language.

## Getting Started
To use VITS-Japanese, you'll need Python 3.6 or higher. The project provides pretrained models and requires a specific Japanese speech dataset, such as the `basic5000` dataset from JSUT ([JSUT Dataset](https://sites.google.com/site/shinnosuketakamichi/publication/jsut)). Here's how to set it up:

### Installation
Ensure you have the required dependencies installed, listed in the [requirements.txt](https://github.com/QuyAnh2005/vits-japanese/blob/main/requirements.txt). Key technologies include:
- Python
- PyTorch 2.0.0
- NumPy
- Torch

You can install them via pip:
```
pip install -r requirements.txt
```

### Dataset Preparation
1. Download the JSUT `basic5000` dataset and move it to the `jp_dataset` folder in the project directory.
2. Preprocess the data using the following command:
   ```
   python preprocess.py --text_index 1 --filelists filelists/jp_audio_text_train_filelist.txt filelists/jp_audio_text_val_filelist.txt filelists/jp_audio_text_test_filelist.txt
   ```

### Training
Train the model with:
```
python train.py -c configs/jp_base.json -m jp_base
```

### Inference
For inference, run the startup script:
```
sh startup.sh
```
You can also explore the demo via Streamlit by running:
```
streamlit run app.py
```
For a detailed example, check the [inference notebook](https://github.com/QuyAnh2005/vits-japanese/blob/main/vits_apply.ipynb).

## Pretrained Models
Pretrained models are available for immediate use, accessible at [DropBox](https://www.dropbox.com/s/e0h13tufx2oobn2/G_523000.pth?dl=0). This allows users to test the model without training from scratch.

## Use Cases
VITS-Japanese is ideal for researchers and developers working on Japanese TTS systems, offering a robust framework for experimentation and deployment. It's particularly useful for applications requiring high-quality, efficient speech synthesis, such as virtual assistants, audiobooks, and language learning tools.

## Limitations
While the project supports single-stage training and parallel sampling, the quality may not match two-stage TTS systems, which could be a consideration for professional applications. Additionally, ensure compliance with copyright and intellectual property laws when using the generated outputs, especially given Studio Ghibli's unique aesthetic inspiration.

For more details, visit the official repository at [GitHub](https://github.com/QuyAnh2005/vits-japanese).