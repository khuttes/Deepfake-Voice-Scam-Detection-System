# Deepfake Voice Scam Detection System

## Project Overview

This project aims to develop a comprehensive system for detecting deepfake voices and identifying common scam patterns in call audio. The system will analyze audio for synthetic characteristics, recognize scam tactics, and provide confidence scores along with clear indicators of manipulation or scam likelihood.

For a detailed breakdown of the project goals, essential features, phased implementation plan, and key considerations, please refer to the `PROJECT_OVERVIEW_FOR_CLIENT.txt` file in this repository.

## Current Status

As of now, the project has established its foundational structure and a basic user interface:
*   **Project Setup:** Core directories and a Python virtual environment are configured.
*   **Dependencies:** Essential Python data science and machine learning libraries are installed.
*   **Frontend Prototype:** A functional web-based user interface (UI) for audio upload and simulated results display has been developed using HTML, CSS, and JavaScript. **Note: This UI currently simulates analysis results; actual backend integration and ML inference are not yet implemented.**
*   **Data Requirements:** Default data requirements for genuine speech, deepfake audio, and scam recordings have been defined for prototyping purposes.

## Getting Started

Follow these steps to set up and run the current prototype of the Deepfake Voice Scam Detection System on your local machine.

### Prerequisites

*   Python 3.8+ installed
*   Git (for cloning the repository)

### 1. Clone the Repository

First, clone this GitHub repository to your local machine:

```bash
git clone [YOUR_REPOSITORY_URL_HERE]
cd "Deepfake Voice Scam Detection System"
```
*(Replace `[YOUR_REPOSITORY_URL_HERE]` with the actual URL once the repository is created.)*

### 2. Set Up Python Virtual Environment

It is highly recommended to use a Python virtual environment to manage project dependencies.

```bash
python -m venv .venv
```

### 3. Activate the Virtual Environment

*   **On Windows (Command Prompt):**
    ```bash
    .venv\Scripts\activate.bat
    ```
*   **On Windows (PowerShell):**
    ```powershell
    .venv\Scripts\Activate.ps1
    ```
*   **On macOS/Linux:**
    ```bash
    source .venv/bin/activate
    ```
*(You will need to activate the virtual environment in any new terminal session where you want to work on the project.)*

### 4. Install Dependencies

With the virtual environment activated, install the required Python packages:

```bash
pip install -r requirements.txt
```

### 5. View the Frontend Prototype

The basic user interface can be viewed directly in your web browser:

1.  Navigate to the `src` directory:
    ```bash
    cd src
    ```
2.  Open the `index.html` file in your preferred web browser:
    *   **Windows:** `start index.html`
    *   **macOS:** `open index.html`
    *   **Linux:** `xdg-open index.html` (or open manually via file explorer)

You will be able to interact with the file upload and see simulated analysis results.

## Next Steps (Development Roadmap)

The immediate next steps in the development roadmap, following the defined data requirements, are:

1.  **Data Acquisition:** Begin collecting/sourcing genuine human speech and deepfake audio datasets based on the proposed default requirements.
2.  **Data Preprocessing:** Develop pipelines for cleaning, normalizing, and extracting features from the acquired audio data.
3.  **Backend Development:** Implement the Python backend to handle audio uploads, integrate with ML models, and serve analysis results to the frontend.
4.  **Machine Learning Model Development:** Develop and train the deepfake detection and scam pattern recognition models.

Your feedback and contributions are welcome as we move forward!
