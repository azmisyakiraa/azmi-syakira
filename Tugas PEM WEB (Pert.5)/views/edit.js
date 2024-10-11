<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit data pengguna</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #e4800e;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        h2 {
            text-align: center;
            color: #333;
        }

        form {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            width: 400px;
            margin: auto;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-weight: bold;
        }

        input[type="text"], input[type="email"] {
            width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
            background-color: #f9f9f9;
        }

        input[type="text"]:focus, input[type="email"]:focus {
            outline: none;
            border-color: #4CAF50;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }

        button:hover {
            background-color: #45a049;
        }

        .alert {
            display: none;
            background-color: #4CAF50;
            color: white;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
            text-align: center;
        }

    </style>
</head>
<body>
    <div>
        <h2>Edit Data Pengguna</h2>
        <form action="/update/<%= user.id %>" method="post">
            <label for="name">Nama:</label>
            <input type="text" id="name" name="name" required value="<%= user.name %>">

            <label for="Email">Email:</label>
            <input type="email" name="email" id="email" value="<%= user.email %>">

            <label for="phone">Telepon:</label>
            <input type="text" name="phone" id="phone" value="<%= user.phone %>">

            <button type="submit" onclick="tampilkanAlert()">Simpan</button>
        </form>

        <script>
            function tampilkanAlert() {
                alert("Data berhasil diubah!")
            }
        </script>
    </div>
</body>
</html>
