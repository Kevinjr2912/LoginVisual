let listaUsuarios = localStorage.getItem('lista');

if(!listaUsuarios){
    let user1 = {
        usuario: "User1",
        pass: "1234"
    }
    listaUsuarios.push(user1);   
}

localStorage.setItem('lista',JSON.stringify(listaUsuarios));



