# Vue Frontend for Earn Online App

Welcome to the Vue frontend of the Earn Online App! This application is designed to help users discover new ways to earn money online through various opportunities such as online surveys, signups, rewards, and more.

## Project Structure

The project is organized as follows:

```
frontend-vue/
├── public/
│   └── index.html          # Main HTML file for the Vue frontend
├── src/
│   ├── components/         # Vue components
│   │   ├── AppCard.vue     # Component to display app information
│   │   └── Wishlist.vue     # Component to manage wishlist of apps
│   ├── views/              # Vue views
│   │   ├── Home.vue        # Landing page of the application
│   │   └── MemberArea.vue   # User-specific features
│   ├── services/           # Services for database interaction
│   │   └── supabase.ts     # Functions to interact with Supabase
│   └── main.ts             # Entry point for the Vue application
├── package.json             # Configuration file for npm
├── tsconfig.json           # TypeScript configuration file
├── Dockerfile               # Dockerfile for building the Vue frontend
└── README.md                # Documentation for the Vue frontend
```

## Features

- **Discover New Ways to Earn Money Online**: Explore various opportunities to earn money through online surveys, signups, rewards, and more.
- **Wishlist**: Users can manage their wishlist of apps they are interested in.
- **Member Area**: Access user-specific features and sign up for apps directly from the list.

## Getting Started

To get started with the Vue frontend, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd earn-online-app/frontend-vue
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   npm run serve
   ```

4. Open your browser and navigate to `http://localhost:8080` to view the application.

## Deployment

This application can be deployed using Docker. To build and run the Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t earn-online-app-vue .
   ```

2. Run the Docker container:
   ```
   docker run -p 8080:8080 earn-online-app-vue
   ```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Thank you for using the Earn Online App! We hope you find valuable opportunities to earn money online.