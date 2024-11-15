# Agora Video Meeting App

## Overview

This is a simple web application that allows users to join video meetings using Agora's real-time communication platform. The app consists of two main pages: a Join Room page and a Meeting Room page.

## Features

- User can enter username and channel name
- Join a video meeting room
- Real-time video communication
- Simple and intuitive interface

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- An Agora developer account
- Agora App ID

## Installation

1. Clone the repository

```
git clone https://github.com/yourusername/agora-video-meeting.git
```

2. Navigate to the project directory

```
cd agora-video-meeting
```

3. Install dependencies

```
npm install
```

4. Create a .env file in the root directory and add your Agora App ID

```
REACT_APP_AGORA_APP_ID=your_agora_app_id_here
```

## Usage

1. Start the development server

```
npm start
```

2. Open your browser and navigate to http://localhost:3000

3. Enter your username and channel name on the Join Room page

4. Click "Join Meeting" to enter the Meeting Room

## Technologies Used

- React
- Agora SDK
- WebRTC
