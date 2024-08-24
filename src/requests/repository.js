class Repository{
 
    constructor(base_url, path){
        this.base_url = base_url
        this.path = path
    }
 
 
    built_path(){
        // construire la requete
    }
 
    async make_request(params, ...ags) {
        // faire la requete
        this.built_path();
    }
 
    async get () {
        return await this.make_request();
    }
 
    async get_by_id(id){
        return await this.make_request({_id: id});
    }
 
    async post(data){
        return await this.make_request(data);
    }
 
    async put(id, data){
        return await this.make_request({_id: id}, data);
    }
}
 
 
// ------------------------ User Repository ----------------------
 
class UserRepository extends Repository{
    constructor(){
        super("http://127.0.0.1:8000", "users")
    }
}
 
 
 
async function get_all_users(){
    /*
    Cette fonction permet de recuperer tous les utilisateurs
    */
    const user_repo = new UserRepository();
    return await user_repo.get();
}