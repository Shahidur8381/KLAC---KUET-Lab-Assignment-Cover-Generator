# KUET Cover Page Suite

KUET Cover Page Suite is a browser-based tool for preparing and exporting formatted cover pages for coursework. Enter details in a form and see them reflected in a live preview, then download the cover as a PDF.

## Features

- Generate assignment, lab report, and project report cover pages.
- Edit student, teacher, course, department, and submission details.
- Add multiple students and instructors to assignment and project covers.
- Use instructor name autocomplete on assignment and project forms.
- Export covers as A4 portrait PDF files.
- Use Dhaka-local dates for defaults; lab performance date defaults to seven days before submission.
- Browse the CSE telephone index, including office extensions, room numbers, mobile numbers, and email addresses.

## Getting Started

### Requirements

- Node.js and npm

### Install and run

From this directory, install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser. Update the form fields to customize a cover; the preview updates as you type. Choose the relevant download button to save a PDF.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run Oxlint. |

## Built With

- React 19
- Vite
- html2pdf.js for PDF export
- Oxlint

## Project Structure

```text
src/
	data/teachers.js       Instructor and telephone directory data
	App.jsx                App state and mode selection
	*Form.jsx              Cover form inputs
	*Preview.jsx           Cover page previews
	TelephoneIndex.jsx     CSE telephone directory
	utils.js               Date helpers and PDF export
```

## Notes

The telephone directory is maintained in `src/data/teachers.js`. Check that the contact information is current before relying on it. Form values are held in browser memory and are not saved between page reloads.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
