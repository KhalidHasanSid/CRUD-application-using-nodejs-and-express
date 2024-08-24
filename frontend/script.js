
const tablebody = document.querySelector('tbody');
const email = document.querySelector('#email1');
const password  = document.querySelector('#password1');
const submitBtn = document.querySelector('#submit');
async function fetchData(){
try {
    const response = await fetch('/user',{method:'GET'});
    const data = await response.json();
    tablebody.innerHTML = '';
    data.forEach(element => {
       updateList(element);
    });

} catch (error) {
    console.log(error);
}
}

function updateList(element){
    const row = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');

    td1.innerText = element.email;
    td2.innerText = element.password;
    td3.innerHTML = `<button class = 'btn btn-primary' onclick="updateUser('${element._id}','${element.email}','${element.password}')">Update</button>`;
    td4.innerHTML = `<button class='btn btn-danger' onclick="deleteUser('${element._id}')">Delete</button>`;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    tablebody.appendChild(row);
}

submitBtn.addEventListener('click', addUser);

async function addUser(event){
    try {
        event.preventDefault();
        const email1 = email.value;
        const password1 = password.value;
        const response = await fetch('/user',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email:email1,password:password1}),
        });
        email.value='';
        password.value='';
        fetchData();

    } catch (error) {
        console.log(error.message);
    }
    
}

async function updateUser(id,email1,password1){
try {
    email.value = email1;
    password.value = password1;
    submitBtn.textContent = 'Update';
    submitBtn.removeEventListener('click',addUser);
    submitBtn.addEventListener('click', async function update(ev){
        updateEmail = email.value;
        updatePassword = password.value;
        const response = await fetch(`/user/${id}`,{
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email:updateEmail,password:updatePassword})
        });
        submitBtn.textContent = "Add User";
        submitBtn.removeEventListener('click',update);
        submitBtn.addEventListener('click',addUser);
        email.value = '';
        password.value= '';
        fetchData();
    });
   
} 
catch (error) {
    console.log(error);
}
}

async function deleteUser(id){
    try {
        const response = await fetch(`/user/${id}`,{method:'DELETE'});
        fetchData();
    } catch (error) {
        
    }
}
fetchData();