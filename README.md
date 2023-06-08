# Moviefy - Open Source Next.js App

![image](https://github.com/Thedineshk24/moviefy/assets/33573799/94b9ec35-76a6-4d08-b3ce-6f9a32689a56)

Moviefy is an open-source Next.js application that allows users to browse and play videos of TV shows. The app fetches data from the YouTube API to retrieve information about TV shows and provides a seamless video playback experience.

## Features

- Browse a vast collection of TV shows
- View detailed information about each TV show
- Play videos of TV shows using the YouTube API
- Responsive design for optimal viewing on various devices
- Built with Next.js 13 and follows the App Directory structure

## Installation

To run the Moviefy app locally, follow these steps:

1. Clone the repository from GitHub:

```shell
git clone https://github.com/your-username/moviefy.git
```

cd moviefy

```
npm install
```
OR
```
yarn
```

## Obtain a YouTube API key

1. Visit the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project.
3. Enable the YouTube Data API.
4. Create an API key.
5. Copy the API key.

## Configure the YouTube API key

1. create `.env` file in a root.
2. give `NEXT_PUBLIC_YOUTUBE_API_KEY` = `YOUR_YOU_TUBE_API`

## Start the development server
```
npm run dev
```

## Start the development server

Open your browser and visit `http://localhost:3000` to see the app in action.

## Contributing

Contributions to the Moviefy app are welcome! If you would like to contribute, please follow these guidelines:

1. Fork the repository and create your branch from `master`.
2. Make your changes and test thoroughly.
3. Ensure your code adheres to the existing code style.
4. Include clear commit messages.
5. Push your branch to your forked repository.
6. Submit a pull request with a detailed description of your changes.

## Guidelines for Improvements

If you would like to contribute to the Moviefy app but are unsure where to start, here are some ideas for possible improvements:

- Implement user authentication: Allow users to create accounts, log in, and save their favorite TV shows or playlists.
- Improve search functionality: Enhance the search feature to provide more accurate and relevant results.
- Add additional metadata: Expand the app to display additional information about TV shows, such as cast and crew details, episode summaries, or user ratings.
- Implement playlists: Allow users to create and manage their own playlists of TV shows or episodes.
- Enhance video playback experience: Add features such as video quality settings, subtitles, or playback controls.

Feel free to explore other areas of the app and suggest improvements or new features!

## License

The Moviefy app is open-source and available under the [MIT License](LICENSE).

