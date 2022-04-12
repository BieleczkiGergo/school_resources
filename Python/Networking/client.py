#Python program to establish connection between two computers
#Client side

import socket

HOST = "127.0.0.1"  # The server's hostname or IP address
PORT = 65432  # The port used by the server

message = input("Type in the message: ")

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST, PORT))
    s.sendall(message.encode('ASCII'))
    data = s.recv(1024)

print(f"Received {data!r}")