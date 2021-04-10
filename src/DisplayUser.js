function DisplayUser(){
    let user={id: 1,name:'abhi',age:19};

    return (
        <div>
        name is {user.name} id is {user.id} age is {user.age}
        </div>
    );
}

export default DisplayUser;