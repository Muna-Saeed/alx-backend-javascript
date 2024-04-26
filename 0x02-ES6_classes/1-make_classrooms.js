// 1-make_classrooms.js

// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom';

// Implement the initializeRooms function
export default function initializeRooms() {
  // Create an array to store ClassRoom instances
  const rooms = [];

  // Create three ClassRoom instances with sizes 19, 20, and 34
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);

  // Push the instances into the array
  rooms.push(room1, room2, room3);

  // Return the array of ClassRoom instances
  return rooms;
}
