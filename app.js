{
    document.addEventListener('click', btn => {

            let oneOrMany = '';
            if(btn.target.id === "oneUser"){
                oneOrMany = '1';
            }
            fetch('https://jsonplaceholder.typicode.com/users/' + oneOrMany)
            .then((response) => 
            response.json()
            )
            .then((json) => 
            drawUsers(json, oneOrMany)
            );
            
            // console.log(users.id);
            
    });

    const drawUsers = (users, number) => {
        let sectionUser = document.getElementById('printUser');
        sectionUser.innerHTML = '';
        if(number === '1'){
            // console.log(sectionUser)
            sectionUser.innerHTML += `
            
                <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${users.name}</h5>
                    <small>${users.username}</small>
                    </div>
                    <p class="mb-1">${users.email}</p>
                    <small>${users.website}</small>
                </a>
            `
        }else{

            users.forEach(user => {
                sectionUser.innerHTML += `
            
                <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${user.name}</h5>
                    <small>${user.username}</small>
                    </div>
                    <p class="mb-1">${user.email}</p>
                    <small>${user.website}</small>
                </a>
            `
            });
        }
    }
}