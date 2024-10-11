<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crud Node JS - MYSQL</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #fa1186;
            margin: 0;
            padding: 0;
        }

        h1 {
            text-align: center;
            color: #333;
            margin-top: 20px;
        }

        table {
            width: 80%;
            margin: 20px auto;
            border-collapse: collapse;
        }

        table, th, td {
            border: 1px solid #ddd;
        }

        th, td {
            padding: 12px;
            text-align: left;
        }

        th {
            background-color: #810d51;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        a {
            color: #2196F3;
            text-decoration: none;
        }

        a:hover {
            color: #0b7dda;
            text-decoration: underline;
        }

        form {
            width: 50%;
            margin: 20px auto;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            margin-bottom: 10px;
            color: #333;
        }

        input[type="text"], input[type="email"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }

        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }

        button:hover {
            background-color: #45a049;
        }

        .btn-group a {
            padding: 6px 12px;
            background-color: #2196F3;
            color: white;
            border-radius: 4px;
            margin-right: 5px;
        }

        .btn-group a.delete-btn {
            background-color: #f44336;
        }

        .btn-group a.delete-btn:hover {
            background-color: #e53935;
        }

        .alert {
            display: none;
            background-color: #f44336;
            color: white;
            padding: 15px;
            margin: 20px;
            border-radius: 4px;
            text-align: center;
        }

        .alert.success {
            background-color: #4CAF50;
        }

    </style>
</head>
<body>
    <h1>Daftar User/Pengguna</h1>

    <table>
        <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Aksi</th>
        </tr>
        <% users.forEach(pengguna => { %>
        <tr>
            <td><%= pengguna.id %></td>
            <td><%= pengguna.name %></td>
            <td><%= pengguna.email %></td>
            <td><%= pengguna.phone %></td>
            <td class="btn-group">
                <a href="/edit/<%= pengguna.id %>">Edit</a> |
                <a href="/delete/<%= pengguna.id %>" class="delete-btn" onclick="return confirmHapus()">Hapus</a>
            </td>
        </tr>
        <% }) %>
    </table>

    <h2 style="text-align: center;">Tambah Pengguna Baru</h2>
    <form action="/add" method="post" onsubmit="alertTambah()">
        <label for="name">Nama:</label>
        <input type="text" id="name" name="name" required>

        <label for="Email">Email:</label>
        <input type="email" name="email" id="email" required>

        <label for="phone">Telepon:</label>
        <input type="text" name="phone" id="phone" required>

        <button type="submit">Tambah</button>
    </form>

    <!-- Alert Section -->
    <div id="alertMessage" class="alert success">Data berhasil ditambahkan!</div>

    <script>
        function alertTambah() {
            document.getElementById("alertMessage").style.display = 'block';
        }

        function confirmHapus() {
            return confirm("Apakah anda yakin ingin menghapus data?");
        }
    </script>
</body>
</html>
