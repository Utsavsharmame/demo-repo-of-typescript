
/*interface User {
    name: string;
    id: string;  
    age: number;
    email:string;
    password:string;

};

type UpdateProps = Pick<User, 'name' | 'id' | 'age'>;

function updateUser(updateProps: UpdateProps) {
    console.log(updateProps);
}





const a = [1,2,3];
a[2] = 4;


// readonly 
type User = {
     name: string;
     id: string;

}

const user: Readonly<User>= {
    name: 'John',
    id: '123'
}

user.id = '456'; // Error: Cannot assign to 'id' because it is a read-only property.


record and maps:-


type User = {
    name: string;
    age: number;
    email: string;
}

const users = new Map<string, User>()
users.set("ras@qd1", { name: "Ras", age: 25, email: "ras@qd1"})
users.set("sara@qd1", { name: "Sara", age: 25, email: "sara@qd1"})

const user = users.get("ras@qd1")
console.log(user);

*/

//exclude:-



