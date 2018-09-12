import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:8000");

/**
 * Connect to the server and starts listening to new messages.
 * @param {String} username - the entered username.
 * @param {Function} cb - callback function.
 */
export const connect = (username, cb) => {
  socket.emit("subscribeToChat", username);
  socket.on("newMessage", msg => cb(null, msg));
};

/**
 * Sends a new message to the server.
 * @param {String} msg - the message value.
 */
export const sendMsg = msg => {
  socket.emit("insertNewMessage", msg);
};

/**
 * Disconnects from the server.
 */
export const disconnect = () => {
  socket.emit("disconnect");
};
