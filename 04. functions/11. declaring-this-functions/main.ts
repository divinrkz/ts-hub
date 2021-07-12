interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
  }
  
const db = getDB();

const admins = db.filterUsers(function (this: User) {
    return this.admin;
});


function getDB(): DB {
    throw new Error('Method unimplemented')
}