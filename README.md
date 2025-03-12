# 🍋 Little Lemon 🍋

---

##### Table of Contents

- [Introduction](#introduction)
- [Design](#Design)
- [Screenshots](#Screenshots)
- [Live Preview](#live-preview)
- [Technologies](#Technologies)
- [How to run locally](#how-to-run-locally)

## Introduction

This website was created for the **Meta Front-end developer capstone project**. It showcases a Home page, a Table Reservation page, a Confirmation page and a 404 page for the non implemented pages.

## Design

[Figma Link](https://www.figma.com/design/Byqd6mcbAvyvOgOmOAAueO/Little-Lemon-Capstone?m=auto&t=qsbksqsOq1nOXQ1t-6)

## Screenshots

<details>
<summary>Home</summary>

**Desktop:**

![Screenshot of the Home page on Desktop](/screenshots/Little%20Lemon-Home-Desktop.png)

**Mobile**

![Screenshot of the Home page on Mobile](/screenshots/Little%20Lemon-Home-Mobile.png)

</details>

<details>
<summary>Reservation</summary>

**Desktop:**

![Screenshot of the Reservation page on Desktop](/screenshots/Little%20Lemon-Reservation-Desktop.png)

**Mobile**

![Screenshot of the Reservation page on Mobile](/screenshots/Little%20Lemon-Reservation-Mobile.png)

</details>

<details>
<summary>Confirmation</summary>

**Desktop:**

![Screenshot of the Confirmation page on Desktop](/screenshots/Little%20Lemon-Confirmation-Desktop.png)

**Mobile**

![Screenshot of the Confirmation page on Mobile](/screenshots/Little%20Lemon-Confirmation-Mobile.png)

</details>

<details>
<summary>Page Not Found</summary>

![Screenshot of the 404 page on Desktop](/screenshots/Little%20Lemon-404-Desktop.png)

</details>

## Live Preview

[Little Lemon](https://moonlit-lily-985ba0.netlify.app/)

## Technologies

- [React 19](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Formik](https://formik.org/)
- [Yup](https://www.npmjs.com/package/yup)
- [Normalize.css](https://necolas.github.io/normalize.css/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Vite](https://vite.dev/)

## How to run locally

0. Install pnpm
   `npm install -g pnpm@latest-10`
1. Install the project dependencies
   `pnpm install`
2. Run the app in dev mode on http://localhost:5173
   `pnpm dev`
3. Run the test scripts
   `pnpm test`
   or if you encounter a timeout error, run each test on its own
   `pnpm test src/__tests__/<FolderName>/<testName.test.jsx>`
