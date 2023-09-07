const {online} = require('toadzonecraftapi')

async function lobbies() {
    try {
      const kbffa = await online.kbffa();
      const arenapvp = await online.arenapvp();
      const skypvp = await online.skypvp();
      const skywars = await online.skywars();
      const ctw = await online.ctw();
      const bw = await online.bedwars();
      const totales = await online.total();

      const num1 = parseInt(kbffa[0]);
      const num2 = parseInt(arenapvp[0]);
      const num3 = parseInt(skypvp[0]);
      const num4 = parseInt(skywars[0]);
      const num5 = parseInt(ctw[0]);
      const num6 = parseInt(bw[0]);
      const num7 = parseInt(totales[0]);


    var todo = num1+num2+num3+num4+num5+num6
    var lobbies = num7-todo

    console.log("Jugadores totales: " + todo)
    console.log("Jugadores en los lobbies: " + lobbies)
    } catch (error) {
     console.error(error)   
    }
}

lobbies()