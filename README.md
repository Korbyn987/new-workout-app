# The Factory - Fitness Tracking Application

A modern, full-stack fitness tracking application built with React and PHP that helps users manage their workout routines, track BMI progress, and maintain their fitness journey.

## Features

- User Authentication (Login/Signup)
- BMI Calculator and Progress Tracking
- Workout Programs
- Nutrition Planning
- Personal Trainer Profiles
- Scheduling System
- Responsive Design

## Tech Stack

### Frontend

- **React.js**: Main frontend framework
- **React Router**: For client-side routing
- **Context API**: For state management (AuthContext)
- **CSS3**: Custom styling with modern design principles

### Backend

- **PHP**: Server-side logic
- **MySQL**: Database management
- **XAMPP**: Local development environment

## Project Structure

```
new-workout-app/
├── src/                    # React source files
│   ├── components/         # Reusable React components
│   ├── context/           # React Context providers
│   ├── App.js             # Main application component
│   ├── Layout.jsx         # Application layout wrapper
│   └── ...                # Other React components
├── Backend/               # PHP backend
│   └── src/              # PHP source files
└── public/               # Static assets
```

## Key Features Implementation

### Authentication

- Secure user authentication system
- Password hashing for security
- JWT token-based session management

### BMI Tracking

- Real-time BMI calculation
- Progress tracking over time
- Visual representation of progress

### Workout Programs

- Customizable workout routines
- Different difficulty levels
- Progress tracking

### React Hooks Used

- `useState`: For local state management
- `useEffect`: For side effects and data fetching
- `useContext`: For accessing global state
- Custom hooks for reusable logic

## Getting Started

1. Clone the repository
2. Set up XAMPP and ensure Apache and MySQL services are running
3. Import the database schema from `Backend/src/Workouts.sql`
4. Configure the database connection in `Backend/src/connection.php`
5. Install frontend dependencies:
   ```bash
   npm install
   ```
6. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

- `/login.php`: User authentication
- `/signup.php`: New user registration
- `/add_bmi_record.php`: Add BMI records
- `/get_bmi_records.php`: Retrieve BMI history

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
