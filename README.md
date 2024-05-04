# lao-pdf-to-word

Create AI for Accurate PDF to Word Conversion with Lao Language Support
Project Goal: Develop an AI-powered system that accurately converts PDF documents to editable Word (.docx) format, with a specific focus on preserving text and layout while supporting the Lao language.

Technical Specifications:

Input: PDF documents (text-based, scanned images, or a combination)
Output: Editable Word (.docx) documents
OCR Engine: Utilize a deep learning-based OCR engine capable of recognizing Lao characters with high accuracy.
Language Support:
Primarily focus on Lao language recognition.
Consider including additional Southeast Asian languages for future expansion (optional).
Layout Preservation: Maintain the original layout of the PDF document as much as possible in the converted Word file, including tables, images, and formatting.
Accuracy: Strive for a character error rate (CER) below a set threshold (e.g., 1%) for Lao text recognition.
Data Requirements:

Large dataset of Lao text documents in both PDF and Word formats for training and testing the OCR engine.
Datasets containing various PDF layouts and complexities (tables, columns, embedded images) to ensure robustness.
Evaluation Metrics:

Character Error Rate (CER) for Lao text recognition
Layout preservation accuracy (percentage of elements correctly transferred)
User satisfaction surveys focusing on conversion speed and accuracy.
Additional Considerations:

Explore the possibility of integrating language translation capabilities for handling multilingual PDFs in the future.
Design a user-friendly interface for seamless PDF upload, conversion options, and output management.
Address potential security concerns related to data handling during the conversion process.
Success Criteria:

The AI system consistently achieves high accuracy in converting Lao text from PDFs to editable Word documents.
The converted documents maintain the original layout and formatting to a high degree.
Users find the system easy to use and reliable for their PDF conversion needs.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/lao-pdf-to-word.git
cd lao-pdf-to-word
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
