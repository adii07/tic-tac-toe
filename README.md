This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To set up and run the project locally, follow these steps:

1. **Install dependencies**  
    Navigate to the project directory and install the required packages:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

2. **Start the development server**  
    Launch the app in development mode:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

3. **View in browser**  
    Open [http://localhost:3000](http://localhost:3000) to see the app running.

4. **Edit source code**  
    Modify `app/page.tsx` or other files in the `app/` directory. The app supports hot reloading, so changes will reflect instantly.

## Project Overview

This project is a web-based Tic-Tac-Toe game built with [Next.js](https://nextjs.org). It showcases modern React patterns, state management, and Next.js features such as file-based routing and optimized font loading.

### Key Technologies

- **Next.js**: Framework for server-rendered React applications.
- **React**: UI library for building interactive interfaces.
- **TypeScript**: Provides static typing for safer code.
- **next/font**: Optimizes and loads custom fonts (e.g., [Geist](https://vercel.com/font)).

## Features

- Interactive 3x3 Tic-Tac-Toe board with click-to-play functionality
- Real-time player turn indication (X and O)
- Automatic win and draw detection with visual feedback
- Responsive layout for desktop and mobile devices
- Clean, modular code structure for easy maintenance

## Folder Structure

```
tic-tac-toe/
├── app/         # Main application code (pages, components)
├── public/      # Static assets (images, favicon, etc.)
├── styles/      # CSS and styling files
├── README.md    # Project documentation
├── package.json # Project metadata and scripts
```

## How to Play

1. Start the development server as described above.
2. Open the app in your browser.
3. Click any empty square to make your move (X starts first).
4. Players alternate turns. The game highlights the winner or declares a draw when appropriate.
5. Refresh the page to start a new game.

## Customization

- **Styling**: Modify files in the `styles/` directory to change the appearance.
- **Game Logic**: Update components in `app/` to add features (e.g., score tracking, AI opponent).
- **Deployment**: Easily deploy to [Vercel](https://vercel.com/) or any platform supporting Next.js.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — Learn about features and APIs.
- [Learn Next.js](https://nextjs.org/learn) — Interactive Next.js tutorial.
- [React Documentation](https://react.dev/) — Official React docs.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and open a pull request.
4. Please follow the existing code style and add tests if applicable.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.