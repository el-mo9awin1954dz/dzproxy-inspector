# dzproxy-inspector



⠀⠀⠀⠀⠀⠀⠀⢠⡄⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢹⣿⣄⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢷⢽⢦⡀⢹⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠘⣯⠳⡙⢦⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢿⡦⣄⣀⠀⠀⠀⠀⠀⠈⢷⡙⢦⡙⢿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⠻⣮⡿⣿⢶⣤⣀⠀⠀⠀⠻⣄⠙⢦⡙⠿⣿⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢨⠻⣮⣝⠲⢌⣙⠒⠦⣤⣈⡳⣤⡉⠲⢬⡑⠿⣟⣷⢶⣤⣤⣄⣀⣤⣀⣀⣄⣀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠻⣿⡷⣿⣿⣶⣬⣙⠲⢤⣀⡉⠙⠛⠳⢤⣈⡑⠲⠬⣍⣉⡒⠛⠛⠛⣿⠛⠛⠻⠭⣍⣉⣉⣛⣛⠻⠷⣶⣤⣄⣰⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⠻⣿⣗⠦⣍⡙⠛⠶⢦⣍⡙⠒⠦⢤⣄⣉⠓⠲⢦⢤⣭⡤⠶⠒⠚⢷⣦⣀⠀⠸⣧⡄⠀⠉⠙⠒⠀⠈⠙⠳⡿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢰⣶⣶⣽⣷⣦⣍⣑⠒⠤⢌⣉⣙⠒⠶⠤⢬⣹⣿⣄⢹⣇⡒⠒⠦⠤⡸⣧⡉⠛⠒⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⣷⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠉⠻⢾⣕⡺⠭⣙⣛⠲⠶⢦⣭⣍⣑⣒⠒⠒⠒⠂⠉⠉⢛⡖⠆⣀⣀⣈⣙⣶⠒⠒⠚⠀⠀⠀⠀⠀⢀⣠⣤⣀⣀⠀⠘⢿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠙⢓⣶⣬⣍⣑⣒⣶⠶⠭⠭⠭⠉⠉⠉⠍⠭⠉⠙⠶⣥⣄⣀⣀⣩⣿⡓⠒⠀⠀⠀⠀⠀⢻⣁⣀⠀⠈⠙⢦⠈⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢿⣭⣉⠉⢭⣉⡛⠛⠓⠒⠲⠶⠶⠶⠶⠖⠒⠒⣚⡩⠍⠉⢻⣍⣤⠀⠀⠀⠀⠀⠀⠀⢾⡉⠉⠛⠓⠀⠀⠈⣇⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢩⣻⣳⣶⣮⣭⣭⣍⣉⣉⣉⣉⣉⣉⣭⣭⠤⠴⠒⢋⡿⢋⠤⠔⠒⠊⠉⢀⡴⠚⠛⢛⠓⠶⠆⠀⠀⠀⢻⠈⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠿⣍⣧⡤⠭⣍⣉⣉⣉⣉⣀⣠⡤⠤⠴⠒⠊⣉⣨⠿⠒⠒⢶⣛⣀⣠⣞⣛⣶⠖⠲⠶⠀⠀⢀⡄⠀⠸⡦⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⡶⣶⣦⣤⣤⣿⡦⠤⠴⠖⠛⠋⣉⣀⠤⠔⣀⡤⢿⣛⡩⢤⣈⣻⡤⠶⠆⠀⠀⡞⠁⠀⠀⠉⢽⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⢯⣭⣓⣀⣤⣒⣒⣒⣾⣉⣉⣁⣤⡴⢚⡥⠖⢋⣥⠶⠚⡉⠉⢧⣤⣤⠀⠸⢿⡶⠃⠀⠀⠀⢻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⣽⣯⣭⡥⠴⢻⡟⠘⣉⣠⡾⢋⡤⠖⣭⡴⢖⠻⣯⡴⠗⠀⠀⣧⣠⡆⠀⠀⠀⠹⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠛⢛⣿⣫⠖⠉⣰⠟⣡⠖⢉⣾⣏⣀⣠⢤⡄⠈⣿⣠⡗⢀⠀⠀⠀⠙⠻⣦⣄⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣁⣱⣶⡞⣡⠞⣁⡴⢋⡴⢋⡿⢶⡟⠀⠀⠈⢻⣀⡿⠀⢀⡇⠀⠀⠀⠈⠙⠓⠶⢤⣄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⢠⡟⡝⣡⣾⢋⡴⠋⣴⠏⣠⠋⣿⠦⣶⠀⢈⠿⣧⢀⣾⣷⡀⢠⡀⠀⠀⠀⠀⠁⢸
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡷⠚⣹⣣⢞⣷⣿⢇⡼⣡⣿⣵⢃⣾⡟⣹⢠⢸⢩⠘⡏⣳⡞⢧⣀⣿⣦⣷⢀⡞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠷⠛⠁⣿⣿⡾⢛⣿⣡⢾⣹⢡⣿⡏⣾⣼⢠⣿⡇⣷⣀⣽⠀⢨⢉⡄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠋⠁⢸⣷⠟⣿⣣⠟⣿⡾⣿⣷⡏⠛⠛⠶⠾⠾⠇
⠀EL-MO9AWIN

Node Js Forward inspector http https Proxy can be used as a firewall and network breage can interct connect tls method and grab http response 
/START node dzproxy-inspector.js HOST PORT
