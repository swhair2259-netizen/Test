# Earn Online App - React Frontend

Welcome to the Earn Online App! This project is designed to help users discover new ways to earn money online through various opportunities. The React frontend serves as the main interface for users to explore apps, manage their wishlist, and access member-specific features.

## Features

- **App Listing**: Browse a comprehensive list of apps that offer online surveys, signups and rewards, learn and earn quizzes, crypto and NFT gaming, and more.
- **App Details**: View detailed information about each app, including earning evidence, discounts, coupons, referral links, and tips and tricks.
- **Wishlist**: Create and manage a wishlist of apps you are interested in.
- **Member Area**: Access user-specific features, including signing up for apps directly from the list.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Docker (for containerization)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/earn-online-app.git
   cd earn-online-app/frontend-react
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To run the application in development mode, use the following command:
```
npm start
```
This will start the React application and open it in your default web browser.

### Building for Production

To build the application for production, use:
```
npm run build
```
This will create an optimized build of the app in the `build` directory.

### Docker

To run the application using Docker, build the Docker image:
```
docker build -t earn-online-app-react .
```
Then run the container:
```
docker run -p 3000:3000 earn-online-app-react
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## Acknowledgments

Thank you for checking out the Earn Online App! We hope you find valuable opportunities to earn money online.