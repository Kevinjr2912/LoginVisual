let listaUsuarios = localStorage.getItem('lista');

if(!listaUsuarios){
    let user = {
        usuario: "User1",
        pass: "1234"
    }
    listaUsuarios.push(user);   
}

localStorage.setItem('lista',JSON.stringify(listaUsuarios));



